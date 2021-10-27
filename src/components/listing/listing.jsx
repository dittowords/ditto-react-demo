import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";

const Listing = () => {
  const { t } = useTranslation();

  return (
    <div className="listing body">
      <div className="header">
        <h1>Bright and Spacious Modern Villa</h1>
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
            <h3>Entire house hosted by Janet</h3>
            <p>4 guests • 2 bedrooms • 2 beds • 1 bath</p>
            <br />
            <hr />
            <br />
            <h4>Entire home</h4>
            <p>You’ll have the house to yourself.</p>
            <h4>Pool</h4>
            <p>This stay has a pool for its guests.</p>
            <h4>Anytime cancellation</h4>
            <p>You can cancel at any point before your trip.</p>
            <h4>Work friendly</h4>
            <p>This stay has wifi and workspace accomodations.</p>
            <br />
          </div>
          <div className="booking">
            <div className="module">
              <div className="top">
                <div className="price">$148/night</div>
                <div>4.7 (12)</div>
              </div>
              <div className="select1">
                <div className="select">
                  <div className="label">
                    {t("landing.hero.check-in.label")}
                  </div>
                  <div className="placeholder">
                    {t("landing.hero.check-in.placeholder")}
                  </div>
                </div>
                <div className="select">
                  <div className="label">
                    {t("landing.hero.check-out.label")}
                  </div>
                  <div className="placeholder">
                    {t("landing.hero.check-out.placeholder")}
                  </div>
                </div>
              </div>
              <div className="select2">
                <div className="label">{t("landing.hero.check-out.label")}</div>
                <div className="placeholder">
                  {t("landing.hero.check-out.placeholder")}
                </div>
              </div>
              <button>{t("listing.check-availability.button")}</button>
            </div>
          </div>
        </div>
        <div className="reviews"></div>
      </div>
      <div className="otherOptions">
        <h4>{t("listing.other-options.title")}</h4>
        <div>
          {t("listing.other-options.apartments")}
          {t("listing.other-options.houses")}
          {t("listing.other-options.lofts")}
          {t("listing.other-options.barns")}
          {t("listing.other-options.spaceships")}
        </div>
      </div>
    </div>
  );
};

export default Listing;
