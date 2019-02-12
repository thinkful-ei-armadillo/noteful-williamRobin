import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FolderSidebar extends Component {
  componentDidMount() { }

  foldersHtml() {

    return  (
        <div className= 'folder-sidebar' >
          <Link to={`/folders/${this.props.folder.id}`}>Go back</Link>
          <p>{this.props.folder.name}</p>
        </div>
      );
  }
  render() {
    return <ul>{this.foldersHtml()}</ul>;
  }
}

FolderSidebar.defaultProps = {
  folders: [],
  match: null
};
