import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class MainView extends Component {

  render() {
    return (
      <div>
        <h2>
          <Link to='/'>Noteful</Link>
        </h2>
      </div>
    )
  }
}