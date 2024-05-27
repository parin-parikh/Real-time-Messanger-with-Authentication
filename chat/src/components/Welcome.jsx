import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Welcome({ currentUser }) {
  return (
    <Container>
        {/* Add image to welcome */}
        <h1>
            Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Please select a chat to Start Messaging.</h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #66FCF1;
  }

  `;