import React, { useState } from 'react';
import '../assets/css/login_Signup.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const DriverLogin = () => {
  const history = useHistory();
  const [driverEmail, setDriverEmail] = useState('');
  const [driverPassword, setDriverPassword] = useState('');

  // show error alert for invalid email suffix
  const [showInvalidEmailAlert, setShowInvalidEmailAlert] = useState(false);
  const [showInvalidPasswordAlert, setShowInvalidPasswordAlert] =
    useState(false);

  const onSubmitDriverLogin = (event) => {
    event.preventDefault();
    loginDriver();
  };

  const loginDriver = () => {
    axios
      .get('http://localhost:3001/api/driver/driver-info', {
        params: {
          driverEmail: driverEmail,
        },
      })
      .then((res) => {
        bcrypt.compare(driverPassword, res.data[0].Password, (err, isMatch) => {
          if (err) {
            throw err;
          } else if (!isMatch) {
            //Password doesn't match!
            setShowInvalidEmailAlert(false);
            setShowInvalidPasswordAlert(true);
          } else {
            // 'Password matches!'
            setShowInvalidEmailAlert(false);
            setShowInvalidPasswordAlert(false);
            history.push('/');
          }
        });
      })
      .catch((err) => {
        setShowInvalidEmailAlert(true);
        setShowInvalidPasswordAlert(false);
      });
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div>
        {showInvalidEmailAlert ? (
          <div
            className="text-center mx-auto mt-2 alert alert-danger fade show w-100"
            role="alert"
          >
            <b>Email Address is not registered with us.</b> <br />{' '}
            <i>
              Please <Link to="/SFSUSignup">Register</Link>
            </i>{' '}
          </div>
        ) : (
          <> </>
        )}

        {showInvalidPasswordAlert ? (
          <div
            className="text-center mx-auto mt-2 alert alert-danger fade show w-100"
            role="alert"
          >
            <b>Incorrect Password.</b> <br /> Please try Again
          </div>
        ) : (
          <> </>
        )}

        <form
          className="signup-signin-form mx-auto"
          method="post"
          encType="application/x-www-form-urlencoded"
          onSubmit={onSubmitDriverLogin}
        >
          <div className="m-3">
            <input id="redirect-input" type="hidden" name="redirect" />
            <h2 className="font-weight-bold primary-color text-center">
              Driver Login
            </h2>
            <label htmlFor="Email" className="login-label">
              Email
            </label>
            <input
              className="login_input-field"
              type="email"
              id="displayNameInput"
              name="displayName"
              placeholder="e.g. john.doe@gmail.com"
              value={driverEmail}
              onChange={(e) => setDriverEmail(e.target.value)}
              required
            />
            <label htmlFor="Password" className="login-label">
              Password
            </label>
            <input
              className="login_input-field"
              type="password"
              id="passwordInput"
              name="password"
              placeholder="must have at least 6 characters"
              required
              value={driverPassword}
              onChange={(e) => setDriverPassword(e.target.value)}
            />
            <br />
            <br />
            <a href="/">Forgot Password?</a> <br />
            <Link to="/DriverSignup">Don't have an account?</Link> <br />
            <br />
            <button
              type="submit"
              className="login_button d-flex align-items-center justify-content-center"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverLogin;
