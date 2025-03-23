import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderWithoutSearch, HeaderWithSearch } from "./Header";
import { GetIcon } from "../utils/LoadIcons";
import Store from "../screens/Store";
import Community from "../screens/Community";
import Chat from "../screens/Chat";
import Safety from "../screens/Safety";
import UserProfile from "../screens/UserProfile";

const Tab = createBottomTabNavigator();

const MainTabs = ({ toggleTheme, isDarkMode }) => {
  return (
    <Tab.Navigator
      initialRouteName="Store"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return GetIcon(route.name, size, color, "transparent");
        },
        tabBarActiveTintColor: isDarkMode ? "white" : "blue",
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: isDarkMode ? "#12141C" : "white",
          borderTopWidth: 0,
          height: 70,
          paddingTop: 15,
        },
      })}
    >
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          header: () => <HeaderWithSearch caption="Store" />,
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          header: () => <HeaderWithoutSearch caption="Community" />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          header: () => <HeaderWithSearch caption="Chat" />,
        }}
      />
      <Tab.Screen
        name="Safety"
        component={Safety}
        options={{
          header: () => <HeaderWithoutSearch caption="Safety" />,
        }}
      />
      <Tab.Screen
        name="UserProfile"
        options={{ headerShown: false }}
        children={() => (
          <UserProfile toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        )}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
