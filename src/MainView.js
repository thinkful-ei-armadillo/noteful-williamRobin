import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainView extends Component {
  notesHtml() {
    return this.props.notes.map(note => {
      let date = new Date(note.modified);
      let dateString =
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

      return (
        <li key={note.id}>
          <h3>
            <Link to={`/notes/${note.id}`}>{note.name}</Link>
            <span>{dateString}</span>
          </h3>
        </li>
      );
    });
  }

  render() {
    return <ul>{this.notesHtml()}</ul>;
  }
}

MainView.defaultProps = {
  notes: [],
  match: null
};
