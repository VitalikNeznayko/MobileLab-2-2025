import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainView from "../components/MainView";

export default function UserProfile({ toggleTheme, isDarkMode }) {
  return (
    <MainView>
      <TouchableOpacity onPress={() => toggleTheme()}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </MainView>
  );
}
