import React, { Component } from "react";
import NotefulContext from "./NotefulContext";

export default class AddFolder extends Component {
  static contextType = NotefulContext;

  handleAddFolder = (e) => {
    e.preventDefault();
    console.log(e.current.target);
  };

  render() {
    return (
      <>
        <h2>Create a Folder</h2>
        <form onSubmit={e => this.handleAddFolder()}>
          <label htmlFor="folder-name">Name: </label>
          <input name="folder-name" id="folder-name" type="text" />
          <button type="submit">Add Folder</button>
        </form>
      </>
    );
  }
}
