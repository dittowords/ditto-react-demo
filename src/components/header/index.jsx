import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { localeOptions } from "../../i18n";

import logo from "../../img/logo.png";

const Header = (props) => {
  const { variant, onVariantChange } = props;
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Ditto - A single source of truth for your product copy"
            />
          </Link>
        </div>
        <div className="links">
          <div className="link">{t("nav.link.activities")}</div>
          <div className="link">{t("nav.link.become-a-host")}</div>
          <div className="link">{t("nav.link.online-experiences")}</div>
          <div className="link">{t("nav.link.places-to-stay")}</div>
        </div>
        <select onChange={onVariantChange} value={variant}>
          {localeOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
