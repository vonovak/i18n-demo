import React from "react";
import { Text, View } from "react-native";
import fbt from "fbt";
import * as Localization from "expo-localization";
console.log({ fbt });

export type FbtComponentProps = {
  numOfPeopleWatching: number;
};

export const FbtComponent = ({ numOfPeopleWatching }: FbtComponentProps) => {
  const timeOfStart = new Intl.DateTimeFormat(Localization.locale, {
    hour: "numeric",
    minute: "numeric",
  }).format(Date.parse("2022-09-02T16:35:00"));

  return (
    <View style={style}>
      <Text>fbt</Text>
      <Text>
        <fbt desc="label">Welcome to React Native EU</fbt>
      </Text>
      <Text>
        <fbt desc="plural example">
          You have
          <fbt:plural
            count={numOfPeopleWatching}
            name="number of people"
            showCount="yes"
            many="people"
          >
            person
          </fbt:plural>
          watching
        </fbt>
      </Text>
      <Text>
        <fbt desc="date interpolation">
          What a great conf! This talk starts at
          <fbt:param name="startTime">{timeOfStart}</fbt:param>.
        </fbt>
      </Text>

      <Text style={{ fontSize: 20 }}>
        <fbt desc="complex sentence">
          <Text>META stock</Text>{" "}
          <Text style={{ color: "green" }}>went up</Text>{" "}
          <Text style={{ fontWeight: "bold" }}> today!</Text>
        </fbt>
      </Text>
    </View>
  );
};
const style = {
  flex: 1,
  justifyContent: "space-around",
} as const;
