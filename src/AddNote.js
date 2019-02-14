import React, { Component } from "react";
import NotefulContext from "./NotefulContext";

export default class AddNote extends Component {
  static contextType = NotefulContext;
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.contentInput = React.createRef();
    this.state = {
      folder: "",
      name: "",
      content: "",
      contentValid: false,
      nameValid: false,
      folderValid: false,
      validationMessages: {
        name: "",
        message: ""
      },
      formValid: false
    };
  }

  handlefolderSection = () => {
    return this.context.folders.map((el,i) => (
      <option value={el.id} key={i}>{el.name}</option>
    ));
  };
  handleFolderOption = e => {
    this.setState({
      folder: e.target.value
    });
  };
  handleSubmit = ev => {
    ev.preventDefault();
   
    if (!this.state.formValid) {
      alert("Please enter Correct input");
    } else {
        const note = {
            name: this.nameInput.current.value,
            modified: new Date(),
            folderId: this.state.folder,
            content: this.contentInput.current.value
          };
      const options = {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(note)
      };
      fetch("http://localhost:9090/notes/", options)
        .then(res => res.json())
        .then(resJson => {
          this.context.addNote(resJson);
          this.props.history.push(`/notes/${resJson.id}`);
        });
    }
  };

  updateContent = content => {
    this.setState({ content }, () => this.validateContent(content));
  };
  validateName = content => {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    content = content.trim();
    if (content.length < 1) {
      fieldErrors.message = `Name is required`;
      hasError = true;
    }
    this.setState(
      {
        validationMessages: fieldErrors,
        nameValid: !hasError
      },
      this.formValid
    );
  };

  validateContent = content => {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    content = content.trim();
    if (content.length < 1) {
      fieldErrors.message = "content is required";
      hasError = true;
    }
    this.setState(
      {
        validationMessages: fieldErrors,
        contentValid: !hasError
      },
      this.formValid
    );
  };

  formValid() {
    this.setState({
      formValid: this.state.nameValid && this.state.contentValid
    });
  }

  updateName = name => {
    this.setState({ name }, this.validateName(name));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Name-Input">Name: </label>
        <input
          id="Name-Input"
          type="text"
          ref={this.nameInput}
          onChange={e => this.updateName(e.target.value)}
        />

        {(!this.state.nameValid || !this.state.contentValid) && (
          <p className="error">{this.state.validationMessages.message}</p>
        )}
        <label htmlFor="content-input">Content: </label>
        <input
          id="content-input"
          type="text"
          ref={this.contentInput}
          onChange={e => this.updateContent(e.target.value)}
        />

        <label htmlFor="folders-list">Folders: </label>
        <select id="folders-list" onChange={this.handleFolderOption}>
          <option value="null">Please Select a Folder</option>
          {this.handlefolderSection()}
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
