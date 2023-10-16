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
        {t("onboarding.profile.header-sample")}
      </h1>
      <p className="title-info">
        {t("onboarding.profile.id-disclaimer-sample")}
      </p>
      <form>
        <label>
          {t("input.first-name.label-sample")}
        </label>
        <input
          type="text"
          value={appData.firstName}
          onChange={(e) => {
            appData.setFirstName(e.target.value);
          }}
        />
        <label>
          {t("input.middle-name.label-sample")}
        </label>
        <p className="label-info">
          {t("input.middle-name.helper-text-sample")}
        </p>
        <input type="text" />
        <label>
          {t("input.last-name.label-sample")}
        </label>
        <input type="text" />
        <label>
          {t("input.birthday.label-sample")}
        </label>
        <p className="label-info">
          {t("input.birthday.helper-text-sample")}
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
          {t("onboarding.cta.next-sample")}
        </button>
        <p className="login-signup-text">
          <span>
            {t("onboarding.sign-up.login-message-sample")}
          </span>
          <a href="/login">Login</a>
        </p>
      </div>
    </>
  );
}

export default TellUsAboutYou;
