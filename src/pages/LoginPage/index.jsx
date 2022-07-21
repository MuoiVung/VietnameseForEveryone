import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAvatar from "../../assets/img/user-avatar.jpg";
import StyledLogin from "./StyledLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  // check
  const [CheckNameID, setCheckNameID] = useState(false);
  const [CheckPass, setCheckPass] = useState(false);
  const [CheckPassError, setCheckPassError] = useState(false);
  const [CheckConfirmPassword, setCheckConfirmPassword] = useState(false);
  const [checkNum, setChecknum] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // đăng kí
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");

  // đăng nhập
  const [loginName, setloginName] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  // xử lí đăng nhập
  const [CheckloginName, setCheckloginName] = useState(false);
  const [CheckloginPassword, setCheckloginPassword] = useState(false);

  // ===================================

  //  ************************************************
  useEffect(() => {
    if (Name.length === 0) {
      setCheckNameID(false);
    }
  }, [Name]);

  useEffect(() => {
    if (Password.length === 0) {
      setCheckPass(false);
      setCheckPassError(false);
      return;
    }
    if (Password.length < 6) {
      setCheckPass(true);
    } else {
      setCheckPass(false);
    }
  }, [Password]);

  useEffect(() => {
    if (ConfirmPassword.length === 0) {
      setCheckConfirmPassword(false);
      return;
    }
    if (Password !== ConfirmPassword) {
      setCheckConfirmPassword(true);
    } else {
      setCheckConfirmPassword(false);
    }
  }, [Password, ConfirmPassword]);

  useEffect(() => {
    if (Phonenumber.length === 0) {
      return;
    }
    if (Phonenumber.length < 10) {
      setChecknum(true);
    } else {
      setChecknum(false);
    }
  }, [Phonenumber]);

  useEffect(() => {
    if (loginName.length === 0) {
      setCheckloginName(false);
    }
  }, [loginName]);

  useEffect(() => {
    if (loginPassword.length === 0) {
      setCheckloginPassword(false);
    }
  }, [loginPassword]);

  //  xử lí đăng kí

  function NewUserClass(Name, Email, Phonenumber) {
    this.NameId = Name;
    this.Email = Email;
    this.Phonenumber = Phonenumber;
    this.Avatar = userAvatar;
    this.point = 0;
    this.Lessons = {
      Beginner: true,
      Intermediate: false,
      Advanced: false,
    };
  }

  async function addUserHandler(newUser, localId) {
    try {
      const response = await fetch(
        `https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/users/${localId}/.json`,
        {
          method: "PUT",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return true;
    } catch (error) {
      return false;
    }
  }

  const sendRepuestSignUp = async (e) => {
    e.preventDefault();
    const NewUser = new NewUserClass(Name, Email, Phonenumber);
    console.log(NewUser.Email, loginPassword);
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ4LsbZ0AOTjRKo4-kl-KmTjXLbqH1qXw`,
        {
          method: "POST",
          body: JSON.stringify({
            email: NewUser.Email,
            password: Password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const DataUser = await res.json();

      const userIsAdded = await addUserHandler(NewUser, DataUser.localId);

      if (userIsAdded) {
        localStorage.setItem(
          "loginDataNewUser",
          JSON.stringify(DataUser.localId)
        );
        navigate("/lessons");
      }
      setCheckNameID(true);
    } catch (error) {
      setCheckPassError(true);
    }
  };

  // đăng nhập

  const sendRepuestLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ4LsbZ0AOTjRKo4-kl-KmTjXLbqH1qXw`,
        {
          method: "POST",
          body: JSON.stringify({
            email: loginName,
            password: loginPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Login failed!");
      }
      const DataUser = await res.json();
      localStorage.setItem(
        "loginDataNewUser",
        JSON.stringify(DataUser.localId)
      );
      navigate("/lessons");
    } catch (error) {
      setCheckloginName(true);
      setCheckloginPassword(true);
    }
  };

  return (
    <StyledLogin>
      {isSignup ? (
        <section className="body-infor">
          <div>
            <form className="infoform" onSubmit={sendRepuestSignUp}>
              <h1>Vife</h1>
              <header>Register</header>
              <label>Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />

              <label>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email "
              />
              {CheckNameID ? (
                <p style={{ color: "red", fontSize: "10px" }}>
                  You can't find your email.
                </p>
              ) : null}

              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password "
              />

              {CheckPassError ? (
                <p style={{ color: "red", fontSize: "10px" }}>
                  You seem to be in the wrong password.
                </p>
              ) : null}

              {CheckPass ? (
                <p style={{ color: "red", fontSize: "10px" }}>
                  Password must be more than 6 characters
                </p>
              ) : null}

              <label>Confirm Password</label>
              <input
                type="password"
                id="confirmedPassword"
                name="confirmedPassword"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your confirm password "
              />

              {CheckConfirmPassword ? (
                <p style={{ color: "red", fontSize: "10px" }}>
                  Please enter the true password
                </p>
              ) : null}

              <label>Phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={Phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                placeholder="Enter your phone numbers"
              />

              {checkNum ? (
                <p style={{ color: "red", fontSize: "10px" }}>
                  This not Phone number
                </p>
              ) : null}
              <p
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => setIsSignup(false)}
              >
                Login
              </p>
              <button type="submit">Sign up</button>
            </form>

            <p>
              <Link to="/">Get started!</Link>
            </p>
          </div>
        </section>
      ) : (
        <div>
          <section className="body-infor">
            <div>
              <form className="infoform" onSubmit={sendRepuestLogin}>
                <h1>Vife</h1>
                <header>LoginPage</header>
                <label>Your email</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={loginName}
                  onChange={(e) => setloginName(e.target.value)}
                  placeholder="Enter your name"
                />
                {CheckloginName ? (
                  <p style={{ color: "red", fontSize: "10px" }}>
                    Your Name could not be found
                  </p>
                ) : null}

                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginPassword}
                  onChange={(e) => setloginPassword(e.target.value)}
                  placeholder="Enter your password "
                />

                {CheckloginPassword ? (
                  <p style={{ color: "red", fontSize: "10px" }}>
                    Please enter the correct password
                  </p>
                ) : null}

                <p
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => setIsSignup(true)}
                >
                  Sign up
                </p>

                <button type="submit">Login </button>
              </form>

              <p>
                <Link to="/">Get started!</Link>
              </p>
            </div>
          </section>
        </div>
      )}
    </StyledLogin>
  );
};

export default LoginPage;
