import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Logo from "../assets/logo.PNG";

export default function Contacts({contacts, currentUser, changeChat}) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);


  useEffect(() => {
    async function fetchData() {
      if (currentUser) {
        setCurrentUserImage(currentUser.profileImage);
        setCurrentUserName(currentUser.username);
      }
    }
    fetchData();
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  }

  return (
    <>
    {
        currentUserImage && currentUserName && (
            <Container>
                <div className="brand">
                    {/* <img src={Logo} alt="logo" /> */}
                    <h3>Parin's Chat</h3>
                </div>
                <div className="contacts">
                    {contacts.map((contact, index) => {
                        return (
                            <div className= {`contact ${
                                index === currentSelected ? "selected" : "" }`} key={index} onClick={() => changeCurrentChat(index, contact)}
                            >
                                <div className="profileImg" id={`${contact.profileImage}`}></div>
                                <div className="username">
                                    <h3>{contact.username}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="current-user">
                    <div className="profileImg" id={`${currentUserImage}`}></div>
                    <div className="username">
                        <h2>{currentUserName}</h2>
                    </div>
                </div>
            </Container>
        )
    }
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #1F2833;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      height: 5rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb {
            background-color: #0B0C10;
            width: 0.1rem;
            border-radius: 1rem;
        }
    }
    .contact {
        background-color: #0B0C10;
        min-height: 5rem;
        width: 90%;
        cursor: pointer;
        border-radius: 0.2rem;
        padding: 0.4rem;
        gap: 1rem;
        align-items: center;
        display: flex;
        transition: 0.5s ease-in-out;
        .profileImg {
          height: 60px;
          width: 60px;
          border-radius: 50%;
        }
        .username {
            h3{
                color: white;
            }
        }
    }
    .selected {
        background-color: #45A29E;
    }
  }

  .current-user {
    background-color: #1F2833;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .profileImg {
        height: 4rem;
        max-inline-size: 100%;
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width:720px) and (max-width: 1080px) {
        gap: 0.5rem;
        .username {
            h2 {
                font-size: 1rem;
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