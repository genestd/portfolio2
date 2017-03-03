import React from 'react';
import '../styles/main.scss';
import {Link} from 'react-router';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default class NavDG extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 0
    }
  }

  handleClick(newPage){
    this.setState({
      activePage: newPage
    });
  }

  render() {
    return(
      <div className="site-menu">
        <nav className="clearfix" role="navigation">
          <ul className="clearfix">
            {pages.map( (result,i)=>{
              var myClass = (i===this.state.activePage) ? "highlight" : "";
              return( <li key={result.id}>
                        <Link to={result.href} className={myClass} onClick={()=>this.handleClick(i)}>
                          <i className={result.icon}></i>
                          {result.name}
                        </Link>
                      </li>
                    )
            })}
          </ul>
        </nav>
      </div>
    )
  }

}

const pages = [
  { id: 0, name: "Home", href:"home", icon: "icon-home", component: <Home/>},
  { id: 1, name: "Portfolio", href:"portfolio", icon: "icon-code", component: <Portfolio/> },
  { id: 2, name: "Contact", href:"contact", icon: "icon-users", component: <Contact />}
];
/*               return( <li key={result.id}><a href={result.href} onClick={()=>this.props.menuFunc(i)}
                       className={i===this.props.activePage ? "highlight" : ""}>
                       <i className={result.icon}></i>{result.name}</a></li> );
*/
