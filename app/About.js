import React from 'react';
var ReactMarkdown = require('react-markdown');

let AboutPage = require('./About.md');

let About = React.createClass({

  render() {

    return(
      <section id="about">
        <ReactMarkdown source={AboutPage} />
      </section>
    );
  }
});

export default About;
