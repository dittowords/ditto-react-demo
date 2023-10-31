import { DittoComponent } from "ditto-react";
import { useLocation } from "wouter";

function ShieldSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M7.46 1.40669L2.79333 3.48002C2.31333 3.69335 2 4.17335 2 4.70002V7.83335C2 11.5334 4.56 14.9934 8 15.8334C11.44 14.9934 14 11.5334 14 7.83335V4.70002C14 4.17335 13.6867 3.69335 13.2067 3.48002L8.54 1.40669C8.2 1.25335 7.8 1.25335 7.46 1.40669ZM8 8.49335H12.6667C12.3133 11.24 10.48 13.6867 8 14.4534V8.50002H3.33333V4.70002L8 2.62669V8.49335Z"
        fill="#A1A1A1"
      />
    </svg>
  );
}

function BankLinking() {
  const [, setLocation] = useLocation();

  return (
    <>
      <h1>
        <DittoComponent componentId="onboarding.link-bank.header-sample" />
      </h1>
      <p className="title-info">
        <DittoComponent componentId="onboarding.link-bank.h2-sample" />
      </p>
      <form>
        <label>
          <DittoComponent componentId="cards.label.card-number-sample" />
        </label>
        <input type="text" />
        <label>
          <DittoComponent componentId="cards.label.expiration-sample" />
        </label>
        <input type="text" placeholder="MM/YY" />
        <label>
          <DittoComponent componentId="input.cvv.label-sample" />
        </label>
        <input type="text" className="hide-text" placeholder="***" />
        <label>
          <DittoComponent componentId="input.zip-code.label-sample" />
        </label>
        <input type="text" />
        <p className="bank-details-info">
          <ShieldSvg />
          <span>
            <DittoComponent
              componentId="onboarding.link-bank.disclaimer-sample"
              variables={{ nmlsId: 551219 }}
            />
          </span>
        </p>
      </form>
      <div className="bottom-cta">
        <div className="bank-linking-buttons">
          <button
            className="skip-button"
            onClick={() => {
              setLocation("/account-details");
            }}
          >
            <DittoComponent componentId="onboarding.cta.skip-sample" />
          </button>
          <button
            className="next-button"
            onClick={() => {
              setLocation("/account-details");
            }}
          >
            <DittoComponent componentId="onboarding.cta.next-sample" />
          </button>
        </div>
        <p
          className="back"
          onClick={() => {
            setLocation("/verification-code");
          }}
        >
          <DittoComponent componentId="onboarding.cta.back-sample" />
        </p>
      </div>
    </>
  );
}

export default BankLinking;
