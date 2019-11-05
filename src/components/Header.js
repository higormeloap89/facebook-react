import React from 'react';

import logo from '../assets/logo.png';
import icon from '../assets/account.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo}></img>
        <div>
          <span>Meu perfil</span>
          <img src={icon}></img>
        </div>
      </nav>
    </header>
  )
}

export default Header;
