import React, { useState } from "react";
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';

export default function ChatInput({handleSendMsg}) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  }

  const handleEmojiClick = (emoji, event) => {
    let message = msg + "";
    message += emoji.emoji;
    setMsg(message);
  }

  const sendChat = (event) => {
    event.preventDefault();
    if(msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  }

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {
            showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
          }
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input type="text" placeholder="type your message here" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #1F2833;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .EmojiPickerReact {
        position: absolute;
        top: -470px;
        background-color: #1F2833;
        box-shadow: 0 5px 10px #66FCF1;
        border-color: #66FCF1;
        .epr-body::-webkit-scrollbar {
          background-color: #45A29E;
          width: 5px;
          /* &-thumb {
            background-color: #0B0C10;
          } */
        }
        .epr-emoji-category-label {
          background-color: #66FCF1;
          /* button {
            filter: contrast(0);
            background-color: white;
          } */
        }
        .epr-search-container {
          background-color: transparent;
          border-color: #1F2833;
        }
        .epr-emoji-list:before {
          background-color: #66FCF1;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #0B0C10;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #45A29E;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #66FCF1;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;