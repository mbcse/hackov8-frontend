import React from 'react';
import "./page4.css";
import {Link} from 'react-router-dom';

export default function Page4() {
    return (
        <div>
            <div className="container1">
                <div className="sidebar">
                    <img className="profile" src="assets/images/profile.svg" alt="dashboard"></img>
                    <div className="name1">Organizer</div>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className="name2">Ongoing Events</div>
                    </Link>
                    <Link to='/page2' style={{ textDecoration: 'none' }}>
                        <div className="name2">Add Events</div>
                    </Link>
                    <Link to='/page4' style={{ textDecoration: 'none' }}>
                        <div className="shadow">Utilities</div>
                    </Link>
                    <div className="name2">Settings</div>
                    <img className="accounting" src="assets/images/accounting.svg" alt="dashboard"></img>
                </div>
                <div className="aside">
                    <div className="block1">
                        <img className="logout" src="assets/images/notification.svg" alt="dashboard"></img>
                        <div className="logoutext">Logout</div>
                    </div>
                    <div className="u1">
                        <img className="email" src="assets/images/email.svg" alt="dashboard"></img>
                        <img className="whatsapp" src="assets/images/whatsapp.svg" alt="dashboard"></img>
                        <img className="businessmen" src="assets/images/businessmen.svg" alt="dashboard"></img>
                    </div>
                </div> 
            </div>
        </div>
    )
}
