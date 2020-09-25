import React, { useState } from "react";
import "./student.css";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import { FcDocument } from "react-icons/fc";
export default function Student() {
  const [gray, setGray] = useState(1);
  const changing = (e) => {
    setGray(e);
  };
  const skills = ["C", "C++", "Java", "Python"];
  return (
    <div>
      <div>
        <img src="assets/images/Rectangle 4.svg" alt="dashboard"></img>
      </div>
      <div className="flexing">
        <div>
          <img
            src="assets\images\christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
            alt="profile"
            className="img"
          ></img>
        </div>
        <div className="sklshead">
          <h3>SKILLS</h3>
        </div>
        {skills.map((c) => (
          <div className="skls">
            <p>{c}</p>
          </div>
        ))}
        <div className="resume flexing1">
          <div className="resumepic">
            <FcDocument></FcDocument>
          </div>
          <div>
            <p>Resume</p>
          </div>
        </div>
      </div>
      <div className="flexing">
        <div className="personal">
          <div className="flexing1 info">
            <div>
              <FaPhoneAlt></FaPhoneAlt>
            </div>
            <div className="detail">
              <b>9292939495</b>
            </div>
          </div>
          <div className="flexing1 info">
            <div>
              <IconContext.Provider value={{ color: "blue" }}>
                <HiMail></HiMail>
              </IconContext.Provider>
            </div>
            <div className="detail">
              <b>alenshan@gmail.com</b>
            </div>
          </div>
          <div className="flexing1 info">
            <div>
              <IconContext.Provider value={{ color: "blue" }}>
                <FaLinkedin></FaLinkedin>
              </IconContext.Provider>
            </div>
            <div className="detail">
              <b>Alex Sancjez</b>
            </div>
          </div>
          <div className="flexing1 info">
            <div>
              <FaGithub></FaGithub>
            </div>
            <div className="detail">
              <b>alex123</b>
            </div>
          </div>
        </div>

        <div className="graybox">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="flexing">
        <div className="personal">
          <h3>INTERESTS</h3>
          <div className="flexing">
            <div className="interests">
              <p>Gym</p>
            </div>
            <div className="interests">
              <p>Driving</p>
            </div>
          </div>
          <div className="flexing">
            <div className="interests">
              <p>Reading</p>
            </div>
            <div className="interests">
              <p>Singing</p>
            </div>
          </div>
        </div>
        <div className="graybox">
          <div className="flexing evenly">
            <div onClick={(e) => changing(1)}>
              <h4
                style={{
                  color: gray === 1 ? " rgb(15, 157, 201)" : "black",
                  cursor: "pointer",
                }}
              >
                Achievements
              </h4>
            </div>
            <div onClick={(e) => changing(2)}>
              <h4
                style={{
                  color: gray === 2 ? " rgb(15, 157, 201)" : "black",
                  cursor: "pointer",
                }}
              >
                Hackathons
              </h4>
            </div>
            <div onClick={(e) => changing(3)}>
              <h4
                style={{
                  color: gray === 3 ? " rgb(15, 157, 201)" : "black",
                  cursor: "pointer",
                }}
              >
                Upcoming Hackathons
              </h4>
            </div>
          </div>
          {gray === 1 && (
            <div>
              <p className="slnos"> 1. Achievement 1</p>
              <p className="slnos"> 2. Achievement 2</p>
              <p className="slnos"> 3. Achievement 3</p>
            </div>
          )}
          {gray === 2 && (
            <div>
              <p className="slnos"> 1. Hackathon 1</p>
              <p className="slnos"> 2. Hackathon 2</p>
              <p className="slnos"> 3. Hackathon 3</p>
            </div>
          )}
          {gray === 3 && (
            <div>
              <p className="slnos"> 1. Upcoming Hackathon 1</p>
              <p className="slnos"> 2. Upcoming Hackathon 2</p>
              <p className="slnos"> 3. Upcoming Hackathon 3</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
