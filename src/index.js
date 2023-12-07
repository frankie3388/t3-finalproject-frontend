import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccountPage';
import Login from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList from './pages/BlogListPage';
import Blog from './pages/BlogPage';
import NavBar from './components/NavBar';
import Header from './components/Header';
import UserProfile from './pages/UserProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/createaccount" element={<CreateAccount />} ></Route>
        <Route path="/bloglist" element={<BlogList />} ></Route>
        <Route path="/blog" element={<Blog />} ></Route>
        <Route path="/userprofile" element={<UserProfile />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
