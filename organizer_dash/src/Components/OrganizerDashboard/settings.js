import React from "react";
import "./settings.css";
import { Link } from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Settings() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
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
          <Link to="/page2" style={{ textDecoration: "none" }}>
            <div className="name2">Add Events</div>
          </Link>
          <Link to="/page4" style={{ textDecoration: "none" }}>
            <div className="name2">Utilities</div>
          </Link>
          <div className="shadow">Settings</div>
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
          <FormGroup row>
            <h4>Notifications&nbsp; &nbsp;</h4>
            <FormControlLabel
              control={
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
            />
          </FormGroup>
          <h4>Change Password</h4>
          <h4>Help</h4>
          <h4>Legal</h4>
          <h4>Terms & Conditions</h4>
        </div>
      </div>
    </div>
  );
}
