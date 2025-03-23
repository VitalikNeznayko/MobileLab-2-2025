import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainView from "../components/MainView";
import ExpandableButton from "../components/ExpandableButton";
import styled, { useTheme } from "styled-components/native";

export default function UserProfile({ toggleTheme, isDarkMode }) {
  const theme = useTheme();
  return (
    <MainView>
      <ContainerAvatar>
        <ImgBg source={require("../assets/Icon/Users/MyAvatar.png")}>
          <ActiveStatus></ActiveStatus>
        </ImgBg>
        <Name>Незнайко Віталій</Name>
        <Name>ВТк-24-1</Name>
      </ContainerAvatar>
      <View>
        <ExpandableButton
          title="Settings"
          info=""
          toggleTheme={toggleTheme}
        ></ExpandableButton>
        <ExpandableButton title="Logout" info="No ;)" toggleTheme=""></ExpandableButton>
      </View>
    </MainView>
  );
}
const ActiveStatus = styled.View`
  width: 26px;
  height: 26px;
  background-color: #00d44b;
  border-width: 2px;
  border-color: #1c202c;
  border-radius: 50px;
`;
const ContainerAvatar = styled.ImageBackground`
  padding-top: 69px;
  justify-content: center;
  align-items: center;
  margin-bottom: 27px;
`;
const Name = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.18px;
  color: ${(props) => props.theme.text};
`;
const ImgBg = styled.ImageBackground`
  width: 98px;
  height: 98px;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 6px;
`;
