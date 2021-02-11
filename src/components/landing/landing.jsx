import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import logo from "../../img/logo.png";
import source from "../../text.json";

import DittoProvider, { Ditto } from '../ditto-provider';

const Landing = ({}) => {
  return <div>
    <DittoProvider source={source}>
      <div className={style.header}>
        <div className={style.nav}>
          <div className={style.logo}>
            <img src={logo}/>
          </div>
          <div className={style.links}>
            <Ditto
              frameId="landing_header"
              blockId="navigation"
              filters={{ tags: ["TOP_NAV"]}}
            >
              {( block ) => {
                return Object.keys(block).map((id) => (
                  <div className={style.link}>{block[id].text}</div>
                ));
              }}
            </Ditto>
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
        rest of the page
      </div>
    </DittoProvider>
  </div>
}

export default Landing;
