import React, { Component } from 'react';
import './Exhibit.css';
class Exhibit extends Component {
  render() {
    return (
    <div class="row">
        <div class="column">
            <h3>{this.props.heading}</h3>
            <p>{this.props.content}</p>
        </div>
    </div>
    );
  }
}
export default Exhibit;