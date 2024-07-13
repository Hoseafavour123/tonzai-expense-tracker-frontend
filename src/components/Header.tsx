import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="">
            <h1>T.Expenses</h1>
          </a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
