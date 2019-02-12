import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note'

export default class NoteView extends Component {

  render() {
    const note = this.props.note;
    return (
      <div>
        <Note date={note.modified} key={note.id} name={note.name} content={note.content} id={note.id} />
        <p>{note.content}</p>
      </div>

    );
  }
}
