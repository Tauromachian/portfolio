export const changeLocale = (i18n) => {
  i18n.locale === "en" ? (i18n.locale = "es") : (i18n.locale = "en");
};
