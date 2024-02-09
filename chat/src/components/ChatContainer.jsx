import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Logout from "./logout";
import Messages from "./Messages";
import ChatInput from "./chatInput";
import axios from "axios";
import { sendMessageRoute } from "../utils/APIRoutes";
/* 

import { v4 as uuidv4 } from "uuid";
import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes"; */

export default function ChatContainer( {currentChat, currentUser} ) {
  const handleSendMsg = async (msg) => {
    alert(msg);
    /* await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    }); */
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
            <Messages />
            <ChatInput handleSendMsg={handleSendMsg}/>
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