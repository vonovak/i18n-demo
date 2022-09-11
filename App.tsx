import { App } from "./src/App";
import { I18nProvider } from "@lingui/react";
import React from "react";
import { i18n } from "@lingui/core";

import { Platform, Text } from "react-native";

// list of intl apis on hermes https://hermesengine.dev/docs/intl/

if (Platform.OS === "ios") {
  require("@formatjs/intl-getcanonicallocales/polyfill");
  require("@formatjs/intl-locale/polyfill");
  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/locale-data/en");
  require("@formatjs/intl-pluralrules/locale-data/cs");
  require("@formatjs/intl-numberformat/polyfill");
  require("@formatjs/intl-numberformat/locale-data/en");
  require("@formatjs/intl-numberformat/locale-data/cs");
  require("@formatjs/intl-datetimeformat/polyfill");
  require("@formatjs/intl-datetimeformat/locale-data/en");
  require("@formatjs/intl-datetimeformat/locale-data/cs");
} else {
  const { shouldPolyfill } = require("@formatjs/intl-locale/should-polyfill");
  if (shouldPolyfill) {
    require("@formatjs/intl-locale/polyfill");
  }
  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/locale-data/en");
  require("@formatjs/intl-pluralrules/locale-data/cs");
}
import { en, cs } from "make-plural";
import * as Localization from "expo-localization";
import { messages } from "./src/locales/cs/messages";

const activeLocale = Localization.locale;

if (activeLocale.startsWith("en")) {
  const { messages } = require("./src/locales/en/messages.js");

  i18n.load({
    [activeLocale]: messages,
  });
  i18n.loadLocaleData(activeLocale, { plurals: en });
} else if (activeLocale.startsWith("cs")) {
  const { messages } = require("./src/locales/cs/messages.js");

  i18n.load({
    [activeLocale]: messages,
  });
  i18n.loadLocaleData(activeLocale, { plurals: cs });
}

i18n.activate(activeLocale);

const Root = () => {
  return (
    <I18nProvider
      i18n={i18n}
      defaultComponent={({ translation }) => <Text>{translation}</Text>}
    >
      <App />
    </I18nProvider>
  );
};

export default Root;
