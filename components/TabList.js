import styled from "styled-components/native";
import React, { useState } from "react";
import { GetIcon } from "../utils/LoadIcons";

export const TabList = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(tabList[1]);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer horizontal showsHorizontalScrollIndicator={false}>
      {tabList.map((tab) => (
        <Tab
          key={tab}
          selected={activeTab === tab}
          onPress={() => handleTabPress(tab)}
        >
          <TabText>
            {GetIcon(tab, 16, "transparent", "transparent") || tab}
          </TabText>
        </Tab>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.ScrollView`
  flex-direction: row;
  margin-bottom: 10px;
`;

const Tab = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.selected ? props.theme.tabListActive : props.theme.tabList};
  padding: 12px 18px;
  border-radius: 12px;
  margin-right: 10px;
`;

const TabText = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  color: ${(props) => props.theme.text};
`;
