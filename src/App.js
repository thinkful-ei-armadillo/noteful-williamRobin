import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainView from "./MainView";
import MainSidebar from "./MainSidebar";
import FolderSidebar from "./FolderSidebar";
import NoteView from "./NoteView";
import Header from "./Header";
import NotefulContext from "./NotefulContext";
import AddFolder from "./AddFolder";
import "./App.css";
import AddNote from "./AddNote";

class App extends Component {
  state = {
    folders: [],
    notes: []
  };

  componentDidMount() {
    const BASE_URL = `http://localhost:9090`;

    fetch(BASE_URL + "/folders")
      .then(response => {
        return response.json();
      })
      .then(folders => {
        this.setState({ folders });
      });

    fetch(BASE_URL + "/notes")
      .then(response => {
        return response.json();
      })
      .then(notes => {
        this.setState({ notes });
      });
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes: newNotes });
  };

  addFolder = value => {
    const newValue = [...this.state.folders, value];
    this.setState({
     folders: newValue
    });
  }
  addNote = value => {
    const newValue = [...this.state.notes, value];
    this.setState({
     notes: newValue
    });
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    };

    return (
      <NotefulContext.Provider value={contextValue}>
        <main className="App">
          <Header />
          <div className="sidebar">
            <Route
              exact
              path="/"
              component={MainSidebar}
              //render={() => <MainSidebar folders={this.state.folders} />}
            />
            <Route
              path="/folders/:folderId"
              component={MainSidebar}
              /*render={props => (
                <MainSidebar match={props.match} folders={this.state.folders} />
              )}*/
            />
            <Route
              path="/notes/:noteId"
              component={FolderSidebar}
              /*render={props => (
                <FolderSidebar
                  folder={this.state.folders.find(
                    e =>
                      e.id ===
                      this.state.notes.find(
                        e => e.id === props.match.params.noteId
                      ).folderId
                  )}
                />
              )}*/
            />
          </div>

          <div className="main-view">
            <Route
              exact
              path="/"
              component={MainView}
              //render={() => <MainView notes={this.state.notes} />}
            />
            <Route
              exact
              path="/folders/:folderId"
              component={MainView}
              /*render={props => {
                return (
                  <MainView
                    match={props.match}
                    notes={this.state.notes.filter(
                      note => note.folderId === props.match.params.folderId
                    )}
                  />
                );
              }}*/
            />
            <Route
              path="/notes/:noteId"
              component={NoteView}
              /*render={props => {
                return (
                  <NoteView
                    note={this.state.notes.find(
                      e => e.id === props.match.params.noteId
                    )}
                  />
                );
              }}*/
            />
            <Route path="/add-folder" component={AddFolder} />
            <Route path='/add-note' component={AddNote}/>
          </div>
        </main>
      </NotefulContext.Provider>
    );
  }
}

export default App;

/*
Each route should have a header, main section and a sidebar section

Every route will have the same header section, the app's title should be a link to the main route.

The state will be supplied below in a JSON object and contains an array of folders and an array of notes.

Set the state inside the main App component. (We'll use an API call to populate this state in a future checkpoint.)
The main route:

Should be displayed when the path is /
The main section will display all of the available notes
Each note should show it's name and modified date
The sidebar will display a list of folders with none selected

The dynamic folder route:

Should be displayed when the path is /folder/<with-a-folder-id-here>
The folder-id will reference an id of one of the folders in state
The main section should display only the notes that are "in" the selected folder
The sidebar should display the folder list with the selected folder highlighted

The dynamic note route:

Should be displayed when the path is /note/<with-a-note-id-here>
The note-id will reference an id of one of the notes in state
The main section should display the currently selected notes name, modified date and content
The sidebar should the folder of the currently selected note as well as a "back" button.
 */
