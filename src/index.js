import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const navbarLinks = [
  { title: "Profile", link: "/profile/" },
  { title: "Messages", link: "/dialogs/" },
  { title: "News", link: "/news/" },
  { title: "Music", link: "/music/" },
  { title: "Settings", link: "/settings/" },
];
const myPosts = [
  { message: "Hello world!", likesCnt: 3 },
  { message: "I am learning React", likesCnt: 6 },
  { message: "How are you?", likesCnt: 4 },
];
const dialogs = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Vasya" },
  { id: 4, name: "Dasha" },
];
const messages = [
  { text: "Hey!" },
  { text: "How r u?" },
  { text: "c ya!" },
];

ReactDOM.render(
  <React.StrictMode>
    <App navbarLinks={navbarLinks} myPosts={myPosts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
