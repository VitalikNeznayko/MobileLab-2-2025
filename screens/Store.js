import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import MainView from "../components/MainView";
import GameList from "../components/GameList";
import { TabList } from "../components/TabList";

export default function Store() {
  return (
    <MainView>
      <TabList
        tabList={["Top Sellers", "Free to play", "Early Access", "Action"]}
      ></TabList>
      {/* <GameList></GameList> */}
    </MainView>
  );
}

