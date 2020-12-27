import React from "react";
import { IntlProvider } from "react-intl";

import messagesPl from "../translations/pl.json";
import messagesEn from "../translations/en.json";

const messages = {
  en: messagesEn,
  pl: messagesPl,
};
const DEFAULT_LANG = "pl";

const LanguageService = ({ children, currentLang }) => {
  const locale = Object.keys(messages).includes(currentLang)
    ? currentLang
    : DEFAULT_LANG;
  const localeMessages = messages[locale];

  return (
    <IntlProvider
      locale={locale}
      messages={localeMessages}
      defaultLocale={DEFAULT_LANG}
    >
      {children}
    </IntlProvider>
  );
};

export default LanguageService;
