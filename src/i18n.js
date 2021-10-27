import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const localeOptions = [
  {
    label: "English",
    value: "base",
  },
  {
    label: "Español",
    value: "spanish",
  },
];

const resources = localeOptions.reduce(
  (agg, option) => ({
    ...agg,
    [option.value]: {
      translation: require(`./imports/${option.value}.json`),
    },
  }),
  {}
);

i18n.use(initReactI18next).init({
  fallbackLng: localeOptions[0].value,
  debug: true,
  resources,
});

export default i18n;
