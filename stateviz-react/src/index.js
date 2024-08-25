import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyForm from './chatgptform';

import Library from './Chapter03/Library';
import Clock from './Chapter04/Clock';
import CommentList from './Chapter05/CommentList';
import NotificationList from './Chapter06/NotificationList';
import Accomodate from './Chapter07/Accomodate';
import ConfirmButton from './Chapter08/ConfirmButton';
import LandingPage from './Chapter09/LandingPage';
import AttendanceBook from './Chapter10/AtrtendanceBook';
import SignUp from './Chapter11/SingUp';
import Calculator from './Chapter12/Calculator';
import ProfileCard from './Chapter13/ProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
