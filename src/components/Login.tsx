import { DittoComponent } from "ditto-react";

function Login() {
  return (
    <>
      <h1 className="login-title">Log in</h1>
      <form>
        <label>
          <DittoComponent componentId="input.email.label-sample" />
        </label>
        <input type="text" placeholder="name@company.com" />
        <label>
          <DittoComponent componentId="input.password.label-sample" />
        </label>
        <input type="text" className="hide-text" placeholder="**************" />
      </form>
      <p className="forgot-password">
        <DittoComponent componentId="onboarding.cta.forgot-password-sample" />
      </p>
      <div className="bottom-cta">
        <button>Log in</button>
        <p className="login-signup-text">
          <span>
            <DittoComponent componentId="onboarding.log-in.sign-up-message-sample" />
          </span>
          <a href="/">
            <DittoComponent componentId="onboarding.sign-up.cta-sample" />
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;
