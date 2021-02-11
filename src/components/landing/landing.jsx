import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import logo from "../../img/logo.png";
import source from "../../text.json";

import DittoProvider, { Ditto, useDitto} from '../ditto-provider';

const Landing = ({}) => {

  const testCopy = {
    "wow": {
      "textId": "whatsup!"
    }
  };

  return <div>
    <DittoProvider source={source}>
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
          <Ditto frameId="landing_header" blockId="hero">
            {({
              hero_h1, hero_subtext, hero_cta
            }) => (
              <div>
                <h1>{hero_h1.text}</h1>
                <h2>{hero_subtext.text}</h2>
                <button>{hero_cta.text}</button>
              </div>
            )}
          </Ditto>
        </div>
      </div>
      <div>
        <Ditto frameId="landing_header" blockId="navigation">
          {( block ) => {
            return Object.keys(block).map((id) => (
              <div>{block[id].text}</div>
            ));
          }}
        </Ditto>
      </div>
    </DittoProvider>
  </div>
}

export default Landing;
