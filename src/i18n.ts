import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import source from "./ditto";

export const localeOptions = [
  {
    label: "English",
    value: "base",
  },
  {
    label: "Portuguese",
    value: "portuguese---br-sample",
  },
];

async function init() {
  const resources: any = {};
  for (const localeOption of localeOptions) {
    resources[localeOption.value] = {
      translation: source["ditto_component_library"][localeOption.value],
    };
  }

  i18n.use(initReactI18next).init({
    fallbackLng: localeOptions[0].value,
    debug: true,
    resources,
  });
}

init();

export default i18n;
