import React from "react";
import css from "./home.css";

const Home = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div className={css.img}></div>
        <div className={css.login} />
      </div>
    </div>
  );
};

export default Home;
