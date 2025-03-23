import styled from "styled-components/native";
import React, { useState } from "react";
import { GetIcon } from "../utils/LoadIcons";

export const SelectTab = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer>
      {tabList.map((tab) => (
        <Tab
          key={tab}
          selected={activeTab === tab}
          onPress={() => handleTabPress(tab)}
        >
          <TabText selected={activeTab === tab}>
            {GetIcon(tab, 16, "transparent", "transparent") || tab}
          </TabText>
        </Tab>
      ))}
    </TabsContainer>
  );
};
export default SelectTab;
const TabsContainer = styled.View`
  margin: 20px 0;
  width: 100%;
  height: 34px;
  background-color: ${(props) => props.theme.selectListDeactive};
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

const Tab = styled.TouchableOpacity`
  width: 50%;
  height: 30px;
  border-radius: 7px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.selected
      ? props.theme.selectListActive
      : props.theme.selectListDeactive};
  align-items: center;
  justify-content: center;
`;

const TabText = styled.Text`
  font-family: "PingFang-SC-Regular";
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  color: ${(props) => (props.selected ? props.theme.text : "#7B8D9D")};
`;
