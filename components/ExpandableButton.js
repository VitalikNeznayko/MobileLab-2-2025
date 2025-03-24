import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const ExpandableButton = ({ title, info, toggleTheme = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleInfo = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Container>
      <StyledButton onPress={toggleInfo}>
        <ButtonText>{title}</ButtonText>
        <ButtonActive>{isVisible ? "^" : ">"}</ButtonActive>
      </StyledButton>

      {isVisible &&
        (info != "" ? (
          <ExpandedInfo>
            <ButtonText>{info}</ButtonText>
          </ExpandedInfo>
        ) : (
          <ThemedPress onPress={toggleTheme}>
            <ButtonText>Click on me to change theme</ButtonText>
          </ThemedPress>
        ))}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;
const ButtonActive = styled.Text`
  font-family: "ABeeZee-Regular";
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.32px;
  color: rgb(96, 108, 123);
`;
const StyledButton = styled(TouchableOpacity)`
  width: 100%;
  height: 54px;
  border-width: 1px;
  border-color: #202532;
  background-color: ${(props) => props.theme.buttonOption};
  justify-content: space-between;
  padding: 16px 16px;
  flex-direction: row;
  align-items: center;
`;
const ThemedPress = styled(TouchableOpacity)`
  width: 100%;
  height: 54px;
  border-width: 1px;
  border-color: #202532;
  background-color: ${(props) => props.theme.expandedInfo};
  justify-content: space-between;
  padding: 16px 16px;
`;
const ButtonText = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.text};
`;

const ExpandedInfo = styled.View`
  width: 100%;
  height: 54px;
  border-width: 1px;
  border-color: #202532;
  background-color: ${(props) => props.theme.expandedInfo};
  justify-content: space-between;
  padding: 16px 16px;
`;

export default ExpandableButton;
