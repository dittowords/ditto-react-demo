import React from 'react';
import logo from "../../img/logo.png";

import { Ditto } from 'ditto-react';

import './style.scss';

const Listing = ({}) => {
  return <div className="listing body">
      <div className="header">
        <h1><Ditto textId="text_601cc35c5be42cc3f6f8ac7a"/></h1>
      </div>
      <div className="images">
        <div className="img img1"></div>
        <div className="grid">
          <div className="row">
            <div className="img img2"></div>
            <div className="img img3"></div>
          </div>
          <div className="row">
            <div className="img img4"></div>
            <div className="img img5"></div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="listing">
          <div className="listingInfo">
            <h3>
              <Ditto textId="text_601cc35d5be42cc3f6f8ac7b"/>
            </h3>
            <Ditto textId="text_601cc35d5be42cc3f6f8ac91"/>
            <br/>
            <hr/>
            <br/>
            <Ditto
              frameId="frame_601cc35d5be42cc3f6f8ad18"
              blockId="amenities"
            >
              {( block ) => {
                return Object.keys(block).map((id) => (
                  <div className="amenity} key={block[id]">{block[id]}</div>
                ));
              }}
            </Ditto>
          </div>
          <div className="booking">
            <div className="module">
              <div className="top">
                <div className="price">$148/night</div>
                <div>4.7 (12)</div>
              </div>
              <div className="select1">
                <div className="select">
                  <div className="label"><Ditto textId="text_601cc35d5be42cc3f6f8ac82"/></div>
                  <div className="placeholder"><Ditto textId="add_dates_button"/></div>
                </div>
                <div className="select">
                  <div className="label"><Ditto textId="text_601cc35d5be42cc3f6f8ac84"/></div>
                  <div className="placeholder"><Ditto textId="text_601cc35d5be42cc3f6f8ac86"/></div>
                </div>
              </div>
              <div className="select2">
                <div className="label"><Ditto textId="text_601cc35d5be42cc3f6f8ac85"/></div>
                <div className="placeholder"><Ditto textId="text_601cc35d5be42cc3f6f8ac87"/></div>
              </div>
              <button><Ditto textId="text_601cc35d5be42cc3f6f8ac88"/></button>
            </div>
          </div>
        </div>
        <div className="reviews">
        </div>
      </div>
      <div className="otherOptions">
        <h4><Ditto textId="text_601cc35d5be42cc3f6f8aca0"/></h4>
        <div><Ditto textId="text_601cc35d5be42cc3f6f8aca1"/></div>
      </div>
  </div>
}

export default Listing;
