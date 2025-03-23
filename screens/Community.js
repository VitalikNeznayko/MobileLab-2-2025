import React from "react";
import NewsView from "../components/NewsView";
import { TabList } from "../components/TabList";
import styled from "styled-components/native";
import BlockNews from "../components/BlockNews";
import { View } from "react-native";

export default function Community() {
  return (
    <NewsView>
      <DescriptionText>
        Community and official content for all games and software
      </DescriptionText>
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 16
        }}
      >
        <TabList
          tabList={["Search", "All", "Screenshots", "Artwork", "Workshop"]}
        ></TabList>
      </View>
      <BlockNews></BlockNews>
    </NewsView>
  );
}

const DescriptionText = styled.Text`
  width: 340px;
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.15px;
  color: #7b8d9d;
  margin: 6px 0 21px 0;
  padding: 0 20px;
`;
