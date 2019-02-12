import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

export default class NoteView extends Component {
  render() {
    const note = this.props.note;
    return (
      <React.Fragment>
        <div className="note-item">
          <Note
            date={note.modified}
            key={note.id}
            name={note.name}
            id={note.id}
          />
        </div>
        <p>{note.content}</p>
      </React.Fragment>
    );
  }
}
