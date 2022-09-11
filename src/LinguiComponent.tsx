import React from "react";
import { useLingui } from "@lingui/react";
import { Plural, t, Trans } from "@lingui/macro";
import { Text, View } from "react-native";

export type LinguiComponentProps = {
  numOfPeopleWatching: number;
};

export const LinguiComponent = ({
  numOfPeopleWatching,
}: LinguiComponentProps) => {
  const { i18n } = useLingui();
  const timeOfStart = new Intl.DateTimeFormat(i18n.locale, {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date());

  return (
    <View style={style}>
      <Text>LinguiJS</Text>
      <Text>{t`Welcome to React Native EU 2022`}</Text>
      <Plural
        value={numOfPeopleWatching}
        one="You have one person watching"
        other={`You have ${numOfPeopleWatching} people watching`}
      />
      <Trans id="homescreen.greeting" comment="comment for translator">
        What a great conf! This talk starts at {timeOfStart}
      </Trans>
      <Trans>
        <Text style={{ fontSize: 20 }}>
          <Text>META stock </Text>
          <Text style={{ color: "green" }}>went up</Text>
          <Text style={{ fontWeight: "bold" }}> today!</Text>
        </Text>
      </Trans>
    </View>
  );
};

const style = {
  flex: 1,
  justifyContent: "space-around",
} as const;
