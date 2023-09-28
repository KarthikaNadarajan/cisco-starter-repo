import React, { Component } from 'react';
import './Banner.css'
class Banner extends Component {
  render() {
    return (
    <header class="banner">
<h1>{this.props.text}</h1>
</header>
);
  }
}
export default Banner;