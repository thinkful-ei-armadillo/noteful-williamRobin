import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainSidebar extends Component {
  componentDidMount() {}

  foldersHtml() {
    let selectedFolder;

    if (this.props.match && this.props.match.params) {
      selectedFolder = this.props.match.params.folderId;
    }

    return this.props.folders.map(folder => {
      const className = `note-folder ${
        selectedFolder && selectedFolder === folder.id ? 'selected' : ''
      }`;

      return (
        <li className={className} key={folder.id}>
          <Link to={`/folders/${folder.id}`}>{folder.name}</Link>
        </li>
      );
    });
  }
  render() {
    return <ul>{this.foldersHtml()}</ul>;
  }
}

MainSidebar.defaultProps = {
  folders: [],
  match: null
};
