import React, { useState } from "react";
import * as Yup from "yup"
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./LoginPage.css"

const LoginPage = () => {
  // array lưu user 
  const [Listuser, setListuser] = useState([])
  const [isSignup, setIsSignup] = useState(true)


  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: ""
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().required("Required").min(6, "Must be 6 characters of more"),
    //   email: Yup.string().required("Required"),
    //   password: Yup.string().required("Required"),
    //   confirmedPassword: Yup.string().required("Required").onbeforeprint([Yup.ref("password"), null], "Password must match"),
    //   phone: Yup.string().required("Required")
    // }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      setListuser([...Listuser, values])
      console.log(Listuser)
    }
  })



  return (
    <section>
      {
        isSignup
          ? <section className="body-infor">
            <div>
              <form className="infoform" onSubmit={formik.handleSubmit}>
                <header>Sign up</header>
                <labal>Your name</labal>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Enter your name" />

                {formik.errors.name && (
                  <p className="errorMsg">{formik.errors.name}</p>
                )}

                <labal>Email address</labal>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Enter your email " />

                {formik.errors.email && (
                  <p className="errorMsg">{formik.errors.email}</p>
                )}

                <labal>Password</labal>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Enter your password " />

                {formik.errors.password && (
                  <p className="errorMsg">{formik.errors.password}</p>
                )}

                <labal>Confirm Password</labal>
                <input
                  type="text"
                  id="confirmedPassword"
                  name="confirmedPassword"
                  value={formik.values.confirmedPassword}
                  onChange={formik.handleChange}
                  placeholder="Enter your confirm password " />

                {formik.errors.confirmedPassword && (
                  <p className="errorMsg">{formik.errors.confirmedPassword}</p>
                )}

                <labal>Phone number</labal>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="Enter your phone numbers" />

                {formik.errors.phone && (
                  <p className="errorMsg">{formik.errors.phone}</p>
                )}

                <button type="submit">Sign up</button>
              </form>

              <p>
                <Link to="/lessons">Get started!</Link>
              </p>

            </div>
          </section>

          : <div>
            <h1>LoginPage</h1>
            <p>
              <button>Login</button>
            </p>
            <p>or</p>
            <p>
              <Link to="/lessons">Get started!</Link>
            </p>
          </div>
      }


    </section>
  );
};

export default LoginPage;
