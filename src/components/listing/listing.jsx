import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import logo from "../../img/logo.png";
import source from "../../text.json";
import Footer from '../footer';

import DittoProvider, { Ditto } from '../ditto-provider';

const Listing = ({}) => {
  return <div className={style.body}>
    <DittoProvider source={source}>
      <div className={style.nav}>
        <div className={style.logo}>
          <img src={logo}/>
        </div>
        <div className={style.links}>
        </div>
        <div>Become a host</div>
      </div>
      <div className={style.info}>
        <div className={style.listing}>
          <div className={style.listingInfo}>
            <h3><Ditto textId="text_601cc35d5be42cc3f6f8ac7b"/></h3>
          </div>
          <div className={style.booking}>
          </div>
        </div>
        <div className={style.reviews}>
        </div>
      </div>
      <div className={style.otherOptions}>
        <h4><Ditto textId="text_601cc35d5be42cc3f6f8aca0"/></h4>
        <div><Ditto textId="text_601cc35d5be42cc3f6f8aca1"/></div>
      </div>
      <Footer/>
    </DittoProvider>
  </div>
}

export default Listing;
