import { useContext } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../App";
import { useTranslation } from "react-i18next";

function PhoneNumber() {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const appData = useContext(AppContext);

  return (
    <>
      <h1>
        {t("onboarding.enter-phone-number.header-sample", {
          userNameSample: appData.firstName,
        })}
      </h1>
      <p className="title-info">{t("onboarding.phone-number.h2-sample")}</p>
      <form>
        <input
          type="text"
          placeholder="(555) 555-5555"
          value={appData.phoneNumber}
          onChange={(e) => {
            const formattedPhoneNumber = e.target.value
              .replace(/\D/g, "")
              .replace(/^(\d{3})(\d{3})(\d{4})$/, "($1) $2-$3");
            appData.setPhoneNumber(formattedPhoneNumber);
          }}
        />
      </form>
      <div className="bottom-cta">
        <button
          onClick={() => {
            setLocation("/verification-code");
          }}
          disabled={
            appData.phoneNumber.length !== 14 ||
            !appData.phoneNumber.includes("-")
          }
        >
          {t("onboarding.cta.next-sample")}
        </button>
        <p
          className="back"
          onClick={() => {
            setLocation("/a-few-more-questions");
          }}
        >
          {t("onboarding.cta.back-sample")}
        </p>
      </div>
    </>
  );
}

export default PhoneNumber;
