import React, { Component } from 'react';
import Note from './Note';
import NotefulContext from './NotefulContext';

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
    return <ul>{this.notesHtml()}</ul>;
  }
}

MainView.defaultProps = {
  notes: [],
  match: null
};
