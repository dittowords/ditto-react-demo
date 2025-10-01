import { useContext } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../App";
import { useTranslation } from "react-i18next";

function TellUsAboutYou() {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const appData = useContext(AppContext);

  return (
    <>
      <h1>
        {t("lets-get-set-up")}
      </h1>
      <p className="title-info">
        {t("please-enter-your-info-exactly-as-it-appears-on-your-id")}
      </p>
      <form>
        <label>
          {t("first-name-1")}
        </label>
        <input
          type="text"
          value={appData.firstName}
          onChange={(e) => {
            appData.setFirstName(e.target.value);
          }}
        />
        <label>
          {t("middle-name")}
        </label>
        <p className="label-info">
          {t("only-fill-this-out-if-its-shown-on-your-id.")}
        </p>
        <input type="text" />
        <label>
          {t("last-name-1")}
        </label>
        <input type="text" />
        <label>
          {t("date-of-birth")}
        </label>
        <p className="label-info">
          {t("you-must-to-be-18-or-older.")}
        </p>
        <input type="text" placeholder="MM/DD/YYYY" />
      </form>
      <div className="bottom-cta">
        <button
          disabled={!appData.firstName}
          onClick={() => {
            setLocation("/a-few-more-questions");
          }}
        >
          {t("next-2")}
        </button>
        <p className="login-signup-text">
          <span>
            {t("already-have-an-account")}
          </span>
          <a href="/login">Login</a>
        </p>
      </div>
    </>
  );
}

export default TellUsAboutYou;
