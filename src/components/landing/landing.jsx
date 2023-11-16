import React from "react";
import Style from "./landing.module.css";
import { Link } from "react-router-dom";

export default function Landing({ name, background_image, genres }) {
  return (
    <div className={Style.content}>
      <Link to="/home/videogame">
        <label className={Style.btnneon}>START</label>
      </Link>
    </div>
  );
}
