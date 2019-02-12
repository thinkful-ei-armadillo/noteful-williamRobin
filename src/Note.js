import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Note extends Component {
  
  render() {
    let date = new Date(this.props.date);
    let dateString =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    return (
      <li>
        <h3>
          <Link to={`/notes/${this.props.id}`}>{this.props.name}</Link>
          <span>{dateString}</span>
        </h3>
      </li>
    );
  }
}