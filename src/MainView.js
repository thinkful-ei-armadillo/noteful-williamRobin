import React, { Component } from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';

export default class MainView extends Component {
  notesHtml() {
    return this.props.notes.map(note => {
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
