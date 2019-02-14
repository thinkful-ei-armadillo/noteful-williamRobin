import React, { Component } from "react";
import NotefulContext from "./NotefulContext";

export default class AddFolder extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.folderInput = React.createRef();
  }

  handleAddFolder(e) {
    e.preventDefault();
    const name = this.folderInput.current.value;
    this.addFolder(name);
  };

  addFolder = (value) => {
    const folder = {
      name: value,
    };
    const options = {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(folder)
    };

    fetch("http://localhost:9090/folders/", options)
      .then(res => res.json())
      .then(resJson => { 
          this.context.addFolder(resJson);
          this.history.push(`/folders/${resJson.id}`);
      })
    }

  render() {
    return (
      <>
        <h2>Create a Folder</h2>
        <form onSubmit={e => this.handleAddFolder(e)}>
          <label htmlFor="folder-name">Name: </label>
          <input name="folder-name" id="folder-name" type="text" 
          ref={this.folderInput} />
          <button type="submit">Add Folder</button>
        </form>
      </>
    );
  }
}
