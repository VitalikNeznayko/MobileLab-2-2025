import React from "react";
import MainView from "../components/MainView";
import GameList from "../components/GameList";
import { TabList } from "../components/TabList";
import { ScrollGame } from "../components/ScrollGame";

export default function Store() {
  return (
    <MainView>
      <ScrollGame></ScrollGame>
      <TabList
        tabList={["Top Sellers", "Free to play", "Early Access", "Action"]}
      ></TabList>
      <GameList></GameList>
    </MainView>
  );
}
