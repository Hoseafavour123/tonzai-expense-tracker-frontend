import React from 'react';
import avatar from '../assets/images/user.png';
import dashboard from '../assets/images/dashboard.png';
import transactions from '../assets/images/transactions.png';
import expenses from '../assets/images/expense.png';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="img">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="names">
          <h2>Full names</h2>
          <p>Company names</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/dashboard">
              <img src={dashboard} alt="" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <img src={transactions} alt="" />
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <img src={expenses} alt="" />
              <span>Income</span>
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <img src={expenses} alt="" />
              <span>Expenses</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
