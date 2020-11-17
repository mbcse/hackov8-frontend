import React, { useEffect, useState } from "react";
import "./page5.css";
import {Link} from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';

export default function Page5() {
    return (
        <div>
            <div className="container1">
                <div className="sidebar">
                    <img className="profile" src="assets/images/profile.svg" alt="dashboard"></img>
                    <div className="name1">Organizer</div>
                    <div className="shadow">Ongoing Events</div>
                    <Link to='/page2' style={{ textDecoration: 'none' }}>
                        <div className="name2">Add Events</div>
                    </Link>
                    <Link to='/page4' style={{ textDecoration: 'none' }}>
                        <div className="name2">Utilities</div>
                    </Link>
                    <div className="name2">Settings</div>
                    <img className="accounting" src="assets/images/accounting.svg" alt="dashboard"></img>
                </div> 
                <div className="aside">
                    <div className="block1">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="back">&#60;&#60;Back</div>
                        </Link>
                        <img className="logout3" src="assets/images/notification.svg" alt="dashboard"></img>
                        <div className="logoutext3">Logout</div>
                    </div>
                    <div className="block2">
                        <div className="one">Managers</div>
                    </div> 
                    <div className="hackathon">
                        <h1>Hackathon 1.0</h1>
                        <h2>1. Manager 1      manager@xyz.com</h2>
                        <h2>2. Manager 2      manager@xyz.com</h2>
                        <div className="addman">Add New</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
