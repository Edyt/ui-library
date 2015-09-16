import styles from './Button.css';

import React, { Component } from 'react';

import Icon from 'Icon/Icon';

let Button = React.createClass({

  render() {
    return (
      <button className={ styles.button }>
        <Icon className={ styles.icon} icon={this.props.icon} />
        <span className={ styles.label }>{this.props.label}</span>
      </button>
    );
  }

});

export default Button;
