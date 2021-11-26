import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import User from "./components/User";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App bg-gray-100 p-8">
      <div className="header">Rick and Mortiverse</div>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/popular" element={<Popular/>}></Route>
                <Route path="/user" element={<User/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
