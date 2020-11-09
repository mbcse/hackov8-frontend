import React from 'react'
import "./page2.css";
import { Link } from 'react-router-dom';

export default function Page2() {
    return (
        <div>
            <div className="container1">
                <div className="sidebar">
                    <img className="profile" src="assets/images/profile.svg" alt="dashboard"></img>
                    <div className="name1">Organizer</div>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className="name2">Ongoing Events</div>
                    </Link>
                    <div className="shadow">Add Events</div>
                    <div className="name2">Utilities</div>
                    <div className="name2">Settings</div>
                    <img className="accounting" src="assets/images/accounting.svg" alt="dashboard"></img>
                </div>
            <div className="aside">
                <div className="block1">
                    <img className="logout" src="assets/images/notification.svg" alt="dashboard"></img>
                    <div className="logoutext">Logout</div>
                </div>
                <div className="block2">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div> 
                </div>
                <div className="hackathon">
                    <h1>Hackathon 1.0</h1>
                </div>        
            </div>
        </div>
        </div>
    )
}
