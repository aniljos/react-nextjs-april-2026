'use client'

import { useContext } from 'react';
import { AppThemeContext } from '../context/AppThemeContext';
import Link from 'next/link';

function AppBar() {

  const themeContext = useContext(AppThemeContext);

  function switchTheme(){
    themeContext.changeMode(themeContext.mode === "dark" ? "light" : "dark");
    console.log("mode", themeContext.mode);
  }

  return (
    <nav className={`navbar navbar-${themeContext.mode} bg-${themeContext.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          React
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/gadgets">Gadget Store</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/viewcart">View Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/customers">Customers</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" href="/suppliers">Suppliers</Link>
          </li>
           <li className="nav-item">
            <button className='btn btn-warning' onClick={switchTheme}>Switch Theme</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppBar;
