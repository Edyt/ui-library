import styles from './DossierBadge.css';

import React, { Component } from 'react';

let DossierBadge = React.createClass({

  render() {
    return (
      <div className={ styles.ApplicationNumber }>
        <b className= {styles.Phase } title={this.props.phase}>S</b>
        <span className={ styles.Number }>{this.props.children}</span>
        <i className={ styles.Language }>EN</i>
      </div>
    );
  }

});

// Ideal Controls:
// - [ ] phase updates the class used and phase character that is displayed
// - [ ] Dossier Num. updates the class used for styling that dossier badge
// - [ ] DisplayType indicates if this is an anchor, div, or span
// - [ ] not including a phase param does not display the phase part of the dossier badge

export default DossierBadge;
