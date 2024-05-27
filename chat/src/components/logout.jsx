import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Logout() {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate("/login");
      /* } */
    };
  return (
    <Button onClick={handleClick}>
      Log Out
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #45A29E;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  color: #ebe7ff;
`;