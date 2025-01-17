import React, { useState } from "react";
import "./managers.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default function Managers() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Link to="/add_event" style={{ textDecoration: "none" }}>
            <div className="name2">Add Events</div>
          </Link>
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
        <div className="aside">
          <div className="block1">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="back">&#60;&#60;Back</div>
            </Link>
            <img
              className="logout3"
              src="assets/images/notification.svg"
              alt="dashboard"
            ></img>
            <div className="logoutext3">Logout</div>
          </div>
          <div className="block2">
            <div className="one">Managers</div>
          </div>
          <div className="hackathon">
            <h1>Hackathon 1.0</h1>
            <h2>1. Manager 1 manager@xyz.com</h2>
            <h2>2. Manager 2 manager@xyz.com</h2>
            <div
              className="addman"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              Add New
            </div>
            <>
              <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className="mymodal"
                overlayClassName="myoverlay"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <label>
                      <p>Name:</p>
                      <input type="text" name="name" />
                    </label>
                    <label>
                      <p>E-mail</p>
                      <input type="text" name="email" />
                    </label>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
