import React, { Component } from 'react';
import './login.scss';

export default class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="title-container">
            <h2 className="title">Power Senor System</h2>
            <label className="description">Login into the system</label>
          </div>

          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control login-input"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control login-input"
                placeholder="Enter password"
              />
            </div>

            <button type="button" className="btn btn-block btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
