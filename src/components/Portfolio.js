import React from 'react';
import Project from './Project';

export default class Portfolio extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className={"portfolio"} id="portfolio">
        <div className="grid grid-pad">
          <h3 className="small title">Portfolio Principles</h3>
          <div className="fbox">
          <div className="fcol">
            <div className="cell small">
              <h3 className="title">Design</h3>
              Website design is a subjective concept, but most can agree on some basic guidelines.  It should follow basic principles of accessibility.
              User interactions and controls should be intuitive. Above all it should present content to the user simply,clearly and quickly.
            </div>
          </div>
          <div className="fcol">
            <div className="cell small">
              <h3 className="title">Responsive</h3>
              Given the variety of devices that can be used to access the web, responsiveness is becoming more important than ever.
              My goal is for my projects to look good at any resolution.
            </div>
          </div>
          <div className="fcol">
            <div className="cell small">
              <h3 className="title">Universal</h3>
              Testing is a critical part of the development process.  I strive to support all major browsers and test for speed and validity.
            </div>
          </div>
        </div>
        </div>
       <Project />
      </div>
    )
  }
}
