import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Logout from "./logout";
import ChatInput from "./chatInput";
/* 
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes"; */

export default function ChatContainer( {currentChat} ) {
  const handleSendMsg = async (msg) => {

  };

  return (
    <>
    { currentChat && (
        <Container>
            <div className="chat-header">
                <div className="user-details">
                    <div className="profileImage">
                        <div className="profileImg" id={`${currentChat.profileImage}`}></div>
                    </div>
                    <div className="username">
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>
                <Logout />
            </div>
            <div className="chat-messages"></div>
            <div className="chat-input">
            <ChatInput handleSendMsg={handleSendMsg}/>
            </div>
        </Container>
    )}
    </>
  )
}

const Container = styled.div`
  padding-top: 1rem;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .profileImage {
        .profileImg {
            height: 60px;
        }
      }
      .username {
        h3 {
            color: white;
        }
      }
    }
  }

  .profileImg {
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  #green {    
    background-color: green;
  }

  #blue {
    background-color: blue;
  }

  #purple {
    background-color: purple;
  }

  #red {
    background-color: red;
  }

  #yellow {
    background-color: yellow;
  }
  
`;