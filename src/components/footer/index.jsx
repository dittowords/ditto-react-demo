import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footerCol">
        {t("footer.about.title")}
        <div className="link">{t("footer.about.company")}</div>
        <div className="link">{t("footer.about.press")}</div>
        <div className="link">{t("footer.about.blog")}</div>
        <div className="link">{t("footer.about.careers")}</div>
      </div>
      <div className="footerCol">
        {t("footer.community.title")}
        <div className="link">{t("footer.community.accessibility")}</div>
        <div className="link">{t("footer.community.guests")}</div>
        <div className="link">{t("footer.community.invite")}</div>
        <div className="link">{t("footer.community.share")}</div>
      </div>
      <div className="footerCol">
        {t("footer.host.title")}
        <div className="link">{t("landing.body.join-hosts.host-home")}</div>
        <div className="link">
          {t("landing.body.join-hosts.host-experience")}
        </div>
        <div className="link">
          {t("landing.body.join-hosts.host-online-experience")}
        </div>
        <div className="link">{t("footer.host.refer")}</div>
        <div className="link">{t("footer.host.resources")}</div>
      </div>
      <div className="footerCol">
        {t("footer.support.title")}
        <div className="link">{t("footer.support.help")}</div>
        <div className="link">{t("footer.support.trust-safety")}</div>
        <div className="link">{t("footer.support.cancellation")}</div>
      </div>
    </div>
  );
};

export default Footer;
