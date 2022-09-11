import React from "react";
import { ScrollView, View } from "react-native";
import { LinguiComponent } from "./LinguiComponent";
import { I18NextComponent } from "./i18NextComponent";
import { FbtComponent } from "./FbtComponent";

export function App() {
  const numOfPeopleWatching = 2;

  return (
    <ScrollView
      contentContainerStyle={{ margin: 15, flexGrow: 1, marginTop: 40 }}
    >
      <FbtComponent numOfPeopleWatching={numOfPeopleWatching} />
      <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
      <LinguiComponent numOfPeopleWatching={numOfPeopleWatching} />
      <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
      <I18NextComponent numOfPeopleWatching={numOfPeopleWatching} />
    </ScrollView>
  );
}
