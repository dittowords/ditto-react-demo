import { DittoComponent } from "ditto-react";
import { useContext } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../App";

function VerificationCode() {
  const [, setLocation] = useLocation();

  const appData = useContext(AppContext);

  return (
    <>
      <h1>
        <DittoComponent componentId="onboarding.phone-number-verification.header-sample" />
      </h1>
      <p className="title-info">
        <DittoComponent
          componentId="onboarding.phone-number-verification.hint-text-sample"
          variables={{
            userPhoneNumber: appData.phoneNumber,
            verificationCodeExpiration: 5,
          }}
        />
      </p>
      <form>
        <input type="text" placeholder="XXXXXX" />
        <p className="didnt-receive-it">
          <span>
            <DittoComponent componentId="onboarding.phone-number-verification.didnt-receive-sample" />
          </span>
          <a href="/">
            <DittoComponent componentId="onboarding.phone-number-verification.resend-sample" />
          </a>
        </p>
      </form>
      <div className="bottom-cta">
        <button
          onClick={() => {
            setLocation("/bank-linking");
          }}
        >
          <DittoComponent componentId="onboarding.cta.next-sample" />
        </button>
        <p
          className="back"
          onClick={() => {
            setLocation("/phone-number");
          }}
        >
          <DittoComponent componentId="onboarding.cta.back-sample" />
        </p>
      </div>
    </>
  );
}

export default VerificationCode;
