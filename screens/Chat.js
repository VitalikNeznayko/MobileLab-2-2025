import React from "react";
import MainView from "../components/MainView";
import ChatList from "../components/ChatList";
import SelectTab from "../components/SelectTab";

export default function Chat() {
  return (
    <MainView>
      <SelectTab tabList={["Open chats", "My friends"]}></SelectTab>
      <ChatList></ChatList>
    </MainView>
  );
}
