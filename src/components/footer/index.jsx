import React from "react";

import { Ditto } from "ditto-react";

import "./style.scss";

const Footer = ({}) => {
  return (
    <div className="footer">
      <div className="footerCol">
        <h2><Ditto componentId="footer.about.title" /></h2>
        <div className="link">
          <Ditto componentId="footer.about.company" />
        </div>
        <div className="link">
          <Ditto componentId="footer.about.press" />
        </div>
        <div className="link">
          <Ditto componentId="footer.about.blog" />
        </div>
        <div className="link">
          <Ditto componentId="footer.about.careers" />
        </div>
      </div>
      <div className="footerCol">
        <h2><Ditto componentId="footer.community.title" /></h2>
        <div className="link">
          <Ditto componentId="footer.community.accessibility" />
        </div>
        <div className="link">
          <Ditto componentId="footer.community.guests" />
        </div>
        <div className="link">
          <Ditto componentId="footer.community.invite" />
        </div>
        <div className="link">
          <Ditto componentId="footer.community.share" />
        </div>
      </div>
      <div className="footerCol">
        <h2><Ditto componentId="footer.host.title" /></h2>
        <div className="link">
          <Ditto componentId="landing.body.join-hosts.host-home" />
        </div>
        <div className="link">
          <Ditto componentId="landing.body.join-hosts.host-experience" />
        </div>
        <div className="link">
          <Ditto componentId="landing.body.join-hosts.host-online-experience" />
        </div>
        <div className="link">
          <Ditto componentId="footer.host.refer" />
        </div>
        <div className="link">
          <Ditto componentId="footer.host.resources" />
        </div>
      </div>
      <div className="footerCol">
        <h2><Ditto componentId="footer.support.title" /></h2>
        <div className="link">
          <Ditto componentId="footer.support.help" />
        </div>
        <div className="link">
          <Ditto componentId="footer.support.trust-safety" />
        </div>
        <div className="link">
          <Ditto componentId="footer.support.cancellation" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
