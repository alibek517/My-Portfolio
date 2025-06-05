import { Link } from 'react-router-dom';
import React from 'react';
import './style/HedrNew.css'; // styling uchun

function Minhed() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/aboutPage">About me</Link>
      <Link to="/projects">My Projects</Link>
    </div>
  );
}

export default Minhed;
