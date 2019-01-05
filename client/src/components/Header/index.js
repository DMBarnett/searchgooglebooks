import React from "react";
import "./style.css"

function Header(){
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="/">Google Books Bookshelf</a>
        <nav className="nav">
          <a href="/" className="nav-link">Search</a>
          <a href="/library" className="nav-link">Library</a>
        </nav>
      </nav>
    </div>
  )
}

export default Header;