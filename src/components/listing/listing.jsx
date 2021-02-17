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
        <div>Become a host</div>
      </div>
      <div className={style.images}>
        <div className={classnames(style.img, style.img1)}></div>
        <div className={style.grid}>
          <div className={style.row}>
            <div className={classnames(style.img, style.img2)}></div>
            <div className={classnames(style.img, style.img3)}></div>
          </div>
          <div className={style.row}>
            <div className={classnames(style.img, style.img4)}></div>
            <div className={classnames(style.img, style.img5)}></div>
          </div>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.listing}>
          <div className={style.listingInfo}>
            <h3><Ditto textId="text_601cc35d5be42cc3f6f8ac7b"/></h3>
            <Ditto textId="text_601cc35d5be42cc3f6f8ac91"/>
            <br/>
            <hr/>
            <br/>
            <Ditto
              frameId="listing_app"
              blockId="amenities"
            >
              {( block ) => {
                return Object.keys(block).map((id) => (
                  <div className={style.amenity} key={block[id]}>{block[id]}</div>
                ));
              }}
            </Ditto>
            <hr/>
          </div>
          <div className={style.booking}>
            <div className={style.module}>
              <div className={style.top}>
                <div className={style.price}>$148/night</div>
                <div>4.7 (12)</div>
              </div>
              <div className={style.select1}>
                <div className={style.select}>
                  Check in
                </div>
                <div className={style.select}>
                  Check out
                </div>
              </div>
              <div className={style.select2}>
                Guests
              </div>
              <button>Check Availability</button>
            </div>
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
