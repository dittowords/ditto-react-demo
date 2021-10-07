import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png";
import Footer from '../footer';

import { Ditto } from 'ditto-react';

import './style.scss';

const Landing = ({}) => {
  return <div className="landing body">
      <div className="header">
        <div className="hero">
          <div>
            <h1><Ditto componentId="landing.hero.title" /></h1>
            <h2><Ditto componentId="landing.hero.subtitle" /></h2>
            <Link className="button" to="/listing"><Ditto componentId="landing.hero.cta" /></Link>
          </div>
        </div>
      </div>
      <div className="section light">
        <h2>
          <Ditto componentId="landing.body.live-anywhere.title"/>
        </h2>
        <div className="gallery">
          <div className="card4">
            <div className="img liveAnywhere0"></div>
            <div className="label">
              <Ditto componentId="landing.body.live-anywhere.entire-homes"/>
            </div>
          </div>
          <div className="card4">
            <div className="img liveAnywhere1"></div>
            <div className="label">
              <Ditto componentId="landing.body.live-anywhere.cabins-and-cottages"/>
            </div>
          </div>
          <div className="card4">
            <div className="img liveAnywhere2"></div>
            <div className="label">
              <Ditto componentId="landing.body.live-anywhere.unique-stays"/>
            </div>
          </div>
          <div className="card4">
            <div className="img liveAnywhere3"></div>
            <div className="label">
              <Ditto componentId="landing.body.live-anywhere.pets-welcome"/>
            </div>
          </div>
        </div>
      </div>
      <div className="section dark">
        <h2><Ditto componentId="landing.body.online-experiences.title"/></h2>
        <div className="gallery">
          <div className="card2">
            <div className="img onlineexp1">
              <div className="label caption">
                <Ditto componentId="landing.body.online-experiences.live-concert"/>
              </div>
            </div>
          </div>
          <div className="vertical">
            <div className="gallery">
              <div className="card2">
                <div className="img onlineexp2">
                  <div className="label caption">
                    <Ditto componentId="landing.body.online-experiences.learn-photography"/>
                  </div>
                </div>
              </div>
              <div className="card2">
                <div className="img onlineexp3">
                  <div className="label caption">
                    <Ditto componentId="landing.body.online-experiences.event-support"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="img onlineexp4">
                <div className="label caption">
                  <Ditto componentId="landing.body.online-experiences.stovetop-tricks"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section light">
        <h2><Ditto componentId="landing.body.join-hosts.title"/></h2>
        <div className="gallery">
          <div className="card3">
            <div className="img hosts0"></div>
            <div className="label">
              <Ditto componentId="landing.body.join-hosts.host-home"/>
            </div>
          </div>
          <div className="card3">
            <div className="img hosts1"></div>
            <div className="label">
              <Ditto componentId="landing.body.join-hosts.host-experience"/>
            </div>
          </div>
          <div className="card3">
            <div className="img hosts2"></div>
            <div className="label">
              <Ditto componentId="landing.body.join-hosts.host-online-experience"/>
            </div>
          </div>
        </div>
      </div>
  </div>
}

export default Landing;
