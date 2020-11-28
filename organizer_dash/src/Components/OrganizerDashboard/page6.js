import React from "react";
import "./page6.css";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "128",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const data = {
  /*labels: [
          'Red',
          'Green'
      ],*/
  datasets: [
    {
      data: [270, 90],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
  text: "26%",
};
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function () {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  },
});

export default function Page6() {
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="back">&#60;&#60;Back</div>
            </Link>
            <div className="h">Hackathon&nbsp;1.0</div>
            <img
              className="logout4"
              src="assets/images/notification.svg"
              alt="dashboard"
            ></img>
            <div className="logoutext4">Logout</div>
          </div>
          <div className="heading">Statistics</div>
          <div className="s">
            <div className="stat1">
              <div className="stext">Stage&nbsp;1</div>
              <Doughnut data={data} />
              <div className="stext">Submissions</div>
            </div>
            <div className="stat11">
              <div className="stext">Stage&nbsp;1</div>
              <Doughnut data={data} />
              <div className="stext">Submissions</div>
            </div>
            <div className="stat11">
              <div className="stext">Stage&nbsp;1</div>
              <Doughnut data={data} />
              <div className="stext">Submissions</div>
            </div>
          </div>
          <div className="stat2">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Activity",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
