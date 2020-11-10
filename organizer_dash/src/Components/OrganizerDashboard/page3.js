import React from 'react'
import "./page3.css";
import { Link } from 'react-router-dom';

export default function Page3() {
    return (
        <div>
            <div className="container1">
                <div className="sidebar">
                    <img className="profile" src="assets/images/profile.svg" alt="dashboard"></img>
                    <div className="name1">Organizer</div>
                    <div className="shadow">Ongoing Events</div>
                    <Link to="/page2" style={{ textDecoration: 'none' }}>
                        <div className="name2">Add Events</div>
                    </Link>
                    <div className="name2">Utilities</div>
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
                        <div className="one">Participations</div>
                        <div className="two shadow">Get CSV File</div>
                    </div> 
                    <div className="hackathon">
                        <h1>Hackathon 1.0</h1>
                        <div className="block3">
                            <div className="three">Team</div>
                            <div className="three1">Name</div>
                            <div className="three1">E-Mail</div>
                            <div className="three1">Meeting Link</div>
                        </div>
                        <div className="main">
                            <div className="block4">
                                <div className="box1"></div>
                                <div className="box2"></div>
                                <div className="box2"></div>
                                <div className="box3"></div>
                            </div>
                            <div className="block4">
                                <div className="box1"></div>
                                <div className="box2"></div>
                                <div className="box2"></div>
                                <div className="box3"></div>
                            </div>
                            <div className="block4">
                                <div className="box1"></div>
                                <div className="box2"></div>
                                <div className="box2"></div>
                                <div className="box3"></div>
                            </div>
                        </div>    
                    </div> 
                </div>
            </div>
        </div>
    )
}
