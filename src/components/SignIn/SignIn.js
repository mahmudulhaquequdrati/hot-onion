import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo2.png";
import "./SignIn.css";

const SignIn = () => {
  const [logInUser, setLoginUser] = useState({});
  const { loginUser, loading, error, success } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInUser };
    newLoginData[field] = value;
    setLoginUser(newLoginData);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    loginUser(logInUser.email, logInUser.password, location, history);
  };
  return (
    <div className="text-center  signIn-class">
      <div className="">
        <Link to="/">
          <img className="w-25 mx-auto" src={logo} alt="" />
        </Link>
      </div>
      {!loading && (
        <form onSubmit={handleSignIn} className="text-center mt-5">
          <input
            style={{
              fontSize: "14px",
              backgroundColor: " rgba(133, 133, 133, 0.2)",
            }}
            type="email"
            required
            name="email"
            onBlur={handleOnBlur}
            placeholder="Your Email"
            className="my-2 py-3 px-3 input-field border-0 rounded"
          />
          <br />
          <input
            style={{
              fontSize: "14px",
              backgroundColor: " rgba(133, 133, 133, 0.2)",
            }}
            type="password"
            required
            name="password"
            onBlur={handleOnBlur}
            placeholder="Password"
            className="my-2 py-3 px-3 input-field border-0 rounded"
          />

          <br />
          <input
            style={{ backgroundColor: "#E21616" }}
            type="submit"
            value="SignIn"
            className="my-2 py-2 px-3 input-field  border-0 rounded"
          />
        </form>
      )}
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {success && (
        <>
          <p className="text-center text-success">
            user logged in successfully!
          </p>
        </>
      )}
      {error && (
        <>
          <p className="text-danger text-center">{error}</p>
        </>
      )}
      <div className="mt-2">
        <Link to="/sign-up" className="text-decoration-none text-danger">
          New Here? Create an acoount today
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
