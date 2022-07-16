
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAvatar from "../assets/img/user-avatar.jpg";

import "./LoginPage.css";





const LoginPage = () => {
  const navigate = useNavigate();


  // check
  const [CheckNameID, setCheckNameID] = useState(false);
  const [CheckPass, setCheckPass] = useState(false);
  const [CheckPassError, setCheckPassError] = useState(false)
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
  const [EmailLogin, setEmaillogin] = useState({})



  //  ************************************************
  useEffect(() => {
    if (Name.length === 0) {
      setCheckNameID(false);
    }
  }, [Name]);

  useEffect(() => {
    if (Password.length === 0) {
      setCheckPass(false)
      setCheckPassError(false)
      return
    }
    if (Password.length < 6) {
      setCheckPass(true);
    } else {
      setCheckPass(false)
    }
  }, [Password]);

  useEffect(() => {
    if (ConfirmPassword.length === 0) {
      setCheckConfirmPassword(false)
      return
    }
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
    this.NameId = Name;
    this.Email = Email;
    this.Phonenumber = Phonenumber;
    this.Avatar = userAvatar;

    this.Lessons = {
      Beginner: true,
      Intermediate: false,
      Advanced: false,
    };
  }

  const sendRepuestSignUp = async (e) => {
    e.preventDefault()
    const NewUser = new NewUserClass(Name, Email, Phonenumber)
    try {
      const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ4LsbZ0AOTjRKo4-kl-KmTjXLbqH1qXw`, {
        method: "POST",
        body: JSON.stringify({
          email: NewUser.Email,
          password: Password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!res.ok) {
        throw new Error("Something went wrong!")
      }
      const DataUser = await res.json()

      // if(DataUser && DataUser?.idToken) {
      //   {//em send request lên trên firebase, khi đăng ký tài khoản mới thì nếu đăng ký thành công thì nhận datausser với idtoken
      // //  => gọi function }
      // }

      setEmaillogin("new user", DataUser)
      localStorage.setItem('loginDataNewUser', JSON.stringify(EmailLogin))
      navigate("/lessons")
    } catch (error) {
      console.log("error", error)
      setCheckPassError(true)
    }
  }

  // đăng nhập

  const sendRepuestLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ4LsbZ0AOTjRKo4-kl-KmTjXLbqH1qXw`, {
        method: "POST",
        body: JSON.stringify({
          email: loginName,
          password: loginPassword,
          returnSecureToken: true,
        }), headers: {
          "Content-Type": "application/json",
        },
      })
      if (!res.ok) {
        throw new Error("Something went wrong!")
      }
      const DataUser = await res.json()
      setEmaillogin("new user", DataUser)
      localStorage.setItem('loginDataNewUser', JSON.stringify(EmailLogin))
      navigate("/lessons")
      console.log("data login", DataUser)
      //em cũng nhận về 1 object có idToken => nếu có idToken => dùng cái email mà họ nhập vào ấy để lấy dữ liệu trên firebase
      //email lúc này chính là id 
      //fetch('https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/users/{emailUser}/.json')
      //=> vào được api của thằng có email dùng đăng nhập => dùng dạng json, nó yêu cầu thế =))
    } catch (error) {
      setCheckloginName(true)
      setCheckloginPassword(true)
    }
  }


  return (
    <section>
      {isSignup ? (
        <section className="body-infor">
          <div>
            <form className="infoform" onSubmit={sendRepuestSignUp}>
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
                <p style={{ color: "red", fontSize: "10px" }}>You can't find your email.</p>
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
                <p style={{ color: "red", fontSize: "10px" }}>You seem to be in the wrong password.</p>
              ) : null}

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
              <form className="infoform" onSubmit={sendRepuestLogin}>
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
