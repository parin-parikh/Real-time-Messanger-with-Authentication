import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
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
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username, 
        password,
      });
      
      if(data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      console.log(data);
      if(data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.loginUser));
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if(password === "") {
      toast.error("Email and password is required", toastOptions);
      return false;
    }
    else if(username.length === "") {
      toast.error("Email and password is required", toastOptions);
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
          <input type="text" placeholder='username' name='username' onChange={e=>handleChange(e)} min="3"/>
          <input type="password" placeholder='password' name='password' onChange={e=>handleChange(e)}/>
          <button type='submit'>Login</button>
          <span>
            Don't have an account? <Link to="/register">Register</Link>
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

export default Login;