import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import logo from "../../img/logo.png";

const Landing = ({}) => {

  return <div>
    <div className={style.header}>
      <div className={style.nav}>
        <div className={style.logo}>
          <img src={logo}/>
        </div>
        <div className={style.links}>
          <div className={style.link}>Places to stay</div>
          <div className={style.link}>Experiences</div>
          <div className={style.link}>Online Experiences</div>
        </div>
        <div>Become a host</div>
      </div>

      <div className={style.hero}>
        <h1>Go Anywhere</h1>
        <h2>Book unique places to stay and things to do.</h2>
        <button>Explore stays</button>
      </div>
    </div>
  </div>
}

export default Landing;
