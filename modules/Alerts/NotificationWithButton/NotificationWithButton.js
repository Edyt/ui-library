import styles from './NotificationWithButton.css';

import React, { Component } from 'react';

import Icon from '../../../components/Icon/Icon';
import Button from '../../../components/Button/Button';

let NotificationWithButton = React.createClass({

  render() {
    return (
      <div className={ styles.Notification }>
        <Icon className={ styles.Icon } icon={this.props.icon} />
        <h3 className={ styles.Text }>{this.props.children}</h3>
        <Button className={ styles.Button } label={this.props.buttonLabel} />
      </div>
    );
  }

});

export default NotificationWithButton;
