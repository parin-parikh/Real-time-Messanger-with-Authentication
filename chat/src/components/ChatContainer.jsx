import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Logout from "./logout";
import ChatInput from "./chatInput";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { sendMessageRoute, getAllMessagesRoute } from "../utils/APIRoutes";

export default function ChatContainer( { currentChat, currentUser, socket } ) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    async function getData() {
      if(currentChat) {
        const response = await axios.post(getAllMessagesRoute, {
          from: `${currentUser._id}`,
          to: `${currentChat._id}`,
        });
        setMessages(response.data);
      }
    }
    getData();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(
      localStorage.getItem("chat-app-user")
    );

    await axios.post(sendMessageRoute, {
      from: data._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg});
    setMessages(msgs);
  };

  useEffect(() => {
    if(socket.current) {
      socket.current.on("msg-receive", (msg) => {
        setArrivalMessage({fromSelf: false, message: msg});
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
            <div className="chat-messages">
              {
                messages.map((message) => {
                  return (
                    <div ref={scrollRef} key={uuidv4()}>
                      <div className={`message ${message.fromSelf ? "sended" : "recieved"}`}>
                        <div className="content">
                          <p>
                            {message.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <ChatInput handleSendMsg={handleSendMsg}/>
        </Container>
    )}
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
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

  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #fff;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #fff;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #1F2833;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #45A29E;
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