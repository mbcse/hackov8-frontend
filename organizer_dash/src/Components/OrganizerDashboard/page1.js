import React from "react";
import "./page1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Page1() {
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
          <div className="shadow">Ongoing Events</div>
          <Link to="/page2" style={{ textDecoration: "none" }}>
            <div className="name2">Add Events</div>
          </Link>
          <Link to="/page4" style={{ textDecoration: "none" }}>
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
        <div className="aside">
          <div className="block1">
            <img
              className="logout"
              src="assets/images/notification.svg"
              alt="dashboard"
            ></img>
            <div className="logoutext">Logout</div>
          </div>
          <div className="hackathon">
            <div className="t">
              <h1>Hackathon 1.0</h1>
              <div className="t1">Not&nbsp;Published&nbsp;!</div>
              <div className="publish">Publish</div>
            </div>
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
            <div className="hacktext">
              Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="block5">
              <Link to="/page6" style={{ textDecoration: "none" }}>
                <div className="text1">
                  Stats&#62;&#62;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
              </Link>
              <Link to="/page3" style={{ textDecoration: "none" }}>
                <div className="text2">
                  View&nbsp;Participants&#62;&#62;&nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
              </Link>
              <Link to="/page5" style={{ textDecoration: "none" }}>
                <div className="text2">Add&nbsp;Manager&#62;&#62;</div>
              </Link>
              <Link
                to="/page2"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="last">Update</div>
              </Link>
            </div>
          </div>
          <Link to="/page2">
            <img
              className="add"
              src="assets/images/add.svg"
              alt="dashboard"
            ></img>
          </Link>
          <div className="addtext">Add New Event</div>
        </div>
      </div>
    </div>
  );
}
