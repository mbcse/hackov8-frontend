import React from 'react';
import "./faq.css";
import { Link } from "react-router-dom";

export default function Faq() {
    return (
        <div>
        <div className="container1">
        <div className="sidebar">
          <img
            className="profile"
            src="assets/images/profile.svg"
            alt="dashboard"
          ></img>
          <div className="name1">Organizer</div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="name2">Ongoing Events</div>
          </Link>
          <div className="shadow">Add Events</div>
          <Link to="/utilities" style={{ textDecoration: "none" }}>
            <div className="name2">Utilities</div>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <div className="name2">Settings</div>
          </Link>
          <img
            className="accounting"
            src="assets/images/accounting.svg"
            alt="dashboard"
          ></img>
        </div>
      </div>
        </div>
    )
}
