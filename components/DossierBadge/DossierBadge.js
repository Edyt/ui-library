import styles from './DossierBadge.css';

import React, { Component } from 'react';

import Icon from 'Icon/Icon';

let DossierBadge = React.createClass({

  render() {
    return (
      <div className={styles.application-number}>
        <b class="phase" title="{this.props.phase}">S</b>
        <span className={styles.number}>{this.props.children}</span>
        <i class={styles.language}>XX</i>
      </div>


      <button className={ styles.button }>
        <Icon className={ styles.icon} icon={this.props.icon} />
        <span className={ styles.label }>{this.props.label}</span>
      </button>
    );
  }

});

// Ideal Controls:
// - [ ] phase updates the class used and phase character that is displayed
// - [ ] Dossier Num. updates the class used for styling that dossier badge
// - [ ] DisplayType indicates if this is an anchor, div, or span
// - [ ] not including a phase param does not display the phase part of the dossier badge

export default DossierBadge;
