import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="login-title">Log in</h1>
      <form>
        <label>{t("input.email.label-sample")}</label>
        <input type="text" placeholder="name@company.com" />
        <label>{t("input.password.label-sample")}</label>
        <input type="text" className="hide-text" placeholder="**************" />
      </form>
      <p className="forgot-password">
        {t("onboarding.cta.forgot-password-sample")}
      </p>
      <div className="bottom-cta">
        <button>Log in</button>
        <p className="login-signup-text">
          <span>{t("onboarding.log-in.sign-up-message-sample")}</span>
          <a href="/">{t("onboarding.sign-up.cta-sample")}</a>
        </p>
      </div>
    </>
  );
}

export default Login;
