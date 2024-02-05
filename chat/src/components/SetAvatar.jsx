import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { setAvatarRoute } from "../utils/APIRoutes";
/* import loader from "../assets/loading-gif.gif"; */


export default function SetAvatar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const colorOptions = ['green', 'blue', 'purple', 'red', 'yellow'];
  /* const [avatars, colorOptions] = useState([]); */


  const selectColor = (color) => {
    setSelectedColor(color);
  };

  // Function to handle the button click
/*   const handleButtonClick = () => {
    
  }; */

  const toastOptions = { 
    position: "top-center",
    autoClose: "5000",
    pauseOnHover: false,
    draggable: true,
    theme: "dark"
  };

  const setProfilePicture = async () => {
    if(selectedColor === "") {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(localStorage.getItem("chat-app-user"));
      console.log(user);
      console.log(`${setAvatarRoute}/${user._id}`);
      user.isAvatarImageSet = true;
      user.avatarImage = selectColor;
      localStorage.setItem("chat-app-user", JSON.stringify(user));
      navigate("/");

      /* const {data} = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: colorOptions[setSelectedColor],
      }); */

      /* const {data} = await axios.post(`${setAvatarRoute}/${user._id}`);
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-app-user", JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("ERROR setting avatar, Please try again", toastOptions);
      } */
    }

    /* console.log(`Selected color: ${selectedColor}`); */
  }

  return(
    <>
      <Container>
        <div className="title-container">
          <h1>Pick an Avatar as your profile picture</h1>
        </div>
        <div className="displayColors">
          {colorOptions.map(color => (
            <div 
              key={color}
              className={`color ${color} ${selectedColor === color ? 'selected' : ''}`} 
              onClick={() => selectColor(color)}
              id={`${color}`}
            ></div>
          ))}
        </div>

        <div>
          <button className="submit-btn" onClick={setProfilePicture}>Set as Profile Picture</button>
        </div>
        <ToastContainer />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .title-container {
    h1 {
      color: white;
    }
  }

  .color {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }

  .color:hover {
    transform: scale(1.2);
  }

  .color:focus {
    border: 1px solid white;
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

  .displayColors {
    display: flex;
    gap: 2.5rem;

    .selected {
      border: 6px solid white;
    }
  }

  .submit-btn {
    background-color: #997af0;
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
      background-color: #4e0eff;
    }
  }
`;