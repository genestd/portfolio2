import React from 'react';
import '../styles/main.scss';


export default class PortfolioDG extends React.Component{

  constructor(props){
    super(props);
  }
/*
<section className='portfolio' id='portfolio'>
  <div className='flyingcircle' id="design">Design</div>
  <div className='flyingcircle' id="universal">Universal</div>
  <div className='flyingcircle' id="resp">Responsive</div>
</section>
*/
  render(){
    return(
      <div className="scroller" id="scroller">
        <section className="frontpage" id="home">
          <h1><strong>David Genest</strong></h1>
          <h3>Lake Oswego, OR</h3>
          <div className="flip-container">
            <div className="flipper pointer" id="flipper">
              <div className="front">
                <img src="icons/dg_logo.png" id="myLogo"/>
              </div>
              <div className="back">
                <img className="img-circle" src="icons/dave.JPG" id="myPic"/>
              </div>
            </div>
          </div>
          <div id="about">
            <div className="clearfix">
               <div className="col-2">
                <h3>Web Developer</h3>
                <p>I am a self-taught web-developer with a degree in Computer Science.
                   This portfolio and the projects showcased were created as part of the FreeCodeCamp curriculum.
                </p>
              </div>
              <div className="col-2">
                <h3>Systems Analyst</h3>
                  <p>I am also a systems analyst with over 20 years of experience in the financial services sector.
                     I have held every role in the development lifecycle, from analyst to developer to tester.
                     My daily work designing solutions for clients keeps me busy, but I have a passion for development.
                  </p>
              </div>
            </div>
            <div className="downNav center-text">
              <i className='icon-down-open-big downNav-icon' onClick={()=>scrollTo('projects', 600)}></i>
            </div>
          </div>
        </section>


        <div className='projects' id='projects'>
          <h1 id='fullstack-gallery'>
            <div className='leftNav'>
              <span className='adjust'><i className='icon-up-open-big leftNav-icon' onClick={()=>scrollTo('home', 600)}></i></span>
            </div>
            Projects - Full Stack
            <div className='rightNav'>
              <span><i className='icon-down-open-big rightNav-icon' onClick={()=>scrollTo('react-gallery', 600)}></i></span>
            </div>
          </h1>
          <section className='gallery' >
            <div className='cell pointer' id="fixation">
            <div className='caption' id='fixation-caption'>
              <div className='aboutProj'>
                <h3>Fixation - A Pinterest Clone</h3>
                <h5>Full Stack - Foundation 6 + Express/Passport/MongoDB</h5>
              </div>
            </div>
          </div>
          <div className='overlay overlay-scale' id='fixation-overlay'>
            <h1>Fixation</h1>
              <div className="fcol">
              <div className='padded'>
                A Pinterest clone built with Foundation 6 for a mobile-first design.  Social login on the client is done with Hello.js library; Authentication on the server is done with JWT.  The Masonry layout was built with <a href="https://github.com/eiriklv/react-masonry-component" target="_blank">react-masonry-component</a>
              </div>
              <div className='padded'>
                <b><a href='https://fixation.glitch.me' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
              </div>
              <div className='padded clearfix'>
                <div className="skill">Foundation 6</div>
                <div className="skill">Hello.js</div>
                <div className="skill">react-masonry-component</div>
                <div className="skill">Express</div>
                <div className="skill">JWT</div>
                <div className="skill">Passport</div>
              </div>
              <div className='padded'>
                <b><a href='https://github.com/genestd/fixation' target="_blank">Visit the github repo</a></b>
              </div>
            </div>
          </div>
            <div className='cell pointer' id="stockwatch">
              <div className='caption' id='stockwatch-caption'>
                <div className='aboutProj'>
                  <h3>StockWatch - An Interactive Stock Tracker</h3>
                  <h5>Full Stack - Foundation/D3 + Express/Websockets</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='stockwatch-overlay'>
              <h1>Stockwatch</h1>
                <div className="fcol">
                <div className='padded'>
                  An interactive stock tracking app built with D3 and Foundation 6 for a mobile-first design.  The client and server use web sockets to synch the data across multiple clients.
                </div>
                <div className='padded'>
                  <b><a href='https://dg-stockwatch.glitch.me' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">D3.js</div>
                  <div className="skill">Foundation 6</div>
                  <div className="skill">WebSockets</div>
                  <div className="skill">Express</div>
                  <div className="skill">CSS</div>
                </div>
                <div className='padded'>
                  <b><a href='https://github.com/genestd/stockwatch' target="_blank">Visit the github repo</a></b>
                </div>
              </div>
            </div>
            <div className='cell pointer' id="bookshelf">
            <div className='caption' id='bookshelf-caption'>
              <div className='aboutProj'>
                <h3>BookShelf - A book trading community</h3>
                <h5>Full Stack - Foundation/React + Express/MongoDB</h5>
              </div>
            </div>
          </div>
          <div className='cell' id="more">
            <div className='caption' id='more-caption'>
              <div className='aboutProj'>
                <h3>See more projects!</h3>
                <h5>Visit my github page</h5>
                <h5><a href='https://github.com/genestd' target='_blank'><i className='icon-github bigIcon'></i></a></h5>
              </div>
            </div>
          </div>
          <div className='overlay overlay-scale' id='bookshelf-overlay'>
            <h1>BookShelf</h1>
              <div className="fcol">
              <div className='padded'>
                An interactive book trading app built with React and Foundation 6.  The back end is Express/MongoDB featuring Passport.js for local login.
              </div>
              <div className='padded'>
                <b><a href='https://dg-stockwatch.glitch.me' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
              </div>
              <div className='padded clearfix'>
                <div className="skill">D3.js</div>
                <div className="skill">Foundation 6</div>
                <div className="skill">WebSockets</div>
                <div className="skill">Express</div>
                <div className="skill">CSS</div>
              </div>
              <div className='padded'>
                <b><a href='https://github.com/genestd/stockwatch' target="_blank">Visit the github repo</a></b>
              </div>
            </div>
          </div>
        </section>

          <h1 id='react-gallery'>
            <div className='leftNav'>
              <span className='adjust'><i className='icon-up-open-big leftNav-icon' onClick={()=>scrollTo('fullstack-gallery', 600)}></i></span>
            </div>
            Projects - React and D3
            <div className='rightNav'>
              <span><i className='icon-down-open-big rightNav-icon' onClick={()=>scrollTo('html-gallery', 600)}></i></span>
            </div>
          </h1>
          <section className='gallery'>
              <div className='cell pointer' id="rogue">
              <div className='caption' id='rogue-caption'>
                <div className='aboutProj'>
                  <h3>Dark Wizard - A dungeon crawler game</h3>
                  <h5>React/redux + HTML5 canvas</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='rogue-overlay'>
              <h1>Dungeon Crawler Game</h1>
                <div className="fcol">
                <div className='padded'>
                  This is a roguelike dungeon crawler game created using HTML5 canvas, with React/redux to manage rendering and state.
                  The dungeons are procedurally generated with a goal of keeping the rooms close together while maintaining randomness.
                  All of the game icons are simple paths made in canvas.  The darkness effect is done using multiple layers.
                </div>
                <div className='padded'>
                  <b><a href='https://genestd.github.io/darkwizard' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">React</div>
                  <div className="skill">Redux</div>
                  <div className="skill">Canvas</div>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                </div>
                <div className='padded'>
                  <b><a href='https://github.com/genestd/darkwizard' target="_blank">Visit the github repo</a></b>
                </div>
              </div>
            </div>
            <div className='cell pointer' id="dataviz">
              <div className='caption' id='dataviz-caption'>
                <div className='aboutProj'>
                  <h3>D3 Chart Gallery</h3>
                  <h5>D3.js + React/redux</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='dataviz-overlay'>
              <h1>D3 Visualization Gallery</h1>
              <div className="fcol">
                <div className='padded'>
                  A carousel of D3 visualizations created for FreeCodeCamp's Data Visualization challenges.
                  It contains a barchart, scatterplot, force-directed graph, Mercator projection map and a heatmap.
                  In addition to learning D3, I created an API to fetch data and learned about GEOJSON mapping data.
                  D3 was my favorite technology to learn and I am constantly amazed by its scope and ability.              </div>
                <div className='padded'>
                  <b><a href='https://genestd.github.io/dataviz' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">React</div>
                  <div className="skill">Redux</div>
                  <div className="skill">D3</div>
                    <div className="skill">API</div>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                </div>
                <div className='padded'>
                  <b><a href='https://github.com/genestd/dataviz' target="_blank">Visit the github repo</a></b>
                </div>
              </div>
            </div>
            <div className='cell pointer' id="gol">
              <div className='caption' id='gol-caption'>
                <div className='aboutProj'>
                  <h3>Conway's Game of Life</h3>
                  <h5>A cell division simulation</h5>
                  <h5>React/redux + grommet.js</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='gol-overlay'>
              <h1>Conway's Game of Life</h1>
              <div className="fcol">
                <div className='padded'>
                  The goal was to simulate Conway's Game of Life - a sort of cellular automation -  in a React app.
                  The rules of the "game" are detailed in the app.  I used the Grommet framework to give it a clean design.
                </div>
                <div className='padded'>
                  <b><a href='https://genestd.github.io/gameoflife' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">React</div>
                  <div className="skill">Redux</div>
                  <div className="skill">Grommet.js</div>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                </div>
                <div className='padded'>
                  <b><a href='https://github.com/genestd/gameoflife' target="_blank">Visit the github repo</a></b>
                </div>
              </div>
            </div>
            <div className='cell pointer' id='nflviz'>
              <div className='caption' id='nflviz-caption'>
                <div className='aboutProj'>
                  <h3>NFL Visualization</h3>
                  <h5>React/redux + D3.js</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='nflviz-overlay'>
              <h1>NFL Custom Charts</h1>
              <div className="fcol">
                <div className='padded'>
                  I had an idea to chart some different variables from the 2016 NFL season.
                  The data was downloaded from <a href='www.profootballreference.com' target='_blank'>profootballreference.com.</a>
                  You can find some interesting correlations, such as the effect of average starting position on wins.
                </div>
                <div className='padded'>
                  <b><a href='https://genestd.github.io/nflviz' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">React</div>
                  <div className="skill">Redux</div>
                  <div className="skill">D3.js</div>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                </div>
                <div className='padded'>
                  <b><a href='https://github.com/genestd/nflviz' target="_blank">Visit the github repo</a></b>
                </div>
              </div>
            </div>
          </section>
          <h1 id='html-gallery'>
            <div className='leftNav'>
              <i className='icon-up-open-big leftNav-icon' onClick={()=>scrollTo('react-gallery', 600)}></i>
            </div>HTML/CSS and APIs<div className='rightNav'>
              <i className='icon-down-open-big rightNav-icon' onClick={()=>scrollTo('contact', 600)}></i>
            </div>
          </h1>
          <section className='gallery'>
            <div className='cell pointer' id='weather'>
              <div className='caption' id='weather-caption'>
                <div className='aboutProj'>
                  <h3>Instant Weather</h3>
                  <h5>HTML5/CSS3 + Dark Sky weather API</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='weather-overlay'>
              <h1>Local Weather</h1>
              <div className="fcol">
                <div className='padded'>
                  The goal of this project was to create a page to display the user's local weather (using geolocation).
                  If geolocation access is enabled by the browser, it looks up the user's location using the google maps API,
                  otherwise it defaults to Alcatraz, CA. The coordinates are passed to the Dark Sky weather API and the resulting JSON object is parsed and displayed using jQuery.
                  Weather icons were sourced from https://erikflowers.github.io/weather-icons/.
                </div>
                <div className='padded'>
                  <b><a href='https://genestd.github.io/weather' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                    <div className="skill">jQuery</div>
                  <div className="skill">Dark Sky API</div>
                  <div className="skill">geolocation</div>
                </div>
                <div className='padded'>
                  <b><a href='https://github.com/genestd/weather' target="_blank">Visit the github repo</a></b>
                </div>
              </div>
            </div>
            <div className='cell pointer' id="api">
              <div className='caption pointer' id='api-caption'>
                <div className='aboutProj'>
                  <h3>API Collection</h3>
                  <h5>Express.js server hub for API endpoints</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='api-overlay'>
              <h1>API Collection</h1>
              <div className="fcol">
                <div className='padded'>
                  Initially created this project to make a proxy API request to the St. Louis Fed FRED API to fetch GDP data for D3.
                  I added some other endpoints and landing pages to supplement the FreeCodeCamp API/Microservice challenges
                </div>
                <div className='padded'>
                  <b><a href='https://dg-api.glitch.me/' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                    <div className="skill">Node.js</div>
                  <div className="skill">express.js</div>
                  <div className="skill">mongoDB</div>
                </div>
                <div className='padded'>
                  <b><a href='https://dg-api.glitch.me/' target="_blank">Visit the glitch repo</a></b>
                </div>
              </div>
            </div>
            <div className='cell pointer' id="simon">
              <div className='caption pointer' id='simon-caption'>
                <div className='aboutProj'>
                  <h3>Simon clone</h3>
                  <h5>HTML5/CSS3 + web audio API</h5>
                </div>
              </div>
            </div>
            <div className='overlay overlay-scale' id='simon-overlay'>
              <h1>Simon Clone</h1>
              <div className="fcol">
                <div className='padded'>
                  The objective of this project was to replicate the game Simon.
                  I initially thought of making the board an SVG and animating the paths, but ultimately used plain CSS which was surprisingly simple.
                  The buttons are animated using the velocity.js package.
                  Sounds are created through the HTML5 Web Audio API.  Get Simon to count to 20 to win the game!
                </div>
                <div className='padded'>
                  <b><a href='https://genestd.github.io/simon' target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                </div>
                <div className='padded clearfix'>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                    <div className="skill">Velocity.js</div>
                  <div className="skill">Web Audio API</div>
                  <div className="skill">jQuery</div>
                </div>
                <div className='padded'>
                  <b><a href='https://github.com/genestd/simon' target="_blank">Visit the github repo</a></b>
                </div>
              </div>
            </div>
            <div className='cell' id="more">
              <div className='caption' id='more-caption'>
                <div className='aboutProj'>
                  <h3>See more projects!</h3>
                  <h5>Visit my github page</h5>
                  <h5><a href='https://github.com/genestd' target='_blank'><i className='icon-github bigIcon'></i></a></h5>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="contact" id="contact">
          <h1 className='center-text'>
            <div className='leftNav'>
              <i className='icon-home leftNav-icon' onClick={()=>scrollTo('home', 600)}></i>
            </div>
            Connect With Me
            <div className='rightNav'>
              <i className='icon-up-open-big rightNav-icon' onClick={()=>scrollTo('html-gallery', 600)}></i>
            </div>
          </h1>
          <div className="container">
            <a href="https://www.linkedin.com/in/davegenest/" target="_blank">
            <div>
                <div className="circle">
                <i className="icon-linkedin"></i>
              </div>
              <h2>Resume</h2>
            </div>
            </a>
            <a href="mailto:drwgenest@gmail.com">
            <div>
              <div className="circle">
                <i className="icon-paper-plane"></i>
              </div>
              <h2>Mail</h2>
            </div>
            </a>
            <a href="https://twitter.com/intent/tweet?text=Sweet%20Portfolio&hashtags=portfolio&via=pdx_gen" target="_blank">
            <div>
              <div className="circle">
                <i className="icon-twitter"></i>
              </div>
              <h2>Feedback</h2>
            </div>
            </a>
          </div>

          <hr/>
          <h2 className='center-text'>Lake Oswego, OR</h2>
          <div className="mapCanvas" id="mapCanvas"></div>
        </section>
      </div>
    )
  }
}
