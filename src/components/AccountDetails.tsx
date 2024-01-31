import { Trans, useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { dittoVariableLink } from "../ditto/helpers";

function AccountDetails() {
  const [, setLocation] = useLocation();

  const { t } = useTranslation();

  return (
    <>
      <h1>{t("onboarding.account-details.header-sample")}</h1>
      <p className="title-info">
        {t("onboarding.account-details.hint-text-sample")}
      </p>
      <form>
        <label>{t("input.email.label-sample")}</label>
        <input type="text" placeholder="name@company.com" />
        <label>{t("input.password.label-sample")}</label>
        <input type="text" className="hide-text" placeholder="**************" />
        <label>{t("input.confirm-password.label-sample")}</label>
        <input type="text" className="hide-text" placeholder="**************" />
      </form>
      <div className="bottom-cta">
        <button>{t("onboarding.sign-up.cta-sample")}</button>
        <p
          className="back"
          onClick={() => {
            setLocation("bank-linking");
          }}
        >
          {t("onboarding.cta.back-sample")}
        </p>
      </div>
      <p className="login-signup-text">
        <Trans
          i18nKey="onboarding.sign-up.disclaimer-sample"
          components={{
            1: <a href={dittoVariableLink("termsAndConditionsLinkSample")} />,
          }}
        />
      </p>
    </>
  );
}

export default AccountDetails;
