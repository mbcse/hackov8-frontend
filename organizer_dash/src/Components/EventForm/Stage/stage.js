import React from "react";
// import "./page2.css";
import { Link } from "react-router-dom";

export default function Stage() {
  return (
    <div>
      <h2>Name</h2>
      <input type="text" class="rest1" />
      <div className="date">
        <div className="date1">
          <div className="date11">Application Start Date</div>
          <div className="im">
            <input type="text" class="rest" />
            <img
              className="calendar"
              src="assets/images/calendar.svg"
              alt="dashboard"
            ></img>
          </div>
        </div>
        <div className="date2">
          <div className="date11">Application End Date</div>
          <div className="im">
            <input type="text" class="rest" />
            <img
              className="calendar"
              src="assets/images/calendar.svg"
              alt="dashboard"
            ></img>
          </div>
        </div>
      </div>
      <div className="date">
        <div className="date1">
          <div className="date11">Live Start Date</div>
          <div className="im">
            <input type="text" class="rest" />
            <img
              className="calendar"
              src="assets/images/calendar.svg"
              alt="dashboard"
            ></img>
          </div>
        </div>
        <div className="date2">
          <div className="date11">Live End Date</div>
          <div className="im">
            <input type="text" class="rest" />
            <img
              className="calendar"
              src="assets/images/calendar.svg"
              alt="dashboard"
            ></img>
          </div>
        </div>
      </div>
      <h2>URL</h2>
      <input type="text" class="urlbox" />
      <h2>About</h2>
      <input type="text" class="abtbox" />
      <h2>Banner Image</h2>
      <div className="im">
        <input type="text" class="imgbox" />
        <img
          className="image"
          src="assets/images/image.svg"
          alt="dashboard"
        ></img>
      </div>
      <img
        className="picture"
        src="assets/images/picture.svg"
        alt="dashboard"
      ></img>
      <Link to="/criteria" style={{ textDecoration: "none" }}>
        <div className="save">Save</div>
      </Link>
    </div>
  );
}


// import React from "react";
// import "./mode.css";
// import { Link } from "react-router-dom";

// export default function Stage() {
//   return (
//     <div>
//       <div className="container1">
//         {/* <div className="sidebar"> */}
//           <img
//             className="profile"
//             src="assets/images/profile.svg"
//             alt="dashboard"
//           ></img>
//           <div className="name1">Organizer</div>
//           <Link to="/" style={{ textDecoration: "none" }}>
//             <div className="name2">Ongoing Events</div>
//           </Link>
//           <div className="shadow">Add Events</div>
//           <Link to="/utilities" style={{ textDecoration: "none" }}>
//             <div className="name2">Utilities</div>
//           </Link>
//           <Link to="/settings" style={{ textDecoration: "none" }}>
//             <div className="name2">Settings</div>
//           </Link>
//           <img
//             className="accounting"
//             src="assets/images/accounting.svg"
//             alt="dashboard"
//           ></img>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }
