import { useContext } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../App";
import { useTranslation } from "react-i18next";

const EXPIRATION_MINUTES = 5;

function VerificationCode() {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const appData = useContext(AppContext);

  return (
    <>
      <h1>{t("onboarding.phone-number-verification.header-sample")}</h1>
      <p className="title-info">
        {t("onboarding.phone-number-verification.hint-text-sample", {
          userPhoneNumber: appData.phoneNumber,
          verificationCodeExpiration: 5,
          count: EXPIRATION_MINUTES,
        })}
      </p>
      <form>
        <input type="text" placeholder="XXXXXX" />
        <p className="didnt-receive-it">
          <span>
            {t("onboarding.phone-number-verification.didnt-receive-sample")}
          </span>
          <a href="/">
            {t("onboarding.phone-number-verification.resend-sample")}
          </a>
        </p>
      </form>
      <div className="bottom-cta">
        <button
          onClick={() => {
            setLocation("/bank-linking");
          }}
        >
          {t("onboarding.cta.next-sample")}
        </button>
        <p
          className="back"
          onClick={() => {
            setLocation("/phone-number");
          }}
        >
          {t("onboarding.cta.back-sample")}
        </p>
      </div>
    </>
  );
}

export default VerificationCode;
