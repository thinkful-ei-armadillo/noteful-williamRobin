import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Note extends Component {
  render() {
    let date = new Date(this.props.date);
    let dateString = date.toDateString();
    //date.getMonth() + 1 + ' ' + date.getDate() + ',' + date.getFullYear();

    return (
      <React.Fragment>
        <h2>
          <Link to={`/notes/${this.props.id}`}>{this.props.name}</Link>
        </h2>
        <div>Last Modified: {dateString}</div>
      </React.Fragment>
    );
  }
}
