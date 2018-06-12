import React from "react";
import Graphics from "../DashboardGraphics";
import css from "./home.css";

const Home = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div className={css.titulo}>Dashboard</div>
        <Graphics />
      </div>
    </div>
  );
};

export default Home;
