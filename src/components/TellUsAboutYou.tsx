import { DittoComponent } from "ditto-react";
import { useContext } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../App";

function TellUsAboutYou() {
  const [, setLocation] = useLocation();
  const appData = useContext(AppContext);

  return (
    <>
      <h1>
        <DittoComponent componentId="onboarding.profile.header-sample" />
      </h1>
      <p className="title-info">
        <DittoComponent componentId="onboarding.profile.id-disclaimer-sample" />
      </p>
      <form>
        <label>
          <DittoComponent componentId="input.first-name.label-sample" />
        </label>
        <input
          type="text"
          value={appData.firstName}
          onChange={(e) => {
            appData.setFirstName(e.target.value);
          }}
        />
        <label>
          <DittoComponent componentId="input.middle-name.label-sample" />
        </label>
        <p className="label-info">
          <DittoComponent componentId="input.middle-name.helper-text-sample" />
        </p>
        <input type="text" />
        <label>
          <DittoComponent componentId="input.last-name.label-sample" />
        </label>
        <input type="text" />
        <label>
          <DittoComponent componentId="input.birthday.label-sample" />
        </label>
        <p className="label-info">
          <DittoComponent componentId="input.birthday.helper-text-sample" />
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
          <DittoComponent componentId="onboarding.cta.next-sample" />
        </button>
        <p className="login-signup-text">
          <span>
            <DittoComponent componentId="onboarding.sign-up.login-message-sample" />
          </span>
          <a href="/login">Login</a>
        </p>
      </div>
    </>
  );
}

export default TellUsAboutYou;
