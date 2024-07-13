import React from 'react';
import signout from '../assets/images/signout.png';

const DashboardBoxes = () => {
  return (
    <div className="dashboard-boxes">
      <div className="sign-out">
        <button>
          <img src={signout} alt="Signout Button" />
          <span>Signout</span>
        </button>
      </div>
      <div className="dashboard-summary">
        <div className="title">
          <h1>All transactions</h1>
        </div>
        <div className="transactions">
          <div className="transactions-summary">
            <div className="incomes">
              <div className="totalIncome box">
                <p>Total Income</p>
                <span>$10000</span>
              </div>
              <div className="totalIncome box">
                <p>Total Income</p>
                <span>$10000</span>
              </div>
            </div>
            <div className="current-balance box">
              <p>Current balance</p>
              <span>$10000</span>
            </div>
          </div>
          <div className="recent">
            <h2>Recent history</h2>
            <div className="box red">
              <h4>hello wolrd</h4>
              <span>$10000</span>
            </div>
            <div className="box green">
              <h4>hello wolrd</h4>
              <span>$10000</span>
            </div>
            <div className="box red">
              <h4>hello wolrd</h4>
              <span>$10000</span>
            </div>
            <div className="min-maxes">
              <div className="one">
                <div className="title">
                  <span>min</span>
                  <h2>Salary</h2>
                  <span>max</span>
                </div>
                <div className="box">
                  <div className="min">$1000</div>
                  <div className="max">$10000</div>
                </div>
              </div>
              <div className="one">
                <div className="title">
                  <span>min</span>
                  <h2>Expenses</h2>
                  <span>max</span>
                </div>
                <div className="box">
                  <div className="min">$1000</div>
                  <div className="max">$10000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBoxes;
