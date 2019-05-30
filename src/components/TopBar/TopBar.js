import React, { Component } from 'react';
import './TopBar.css';

class TopBar extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>TMDb React App</h2>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default TopBar;
