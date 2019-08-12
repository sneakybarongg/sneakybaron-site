import React from 'react'
import { withRouter } from 'react-router-dom';

import logo from '../assets/logo_letras.png'

class CustomNavbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {

    return (
      <nav className="navbar bg-dark-new navbar-expand-lg">
        <div>
          <div>Powered by <a href="https://www.sneakybaron.gg"><img src={logo} width="250" className="" alt="Sb logo leters" /></a></div>
        </div>
      </nav>
    )
  }
}

CustomNavbar = withRouter(CustomNavbar);
export default CustomNavbar;