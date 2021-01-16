import React, { useEffect, useState } from "react";
import "./page2.css";
import { Link } from "react-router-dom";
import Information from "./Information/information"
import Criteria from "./Criteria/criteria"
import Mode from "./Mode/mode"
import Stage from "./Stage/stage"
import Faq from "./FAQ/faq"

const formPartsChoices = { information: "information", criteria: "criteria", mode: "mode", stages: "stages", faq: "faq" }

function GetFormPart(props) {
  if (props.activePart === formPartsChoices.information) {
    return <Information {...props}/>
  }
  if (props.activePart === formPartsChoices.criteria) {
    return <Criteria {...props}/>
  }
  if (props.activePart === formPartsChoices.mode) {
    return <Mode {...props}/>
  }
  if (props.activePart === formPartsChoices.stages) {
    return <Stage {...props}/>
  }
  if (props.activePart === formPartsChoices.faq) {
    return <Faq {...props}/>
  }
}

export default function Page2() {
  const [activePart, setActivePart] = useState(formPartsChoices.information)
  useEffect(() => {}, [activePart])
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
        <div className="aside">
          <div className="block1">
            <img
              className="logout"
              src="assets/images/notification.svg"
              alt="dashboard"
            ></img>
            <div className="logoutext">Logout</div>
          </div>
          <div className="block2">
            <div className="boxone" onClick={()=>setActivePart(formPartsChoices.information)}>Information</div>
            {/* <Link to="/criteria" style={{ textDecoration: "none" }}> */}
            <div className="boxone" onClick={()=>setActivePart(formPartsChoices.criteria)}>Criteria</div>
            {/* </Link> */}
            {/* <Link to="/mode" style={{ textDecoration: "none" }}> */}
            <div className="boxone" onClick={()=>setActivePart(formPartsChoices.mode)}>Mode</div>
            {/* </Link> */}
            {/* <Link to="/stage" style={{ textDecoration: "none" }}> */}
            <div className="boxone" onClick={()=>setActivePart(formPartsChoices.stages)} >Stages</div>
            {/* </Link> */}
            {/* <Link to="/faq" style={{ textDecoration: "none" }}> */}
            <div className="boxone" onClick={()=>setActivePart(formPartsChoices.faq)} >FAQ's</div>
            {/* </Link> */}
          </div>
          <div className="hackathon">

            <GetFormPart activePart={activePart}/>

          </div>
        </div>
      </div>
    </div>
  );
}
