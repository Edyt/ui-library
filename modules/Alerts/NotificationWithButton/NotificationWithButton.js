import styles from './NotificationWithButton.css';

import React, { Component } from 'react';

import Icon from '/components/Icon/Icon';

let Button = React.createClass({

  render() {
    return (
      <button className={ styles.btn }>
        <Icon className={ styles.icon} icon={this.props.icon} />
        <span className={ styles.label }>{this.props.label}</span>
      </button>
    );
  }

});

export default Button;
