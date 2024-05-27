import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "top-center",
    autoClose: "5000",
    pauseOnHover: false,
    draggable: true,
    theme: "dark"
  };

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')) {
      navigate('/');
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username, 
        email, 
        password,
      });
      
      if(data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if(data.status === true) {
        console.log(data);
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
        console.log(data.user);
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if(password !== confirmPassword) {
      toast.error("password and confirm password should be same.", toastOptions);
      return false;
    }
    else if(username.length < 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
      return false;
    }
    else if(password.length < 8) {
      toast.error("Password should be greater than or equal to 8 characters", toastOptions);
      return false;
    }
    else if(email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  }

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]:event.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            {/* <img src={Logo} alt="logo" /> */}
            <h1>Chat Application</h1>
          </div>
          <input type="text" placeholder='username' name='username' onChange={e=>handleChange(e)}/>
          <input type="email" placeholder='email' name='email' onChange={e=>handleChange(e)}/>
          <input type="password" placeholder='password' name='password' onChange={e=>handleChange(e)}/>
          <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={e=>handleChange(e)}/>
          <button type='submit'>Create User</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer></ToastContainer>
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #45A29E;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    img {
      height: 5rem;
    }

    h1 {
      color: #66FCF1;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #0B0C10;
    border-radius: 2rem;
    padding: 3rem 5rem;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #66FCF1;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;

      &:focus {
        border: 0.1rem solid #66FCF1;
        outline: none;
      }
    }

    button {
      background-color: #45A29E;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;

      &:hover {
        background-color: #1F2833;
      }
    }

    span {
      color: white;
      text-transform: uppercase;
      text-align: center;
      
      a {
        color: #66FCF1;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export default Register