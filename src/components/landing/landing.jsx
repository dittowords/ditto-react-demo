import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./style.scss";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="landing body">
      <div className="header">
        <div className="hero">
          <div>
            <h1>{t("landing.hero.title")}</h1>
            <h2>{t("landing.hero.subtitle")}</h2>
            <Link className="button" to="/listing">
              {t("landing.hero.cta")}
            </Link>
          </div>
        </div>
      </div>
      <div className="section light">
        <h2>{t("landing.body.live-anywhere.title")}</h2>
        <div className="gallery">
          <div className="card4">
            <div className="img liveAnywhere0"></div>
            <div className="label">
              {t("landing.body.live-anywhere.entire-homes")}
            </div>
          </div>
          <div className="card4">
            <div className="img liveAnywhere1"></div>
            <div className="label">
              {t("landing.body.live-anywhere.cabins-and-cottages")}
            </div>
          </div>
          <div className="card4">
            <div className="img liveAnywhere2"></div>
            <div className="label">
              {t("landing.body.live-anywhere.unique-stays")}
            </div>
          </div>
          <div className="card4">
            <div className="img liveAnywhere3"></div>
            <div className="label">
              {t("landing.body.live-anywhere.pets-welcome")}
            </div>
          </div>
        </div>
      </div>
      <div className="section dark">
        {t("landing.body.online-experiences.title")}
        <div className="gallery">
          <div className="card2">
            <div className="img onlineexp1">
              <div className="label caption">
                {t("landing.body.online-experiences.live-concert")}
              </div>
            </div>
          </div>
          <div className="vertical">
            <div className="gallery">
              <div className="card2">
                <div className="img onlineexp2">
                  <div className="label caption">
                    {t("landing.body.online-experiences.learn-photography")}
                  </div>
                </div>
              </div>
              <div className="card2">
                <div className="img onlineexp3">
                  <div className="label caption">
                    {t("landing.body.online-experiences.event-support")}
                  </div>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="img onlineexp4">
                <div className="label caption">
                  {t("landing.body.online-experiences.stovetop-tricks")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section light">
        {t("landing.body.join-hosts.title")}
        <div className="gallery">
          <div className="card3">
            <div className="img hosts0"></div>
            <div className="label">
              {t("landing.body.join-hosts.host-home")}
            </div>
          </div>
          <div className="card3">
            <div className="img hosts1"></div>
            <div className="label">
              {t("landing.body.join-hosts.host-experience")}
            </div>
          </div>
          <div className="card3">
            <div className="img hosts2"></div>
            <div className="label">
              {t("landing.body.join-hosts.host-online-experience")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
