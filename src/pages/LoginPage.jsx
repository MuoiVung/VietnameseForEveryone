import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {

  const navigate = useNavigate();

  // array lưu user
  const [Listuser, setListuser] = useState([{ Name: "nghia", Email: "nghia@gmail.com", Password: 123, Phonenumber: 1234567890 },]);
  // check
  const [CheckNameID, setCheckNameID] = useState(false)
  const [CheckName, setCheckName] = useState(false)
  const [CheckPass, setCheckPass] = useState(false)
  const [checkNum, setChecknum] = useState(false)
  const [isSignup, setIsSignup] = useState(false);


  // đăng kí 
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Phonenumber, setPhonenumber] = useState("")

  // đăng nhập 
  const [loginName, setloginName] = useState("")
  const [loginPassword, setloginPassword] = useState("")

  // xử lí đăng nhập
  const [CheckloginName, setCheckloginName] = useState(false)
  const [CheckloginPassword, setCheckloginPassword] = useState(false)



  //  ************************************************
  useEffect(() => {
    if (CheckNameID) {
      setCheckName(true)
    }
  }, [CheckNameID])

  useEffect(() => {
    if (CheckPass) {
      setCheckPass(true)
    }
  }, [CheckPass])

  useEffect(() => {
    if (checkNum) {
      setChecknum(true)
    }
  }, [checkNum])

  //  xử lí đăng kí


  function NewUserClass(Name, Email, Password, Phonenumber) {
    this.Name = Name
    this.Email = Email
    this.Password = Password
    this.Phonenumber = Phonenumber

    this.Lessons = {
      Beginner: true,
      Intermediate: false,
      Advanced: false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const NewUser = new NewUserClass(Name, Email, Password, Phonenumber)

    for (let index = 0; index < Listuser.length; index++) {
      if (NewUser.Name === Listuser[index].Name) {
        return setCheckNameID(true)
      }
    }

    if (Password !== ConfirmPassword) {
      return setCheckPass(true)
    }

    if (Phonenumber.length < 9) {
      return setChecknum(true)
    }

    setChecknum(false)
    setCheckName(false)
    setCheckPass(false)
    setListuser([...Listuser, NewUser])
    navigate("/lessons")
  }


  // đăng nhập

  const CheckNameLogin = (loginName) => {
    for (let index = 0; index < Listuser.length; index++) {
      if (loginName === Listuser[index].Name) {
        return true
      }
    }
  }

  const CheckPassLogin = (loginPassword) => {
    for (let index = 0; index < Listuser.length; index++) {
      if (loginPassword == Listuser[index].Password) {
        return true
      }
    }
  }


  const handleSubmitLogin = (e) => {
    e.preventDefault()
    if (CheckNameLogin(loginName)) {
      if (CheckPassLogin(loginPassword)) {
        navigate("/lessons")
      }
    }
    setCheckloginName(true)
    setCheckloginPassword(true)
  }

  console.log("test this", Listuser)

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
              {
                CheckName ? <p style={{ color: "red", fontSize: "10px" }}>name sagging !</p> : null
              }


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



              <label>Confirm Password</label>
              <input
                type="password"
                id="confirmedPassword"
                name="confirmedPassword"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your confirm password "
              />

              {
                CheckPass ? <p style={{ color: "red", fontSize: "10px" }}>Error</p> : null
              }

              <label>Phone number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={Phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                placeholder="Enter your phone numbers"
              />


              {
                checkNum ? <p style={{ color: "red", fontSize: "10px" }}>This not Phone number</p> : null
              }
              <p style={{ color: "red", cursor: "pointer" }} onClick={() => setIsSignup(false)}>Login</p>
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
                {
                  CheckloginName ? <p style={{ color: "red", fontSize: "10px" }}>Not found !</p> : null
                }


                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginPassword}
                  onChange={(e) => setloginPassword(e.target.value)}
                  placeholder="Enter your password "
                />

                {
                  CheckloginPassword ? <p style={{ color: "red", fontSize: "10px" }}>Not found !</p> : null
                }

                <p style={{ color: "red", cursor: "pointer" }} onClick={() => setIsSignup(true)}>Sign up</p>
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
