import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import source from "./ditto";

export const localeOptions = [
  {
    label: "English",
    value: "base",
  },
  {
    label: "Portuguese (BR)",
    value: "portuguesebr",
  },
  {
    label: "French",
    value: "french",
  },
  {
    label: "Spanish",
    value: "spanish",
  }
];

async function init() {
  console.log('----localeOptions', localeOptions);
  const resources: any = {};
  for (const localeOption of localeOptions) {
    resources[localeOption.value] = {
      translation: source[localeOption.value],
    };
  }

  i18n.use(initReactI18next).init({
    fallbackLng: localeOptions[0].value,
    debug: true,
    resources,
  });

  console.log(resources)
}

init();

export default i18n;
