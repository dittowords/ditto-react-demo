import { DittoComponent } from "ditto-react";
import { useLocation } from "wouter";

function AccountDetails() {
  const [, setLocation] = useLocation();

  return (
    <>
      <h1>
        <DittoComponent componentId="onboarding.account-details.header-sample" />
      </h1>
      <p className="title-info">
        <DittoComponent componentId="onboarding.account-details.hint-text-sample" />
      </p>
      <form>
        <label>
          <DittoComponent componentId="input.email.label-sample" />
        </label>
        <input type="text" placeholder="name@company.com" />
        <label>
          <DittoComponent componentId="input.password.label-sample" />
        </label>
        <input type="text" className="hide-text" placeholder="**************" />
        <label>
          <DittoComponent componentId="input.confirm-password.label-sample" />
        </label>
        <input type="text" className="hide-text" placeholder="**************" />
      </form>
      <div className="bottom-cta">
        <button
          onClick={() => {
            setLocation("/");
          }}
        >
          <DittoComponent componentId="onboarding.sign-up.cta-sample" />
        </button>
        <p
          className="back"
          onClick={() => {
            setLocation("bank-linking");
          }}
        >
          <DittoComponent componentId="onboarding.cta.back-sample" />
        </p>
      </div>
      <p className="login-signup-text">
        {/* TODO: Replace with DittoComponent with link */}
        <span>By signing up, you agree to our </span>
        <a href="/">Terms and Conditions</a>
      </p>
    </>
  );
}

export default AccountDetails;
