import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class MainSidebar extends Component {
  foldersHtml  = this.props.folders.map(folder => {
    return <li><Link to='/folders/' >{folder.name}</Link></li>
                    })
  render() {
    return (
      <ul>
        {this.foldersHtml}
      </ul>
    )
  }
}