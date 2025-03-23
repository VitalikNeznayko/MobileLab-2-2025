import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress"; // Importing Progress from the library
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient"; // Імпорт LinearGradient

const generateCode = () =>
  Math.random().toString(36).substring(2, 7).toUpperCase();

const GuardCode = () => {
  const [progress, setProgress] = useState(1);
  const [code, setCode] = useState(generateCode());

  useEffect(() => {
    let interval;
    if (progress > 0) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress - 0.01;
          if (newProgress <= 0) {
            setCode(generateCode());
            setProgress(1);
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <ImgBg source={require("../assets/SafetyBackground.png")}>
      <TopGradient>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0)"]}
          style={{ flex: 1 }}
        />
      </TopGradient>
      <Container>
        <DescText>Logged in as player</DescText>
        <CodeText>{code}</CodeText>
        <ProgressBarContainer>
          <Progress.Bar
            progress={progress}
            width={157}
            height={7}
            borderRadius={7}
            color="#31BCFC"
            borderWidth={0}
            unfilledColor="#1C202C"
          />
        </ProgressBarContainer>
      </Container>
    </ImgBg>
  );
};

export default GuardCode;

const ImgBg = styled.ImageBackground`
  flex: 1;
  max-height: 167px;
  align-items: center;
  padding: 20px;
`;

const TopGradient = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 20%;
  z-index: 1;
`;

const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px;
  z-index: 2;
`;
const DescText = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.15px;
  color: #7b8d9d;
  margin-bottom: 4px;
`;
const CodeText = styled.Text`
  font-family: "Gilroy-Bold";
  font-weight: 700;
  font-size: 54px;
  letter-spacing: 5.52px;
  color: white;
`;

const ProgressBarContainer = styled.View`
  align-items: center;
  width: 100%;

`;
