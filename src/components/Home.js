import React from 'react';

export default class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      flipState: ""
    }
  }

  flip(){
    var newState = this.state.flipState === "" ? " flip" : ""
    this.setState({
      flipState: newState
    });
  }

  render(){
    return(
      <section className="frontpage" id="home">
        <h1><strong>David Genest</strong></h1>
        <h3>Portland, OR</h3>
        <div className="flip-container">
          <div className={"flipper pointer" + this.state.flipState}>
            <div className="front">
              <img src="icons/dg_logo.png" id="myLogo" onTouchTap={()=>this.flip()}/>
            </div>
            <div className="back">
              <img className="img-circle" src="icons/dave.JPG" id="myPic" onTouchTap={()=>this.flip()}/>
            </div>
          </div>
        </div>
        <div id="about">
          <div className="row clearfix">
            <div className="col-2">
              <h3>Systems Analyst</h3>
                <p>I am a systems analyst with over 20 years of experience in the financial services sector.
                   I have held every role in the development lifecycle, from analyst to developer to tester.
                   My daily work designing solutions for clients keeps me busy, but I have a passion for development.
                </p>
            </div>
             <div className="col-2">
              <h3>Web Developer</h3>
              <p>I am also a self-taught web-developer with a degree in Computer Science.
                 This portfolio and the projects showcased were created as part of the FreeCodeCamp curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
