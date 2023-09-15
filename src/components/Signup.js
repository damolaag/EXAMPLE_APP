import React, { useState } from "react";
import "./style.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");

  // function Signup() {
  //   const [user, setUser] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  // const handleInputChange = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword);
    window.location.assign("https://google.com");
  };

  return (
    <div className="field">
      <div className="header">
        <h1>Create an Account</h1>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              First Name:{" "}
            </label>
            <input
              className="form__input"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">
              Last Name:{" "}
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              className="form__input"
              onChange={(e) => setLastName(e)}
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e)}
              placeholder="Email"
            />
          </div>
          <div className="dateOfBirth">
            <label className="form__label" for="dateOfBirth">
              Date of Birth:{" "}
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="form__input"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e)}
                placeholder="Date of Birth"
              ></input>
            </label>
          </div>
          <div className="country">
            <label className="form__label" for="country">
              Country:{" "}
              <input
                type="text"
                id="country"
                name="country"
                className="form__input"
                value={country}
                onChange={(e) => setCountry(e)}
                placeholder="Country"
              ></input>
            </label>
          </div>

          <div className="password">
            <label className="form__label" for="password">
              Password:{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e)}
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password:{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e)}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
