import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Product from './components/product/product';
import Crowdfunding from './components/crowdfunding/crowdfunding';
import Crowdfundingpage from './pages/productdetail';
import CoursesPage from './pages/CoursesPage';
import Navbar from './components/Navbar/navbar';
import Loginpage from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
<Routes>

<Route path="/" element={<App/>} />
<Route path="/home" exact element={<App/>} />
<Route path="/crowdfunding" element={<Crowdfundingpage/>} />
<Route path="/courses" element={<CoursesPage/>} />
<Route path="/login" element={<Loginpage/>} />


</Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
