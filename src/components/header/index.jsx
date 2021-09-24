import { Ditto } from "ditto-react";

import logo from "../../img/logo.png";

const localeOptions = [
  {
    label: "English",
    value: "base",
  },
  {
    label: "Español",
    value: "spanish"
  }
];

const Header = (props) => {
  const { variant, onVariantChange } = props;

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="links">
          <div className="link">
            <Ditto componentId="nav.link.activities" />
          </div>
          <div className="link">
            <Ditto componentId="nav.link.become-a-host" />
          </div>
          <div className="link">
            <Ditto componentId="nav.link.online-experiences" />
          </div>
          <div className="link">
            <Ditto componentId="nav.link.places-to-stay" />
          </div>
        </div>
        <select onChange={onVariantChange} value={variant}>
          {localeOptions.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
