import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
// import Dashboard from './pages/Dashboard';
import CreateBlog from './pages/CreateBlogPage';
import EditBlog from './pages/EditBlogPage';
import AuthProvider from './context/AuthContext';
import ApiProvider from './context/ApiContext';
import BlogListByLocation from './pages/BlogListPageByLocation';
import BlogListByUsername from './pages/BlogListPageByUsername';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ApiProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} ></Route>
            <Route path="/createaccount" element={<CreateAccount />} ></Route>
            <Route path="/bloglist" element={<BlogList />} ></Route>
            <Route path="/bloglist/location/:location" element={<BlogListByLocation />} ></Route>
            <Route path="/bloglist/username/:username" element={<BlogListByUsername />} ></Route>
            <Route path="/blog/:id" element={<Blog />} ></Route>
            <Route path="/userprofile" element={<UserProfile />} ></Route>
            {/* <Route path="/dashboard" element={<Dashboard />} ></Route> */}
            <Route path="/createblog" element={<CreateBlog />} ></Route>
            <Route path="/editblog/:id" element={<EditBlog />} ></Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider> 
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
