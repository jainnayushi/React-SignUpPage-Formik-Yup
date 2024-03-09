import React, { useContext } from "react";
import InputField from "./InputField";
import { useFormik } from "formik";
import "../Styles/Task1.css";
import { SignUpSchema } from "../utils/SignUpSchema";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone_no: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        localStorage.setItem("user", values.email);

        navigate("/login");
        action.resetForm();
      },
    });

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="header">
            <h1>Welcome!</h1>
            <p>Please complete the registration!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <InputField
                label="First Name"
                name="fname"
                type="text"
                value={values.fname}
                handleChange={handleChange}
                error={errors.fname}
                handleBlur={handleBlur}
                touched={touched.fname}
              />
              <InputField
                label="Last Name"
                name="lname"
                type="text"
                value={values.lname}
                handleChange={handleChange}
                error={errors.lname}
                handleBlur={handleBlur}
                touched={touched.lname}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                handleChange={handleChange}
                error={errors.email}
                handleBlur={handleBlur}
                touched={touched.email}
              />
              <InputField
                label="Phone No."
                name="phone_no"
                type="tel"
                value={values.phone_no}
                handleChange={handleChange}
                error={errors.phone_no}
                handleBlur={handleBlur}
                touched={touched.phone_no}
              />
              <InputField
                label="Password"
                name="password"
                type="text"
                value={values.password}
                handleChange={handleChange}
                error={errors.password}
                handleBlur={handleBlur}
                touched={touched.password}
              />
              <InputField
                label="Confirm Password"
                name="confirm_password"
                type="text"
                value={values.confirm_password}
                handleChange={handleChange}
                error={errors.confirm_password}
                handleBlur={handleBlur}
                touched={touched.confirm_password}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
