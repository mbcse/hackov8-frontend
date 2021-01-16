import React from "react";
import "./mode.css";
import { Link } from "react-router-dom";
import { Checkbox } from "@material-ui/core";

export default function Mode() {
  return (
    <div>
      <div className="form-view container1">
      <h2>Medium</h2>
      <br />
      <label className="option">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        Online
      </label>
      </div>
    </div>
  );
}
