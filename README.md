# Chat Application with Authentication and Real-Time Messaging

Welcome to my chat application! This application allows users to register, login, and engage in real-time messaging with other users. Users can also select a profile picture, send text messages, and emojis.

## Features

- **Authentication:** Users can register and login securely.
- **Local Storage:** User sessions are saved locally until logout.
- **Profile Picture Selection:** Users can choose a profile picture from a set of options.
- **Real-Time Messaging:** Messages are sent and received instantly using Socket.io.
- **Database Storage:** All messages and authentication data are stored in MongoDB.
- **Styling:** CSS styling is implemented through React.

## Technologies Used

- React
- Node.js
- MongoDB
- Socket.io
- CSS

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/parin-parikh/Multiuser-Messanger.git
   ```

2. Install dependencies:

   ```
   cd chat-application/client
   npm install
   ```

   ```
   cd ../server
   npm install
   ```

3. Set up MongoDB:

   - Make sure MongoDB is installed and running on your system.
   - Update the MongoDB connection URI in the server code (`server.js`) if necessary.

4. Start the frontend:

   ```
   cd ../client
   npm start
   ```

5. Start the backend:

   ```
   cd ../server
   npm start
   ```

## Usage

1. Register or login to access the chat application.
2. Select a profile picture from the provided options.
3. Start messaging with other users in real-time.
4. Log out when you're done.

## Folder Structure

- **client:** Contains the React frontend.
- **server:** Contains the Node.js backend.

## Dependencies

This project utilizes several dependencies to ensure its smooth operation. Here's a brief overview of each:

### Backend Dependencies

- **bcrypt:** Used for hashing passwords securely during authentication.
- **cors:** Enables Cross-Origin Resource Sharing (CORS) to allow requests from a frontend domain.
- **dotenv:** Allows loading environment variables from a `.env` file into `process.env`.
- **express:** A fast, unopinionated web framework for Node.js, used for building the backend server.
- **mongoose:** An elegant MongoDB object modeling tool designed to work in an asynchronous environment, facilitating interaction with MongoDB.
- **nodemon:** Monitors changes in the server-side code and automatically restarts the server.
- **socket.io:** Enables real-time, bidirectional communication between clients and the server, essential for implementing real-time messaging.

### Frontend Dependencies

- **axios:** A promise-based HTTP client for the browser and Node.js, used for making HTTP requests to the backend server.
- **react-toastify:** A library for adding toast notifications to React applications, used for displaying messages such as errors or success notifications to users.
- **emoji-picker-react:** Provides an emoji picker component for React applications, allowing users to select emojis for messaging.

These dependencies ensure the functionality, security, and user experience of the chat application. They are essential components of the project and contribute to its successful operation.

### Images 
![alt text](https://cdn.discordapp.com/attachments/945040077455773839/1244785370026086473/Capture.PNG?ex=66566037&is=66550eb7&hm=f8b62014606886c64fee4cf6627813ac8039c209ff3d810149b997b99a66d3b5&)
![alt text](https://cdn.discordapp.com/attachments/945040077455773839/1244785370428608612/Capture3.PNG?ex=66566037&is=66550eb7&hm=35d8afdc9e62c3450d27c8fd7e5edb7fce5c7d71eb70f529f747317c21326cc2&)
![alt text](https://cdn.discordapp.com/attachments/945040077455773839/1244785370734788608/Capture4.PNG?ex=66566037&is=66550eb7&hm=fe78b281bbeecf5a05b57fa3e0d9ab6187da711985e2faf7b24da73977ebb421&)
![alt text](https://cdn.discordapp.com/attachments/945040077455773839/1244785495645491210/messageApp.png?ex=66566055&is=66550ed5&hm=42209d6c09c1e29f870b3276e87a0c4143f174069ce67cce0a2912be3d6ca58e&)

