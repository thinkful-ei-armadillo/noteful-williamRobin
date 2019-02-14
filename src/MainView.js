import React, { Component } from 'react';
import Note from './Note';
import NotefulContext from './NotefulContext';
import {Link} from 'react-router-dom';

export default class MainView extends Component {
  static contextType = NotefulContext;

  notesHtml() {
    let { notes } = this.context;
    if (this.props.match.params.folderId !== undefined) {
      notes = notes.filter(
        note => note.folderId === this.props.match.params.folderId
      );
    }

    return notes.map(note => {
      return (
        <li className="note-item" key={note.id}>
          <Note date={note.modified} name={note.name} id={note.id} />
        </li>
      );
    });
  }

  render() {
    return (
    <React.Fragment>
      <ul>{this.notesHtml()}</ul>
      <Link to={"/add-note"}>
      <button>Add Note</button>
      </Link>
    </React.Fragment> 
    );
  }
}
