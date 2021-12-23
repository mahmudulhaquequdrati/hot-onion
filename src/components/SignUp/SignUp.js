import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo2.png";
import "./SignUp.css";

const SignUp = () => {
  const [RegisterUser, setRegisterUser] = useState({});
  const { registerUser, loading, error, success } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...RegisterUser };
    newLoginData[field] = value;
    setRegisterUser(newLoginData);
    // console.log(RegisterUser);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    registerUser(RegisterUser.email, RegisterUser.password, history);
  };
  return (
    <div className="text-center  signUp-class">
      <div className="">
        <Link to="/">
          <img className="w-25 mx-auto" src={logo} alt="" />
        </Link>
      </div>
      {!loading && (
        <form onSubmit={handleSignUp} className="text-center mt-5">
          <input
            style={{
              fontSize: "14px",
              backgroundColor: " rgba(133, 133, 133, 0.2)",
            }}
            type="text"
            name="name"
            onBlur={handleOnBlur}
            placeholder="Your Name"
            className="my-2 py-3 px-3  border-0 rounded input-field"
          />
          <br />
          <input
            style={{
              fontSize: "14px",
              backgroundColor: " rgba(133, 133, 133, 0.2)",
            }}
            type="email"
            onBlur={handleOnBlur}
            name="email"
            placeholder="Your Email"
            className="my-2 py-3 px-3  border-0 rounded input-field"
          />
          <br />
          <input
            style={{
              fontSize: "14px",
              backgroundColor: " rgba(133, 133, 133, 0.2)",
            }}
            type="password"
            onBlur={handleOnBlur}
            name="password"
            placeholder="Password"
            className="my-2 py-3 px-3  border-0 rounded input-field"
          />
          <br />
          <input
            style={{
              fontSize: "14px",
              backgroundColor: " rgba(133, 133, 133, 0.2)",
            }}
            type="password"
            onBlur={handleOnBlur}
            name="confirm-password"
            placeholder="Confirm Password"
            className="my-2 py-3 px-3  border-0 rounded input-field"
          />
          <br />
          <input
            style={{ backgroundColor: "#E21616" }}
            type="submit"
            value="SignUp"
            className="my-2 py-2 px-3  border-0 rounded input-field"
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
          <p className="text-center text-success">user created successfully!</p>
        </>
      )}
      {error && (
        <>
          <p className="text-danger text-center">{error}</p>
        </>
      )}
      <div className="mt-2">
        <Link to="/sign-in" className="text-decoration-none text-danger">
          Already have an account
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
