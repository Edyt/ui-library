import styles from './Icon.css';

import React, { Component } from 'react';

let Icon = React.createClass({

  render() {
    if (!this.props.icon) {
      return null;
    }

    return (
      <i className={ this.props.className + ' ' + styles[this.props.icon] }></i>
    );
  }

});

export default Icon;
