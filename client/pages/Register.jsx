import React, { useState, useEffect } from "react";
import Wrapper from "../src/assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const initialStage = {
  name: "",
  password: "",
  email: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialStage);
  // global state useNavigate
  const {
    isLoading,
    showAlert,
    displayAlert,
    hideAlert,
    registerUser,
    user,
    loginUser,
  } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [displayAlert]);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password, email, isMember } = values;
    if (!password || !email || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "login" : "register"}</h3>
        {showAlert && <Alert />}
        <div className="form-row">
          {values.isMember ? null : (
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}

          <FormRow
            type="text"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {values.isMember ? "login" : "register"}
          </button>
          <p>
            <button type="button" onClick={toggleMember} className="member-btn">
              {!values.isMember ? "login" : "register"}
            </button>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
