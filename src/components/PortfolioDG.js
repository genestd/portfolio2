import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavDG from './NavDG';
import '../styles/main.scss';



export default class PortfolioDG extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return(
    <div className="site-wrapper">
      <div className="site-content">
        <NavDG />
          <ReactCSSTransitionGroup transitionName="fade"
               transitionEnterTimeout={400} transitionLeaveTimeout={400}>
               {React.cloneElement(this.props.children, { key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
      </div>
    </div>
    )
  }
}
