import React from 'react';
import '../styles/main.scss';

const myProjects = [
  { id: "weather", type: "html", title: "Local Weather", preview: "icons/weather-preview.png",
    url: "https://genestd.github.io/weather", repo:"https://github.com/genestd/weather", mobilePreview: "icons/weather-preview-phone2.png",
    description: "The goal of this project was to create a page to display the user's local weather.  If geolocation access is enabled by the browser, it looks up the user's location using the google maps API, otherwise it defaults to Alcatraz, CA. The coordinates are passed to the Dark Sky weather API and the resulting JSON object is parsed and displayed using jQuery. Weather icons were sourced from https://erikflowers.github.io/weather-icons/.",
    skills: ["HTML","CSS","Javascript","jQuery"],
    overlayState: ""
  },
  { id: "calculator", type: "html", title: "Javascript Calculator", preview: "icons/calc-preview.png"
    , url: "https://genestd.github.io/calculator", repo: "https://github.com/genestd/calculator", mobilePreview: "icons/calc-preview-phone2.png",
    description: "A calculator coded entirely in Javascript - no extra math libraries included.",
    skills: ["HTML","CSS","Javascript","jQuery"],
    overlayState: ""
  },
  { id: "simon", type: "html", title: "Simon Game", preview: "icons/simon-preview.png"
    , url: "https://genestd.github.io/simon", repo: "https://github.com/genestd/simon", mobilePreview: "icons/simon-preview-phone2.png",
    description: "The objective of this project was to replicate the game Simon.  I initially thought of making the board an SVG and animating the paths, but ultimately used plain CSS which was surprisingly simple. The buttons are animated using the velocity.js package.  Sounds are created through the HTML5 Web Audio API.  Get Simon to count to 20 to win the game!",
    skills: ["HTML","CSS","Javascript","jQuery", "velocity.js", "Web Audio API"],
    overlayState: ""
  },
  { id: "gameoflife", type: "react", title: "Conway's Game of Life", preview: "icons/gameoflife-preview.png",
    url: "https://genestd.github.io/gameoflife", repo:"https://github.com/genestd/gameoflife", mobilePreview: "icons/gameoflife-preview-phone.png",
    description: "The goal was to simulate Conway's Game of Life in a React app. I used the Grommet framework to give it a clean design.",
    skills: ["React","Redux","Grommet.js"],
    overlayState: ""
  },
  { id: "dataviz", type: "react", title: "D3 Visualizations", preview: "icons/dataviz-preview.png"
    , url: "https://genestd.github.io/dataviz", repo: "https://github.com/genestd/dataviz", mobilePreview: "icons/dataviz-preview-phone2.png",
    description: "A carousel of D3 visualizations created for FreeCodeCamp's Data Visualization challenges. It contains a barchart, scatterplot, force-directed graph, Mercator projection map and a heatmap.  In addition to learning D3, I created an API to fetch data and learned about GEOJSON mapping data.  D3 was my favorite technology to learn and I am constantly amazed by its scope and ability.",
    skills: ["React","Redux","D3","API"],
    overlayState: ""
  },
  { id: "api", type: "react", title: "API Collection", preview: "icons/api-preview.png"
    , url: "https://dg.api.gomix.me/", repo: "https://gomix.com/#!/project/dg-api", mobilePreview: "icons/api-preview-phone2.png",
    description: "Initially created this project to make a proxy API request to the St. Louis Fed FRED API to fetch GDP data for D3. I added some other endpoints and landing pages to supplement the FreeCodeCamp API/Microservice challenges",
    skills: ["Node.js","express","Gomix","HTML","CSS"],
    overlayState: ""
  }
];
export default class Project extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      projects: myProjects
    }

  }

  handleOverlay = (e) =>{
    var tempProjects = this.state.projects;
    var olState = tempProjects[e.target.id].overlayState
    var noscroll = false
    if (olState === ""){
      tempProjects[e.target.id].overlayState = " open"
      noscroll = true
    } else {
      tempProjects[e.target.id].overlayState = ""
      noscroll= false
    }
    document.body.classList.toggle('noscroll', noscroll)
    this.setState({
      projects: tempProjects
    })
  }

  /* Close any open overlays */
  componentWillUnmount(){
    var myProjects = this.state.projects;
    for (var i=0; i<myProjects.length; i++){
      myProjects[i].overlayState = "";
    }
    this.setState({
      projects: myProjects
    })
  }

  render(){
    return(
      <div className={"project"} >
        <h2>React / D3 / API</h2>

        <div className="grid grid-pad">
          {this.state.projects.map( (project, index)=>{
            var colClass = "";
            colClass = (index+1) % 3 === 0 ? "col-3" : "col-3";
            if (project.type === 'react'){
              return(
                <div key={project.id} className={colClass}>
                  <div className="cell">
                    <img className="preview pointer" id={index} src={project.preview} onClick={(e)=>this.handleOverlay(e)}/>
                    <h3>{project.title}</h3>
                  </div>
                  <div className={"overlay overlay-scale"+project.overlayState} id={project.id+"-overlay"}>
                    <button ref="overlay1" className="overlay-close pointer" id={index} onClick={(e)=>this.handleOverlay(e)}><i className="icon-cancel" id={index}></i></button>
                    <h1>{project.title}</h1>
                    <div className="overlay-content">
                      <div className="col-23">
                        <div className="stack">
                          {project.description}
                        </div>
                        <div className="stack">
                          <b><a href={project.url} target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                        </div>
                        <div className="stack clearfix">
                          {project.skills.map(function(result,index){
                              return ( <div key={index} className="skill">{result}</div>)
                            })
                          }
                        </div>
                        <div className="stack">
                          <b><a href={project.repo} target="_blank">Visit the github repo</a></b>
                        </div>
                      </div>
                      <div className="col-3">
                        <a href={project.url} target="_blank"><img className="preview" src={project.mobilePreview} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            })
          }
        </div>
        <hr/>
        <h2>HTML / CSS3 / Javascript</h2>

        <div className="grid grid-pad">
          {this.state.projects.map( (project, index)=>{
            var colClass = "";
            colClass = (index+1) % 3 === 0 ? "col-3" : "col-3";
            if (project.type === 'html'){
              return(
                <div key={project.id} className={colClass}>
                  <div className="cell">
                    <img className="preview pointer" id={index} src={project.preview} onClick={(e)=>this.handleOverlay(e)}/>
                    <h3>{project.title}</h3>
                  </div>
                  <div className={"overlay overlay-scale"+project.overlayState} id={project.id+"-overlay"}>
                    <button ref="overlay1" className="overlay-close pointer" id={index} onClick={(e)=>this.handleOverlay(e)}><i className="icon-cancel" id={index}></i></button>
                    <h1>{project.title}</h1>
                    <div className="overlay-content">
                      <div className="col-23">
                        <div className="stack">
                          {project.description}
                        </div>
                        <div className="stack">
                          <b><a href={project.url} target="_blank">Visit the live project page</a>&nbsp;&nbsp;</b>
                        </div>
                        <div className="stack clearfix">
                          {project.skills.map(function(result,index){
                              return ( <div key={index} className="skill">{result}</div>)
                            })
                          }
                        </div>
                        <div className="stack">
                          <b><a href={project.repo} target="_blank">Visit the github repo</a></b>
                        </div>
                      </div>
                      <div className="col-3">
                        <a href={project.url} target="_blank"><img className="preview" src={project.mobilePreview} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            })
          }
        </div>
      </div>
    )
  }
}
