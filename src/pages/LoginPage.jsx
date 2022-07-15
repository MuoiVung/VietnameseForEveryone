
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAvatar from "../assets/img/user-avatar.jpg";

import "./LoginPage.css";





const LoginPage = () => {
  const navigate = useNavigate();

  // array lưu user
  const [Listuser, setListuser] = useState([{ Name: "nghia", Email: "nghia@gmail.com", Password: "123", Phonenumber: 1234567890, NameId: "Admin", Avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/248793490_599009591431369_4830499515000362330_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=of02KyIAjLAAX-zoHUA&_nc_ht=scontent.fhan4-1.fna&oh=00_AT-FMNA2-0Sv8jMiLV8jD0E3BmgrwBUPkppRQBKnYUdvrQ&oe=62D4C9C9" }]);

  // check
  const [CheckNameID, setCheckNameID] = useState(false);
  const [CheckPass, setCheckPass] = useState(false);
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
    for (let index = 0; index < Listuser.length; index++) {
      if (Name === Listuser[index].Name) {
        setCheckNameID(true);
      } else {
        setCheckNameID(false)
      }
    }

  }, [Name, Listuser]);

  useEffect(() => {
    if (Password.length === 0) {
      setCheckPass(false)
      return
    }
    if (Password.length < 6) {
      setCheckPass(true);
    } else {
      setCheckPass(false)
    }
  }, [Password]);

  useEffect(() => {
    if (Password !== ConfirmPassword) {
      setCheckConfirmPassword(true)
    } else {
      setCheckConfirmPassword(false)
    }
  }, [Password, ConfirmPassword])

  useEffect(() => {
    if (Phonenumber.length === 0) {
      return
    }
    if (Phonenumber.length < 10) {
      setChecknum(true);
    } else {
      setChecknum(false);
    }
  }, [Phonenumber]);

  useEffect(() => {
    if (loginName.length === 0) {
      setCheckloginName(false)
    }
  }, [loginName])


  useEffect(() => {
    if (loginPassword.length === 0) {
      setCheckloginPassword(false)
    }
  }, [loginPassword])

  //  xử lí đăng kí

  function NewUserClass(Name, Email, Password, Phonenumber) {
    this.Name = Name;
    this.Email = Email;
    this.Password = Password;
    this.Phonenumber = Phonenumber;
    this.Avatar = userAvatar;
    this.NameId = Name;

    this.Lessons = {
      Beginner: true,
      Intermediate: false,
      Advanced: false,
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const NewUser = new NewUserClass(Name, Email, Password, Phonenumber);

    for (let index = 0; index < Listuser.length; index++) {
      if (NewUser.Name === Listuser[index].Name) {
        return setCheckNameID(true);
      }
    }
    if (Password.length < 6) {
      return setCheckPass(true);
    }

    if (Password !== ConfirmPassword) {
      return setCheckPass(true);
    }
    if (Phonenumber.length < 9) {
      return setChecknum(true);
    }

    setChecknum(false);
    setCheckNameID(false);
    setCheckPass(false);
    setListuser([...Listuser, NewUser]);
    localStorage.setItem('loginDataNewUser', JSON.stringify(NewUser))
    navigate("/lessons");
  };

  // đăng nhập


  const CheckNameLogin = (loginName, Listuser) => {
    if (loginName === Listuser.Name) {
      return true
    }
  };


  const CheckPassLogin = (loginPassword, Listuser) => {
    if (loginPassword === Listuser.Password) {
      return true
    }
  };

  const handleSubmitLogin = (e) => {

    e.preventDefault()
    for (let index = 0; index < Listuser.length; index++) {
      if (CheckNameLogin(loginName, Listuser[index])) {
        if (CheckPassLogin(loginPassword, Listuser[index])) {
          localStorage.setItem('loginDataNewUser', JSON.stringify(Listuser[index]))
          navigate("/lessons")
        }
      }
    }
    setCheckloginName(true);
    setCheckloginPassword(true);
  };

  // console.log("test this", Listuser);

  return (
    <section>
      {isSignup ? (
        <section className="body-infor">
          <div>
            <form className="infoform" onSubmit={handleSubmit}>
              <header>Sign up</header>
              <label>Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              {CheckNameID ? (
                <p style={{ color: "red", fontSize: "10px" }}>Your name is already taken</p>
              ) : null}

              <label>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email "
              />

              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password "
              />


              {CheckPass ? (
                <p style={{ color: "red", fontSize: "10px" }}>Password must be more than 6 characters</p>
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
                <p style={{ color: "red", fontSize: "10px" }}>Please enter the true password</p>
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
              <Link to="/lessons">Get started!</Link>
            </p>
          </div>
        </section>
      ) : (
        <div>
          <section className="body-infor">
            <div>
              <form className="infoform" onSubmit={handleSubmitLogin}>
                <header>LoginPage</header>
                <label>Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={loginName}
                  onChange={(e) => setloginName(e.target.value)}
                  placeholder="Enter your name"
                />
                {CheckloginName ? (
                  <p style={{ color: "red", fontSize: "10px" }}>Your Name could not be found</p>
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
                  <p style={{ color: "red", fontSize: "10px" }}>Please enter the correct password</p>
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
                <Link to="/lessons">Get started!</Link>
              </p>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default LoginPage;
