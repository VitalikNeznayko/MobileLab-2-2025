import React, {useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Themes";
import MainTabs from "./components/MainTabs";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
    "PlayfairDisplay-VariableFont_wght": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    "PingFang-SC-Regular": require("./assets/fonts/PingFang-SC-Regular.ttf"),
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
  });
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false); 

  useEffect(() => {
    loadFonts()
      .then(() => setFontsLoaded(true)) 
      .catch((error) => console.error(error));
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <NavigationContainer>
        <MainTabs toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
