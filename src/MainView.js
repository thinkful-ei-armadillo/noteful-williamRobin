import React, { Component } from 'react';
import Note from './Note'
import { Link } from 'react-router-dom';

export default class MainView extends Component {
  notesHtml() {
    return this.props.notes.map(note => {

      return (
        <Note date={note.modified} key={note.id} name={note.name} content={note.content} id={note.id} />
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
