import React from "react";
import { Alert, Button, Text, View } from "react-native";
import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";
import "./i18n";
import { useLingui } from "@lingui/react";

export type I18NextComponentProps = {
  numOfPeopleWatching: number;
};

export const I18NextComponent = ({
  numOfPeopleWatching,
}: I18NextComponentProps) => {
  const { i18n: i18nLingui } = useLingui();
  const {
    i18n: { language: activeLang },
  } = useTranslation();
  const newLocale = activeLang === "en" ? "cs" : "en";

  const { t } = useTranslation();
  const time = new Intl.DateTimeFormat(activeLang, {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date());

  return (
    <View style={style}>
      <Text>i18Next</Text>
      <Text>{t("homescreen.heading", "Welcome to React Native EU 2022")}</Text>
      <Text>
        {t("peopleWatchingCount", {
          count: numOfPeopleWatching,
          defaultValue: "You have one person watching",
          defaultValue_other: "You have count people watching",
        })}
      </Text>
      <Text>
        {t("homescreen.greeting", {
          time,
          // defaultValue: "What a great conf! This talk starts at {{time}}",
        })}
      </Text>
      <Text style={{ fontSize: 20 }}>
        <Trans i18nKey={"homescreen.metaStockPrice"}>
          <Text>META stock </Text>
          <Text style={{ color: "green" }}>went up</Text>
          <Text style={{ fontWeight: "bold" }}> today!</Text>
        </Trans>
      </Text>

      {/*<Button*/}
      {/*  title={"toggle language to " + newLocale}*/}
      {/*  onPress={() => {*/}
      {/*    {*/}
      {/*      i18next.changeLanguage(newLocale, (err) => {*/}
      {/*        if (err) {*/}
      {/*          Alert.alert(*/}
      {/*            "",*/}
      {/*            "An error has occurred while setting the requested language."*/}
      {/*          );*/}
      {/*        }*/}
      {/*      });*/}
      {/*    }*/}
      {/*    {*/}
      {/*      const activeLang = i18nLingui.locale;*/}
      {/*      const newLocale = activeLang === "en" ? "cs" : "en";*/}
      {/*      i18nLingui.activate(newLocale);*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  );
};
const style = {
  flex: 1,
  justifyContent: "space-around",
} as const;
