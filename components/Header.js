import React from "react";
import { GetIcon } from "../utils/LoadIcons";
import styled from "styled-components/native";
import { useTheme } from "styled-components";

export const HeaderWithSearch = ({ caption }) => {
  const theme = useTheme();
  return (
    <HeaderView>
      <HeaderTitle>
        {GetIcon("Steam", 36, "none", theme.text)}
        <TextCaption>{caption}</TextCaption>
      </HeaderTitle>
      {GetIcon("Search", 18, "transparent", "transparent")}
    </HeaderView>
  );
};

export const HeaderWithoutSearch = ({ caption }) => {
  const theme = useTheme();
  return (
    <HeaderView>
      <HeaderTitle>
        {GetIcon("Steam", 36, "", theme.text)}
        <TextCaption>{caption}</TextCaption>
      </HeaderTitle>
    </HeaderView>
  );
};

const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 20px 0 20px;
  margin-top: 0px;
  background-color: ${(props) => props.theme.background};
  align-items: center;
`;

const HeaderTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TextCaption = styled.Text`
  margin-left: 10px;
  font-family: "ABeeZee-Regular";
  color: ${(props) => props.theme.text};
  font-weight: 400;
  font-size: 28px;
  line-height: 39px;
  letter-spacing: -0.48px;
`;
