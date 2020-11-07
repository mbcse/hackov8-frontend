import React from "react";
import "./page1.css";

export default function Page1() {
        return (
            <div>
                <div className="container1">
                    <div className="sidebar">
                        <img className="profile" src="assets/images/profile.svg" alt="dashboard"></img>
                        <div className="name1">Organizer</div>
                        <div className="shadow">Ongoing Events</div>
                        <div className="name2">Add Events</div>
                        <div className="name2">Utilities</div>
                        <div className="name2">Settings</div>
                        <img className="accounting" src="assets/images/accounting.svg" alt="dashboard"></img>
                    </div>
                    <div className="aside">
                        <div className="block1">
                            <img className="logout" src="assets/images/notification.svg" alt="dashboard"></img>
                            <div className="logoutext">Logout</div>
                        </div>
                        <div className="hackathon">
                            <h1>Hackathon 1.0</h1>
                            <div className="block2">
                                <div className="start">
                                    <div className="b1">Application Start Date</div>
                                    <div className="b2">20 March 2020,12.00 am IST</div>
                                </div>
                                <div className="end">
                                    <div className="b1">Application End Date</div>
                                    <div className="b2">20 March 2020, 12.00 am IST</div>
                                </div>
                            </div>
                            <div className="block3">
                                <div className="start">
                                    <div className="b1">Live Start Date</div>
                                    <div className="b2">20 March 2020, 12.00 am IST</div>
                                </div>
                                <div className="end">
                                    <div className="b1">Live End Date</div>
                                    <div className="b2">20 March 2020, 12.00 am IST</div>
                                </div>
                            </div>
                            <div className="block4">Mode: Online Offline</div>
                            <div className="hacktext">Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className="block5">
                                <div className="text1">Stats  &#62;&#62;</div>
                                <div className="text2">View Participants  &#62;&#62;</div>
                                <div className="text2">Add Manager  &#62;&#62;</div>
                                <div className="last">Update</div>
                            </div>
                        </div>
                        <img className="add" src="assets/images/add.svg" alt="dashboard"></img>
                        <div className="addtext">Add New Event</div>
                    </div>
                </div>
            </div>     
        );
}

