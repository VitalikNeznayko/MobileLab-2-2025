import React, { useState } from "react";
import initialScrollGames from "../assets/initialScrollGames";
import { ScrollView, Text, View, ImageBackground } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { GetIcon } from "../utils/LoadIcons";

export const ScrollGame = () => {
  const theme = useTheme();
  const [games, setGames] = useState(initialScrollGames);

  return (
    <ScrollGames horizontal showsHorizontalScrollIndicator={false}>
      {games.map((item, index) => (
        <ContainerFullGame key={index}>
          <ImgBg
            source={item.image}
            imageStyle={{
              resizeMode: "cover",
              borderRadius: 12,
              marginRight: 10,
            }}
          >
            <Container>
              <View>
                <GameTitle>{item.name}</GameTitle>
                <DescriptionText>{item.description}</DescriptionText>
                <ConPriceOS>
                  {item.discount > 0 ? (
                    <ConPrice>
                      <DiscountBlock>
                        <DiscountText>-{item.discount}%</DiscountText>
                      </DiscountBlock>
                      <PriceBlock>
                        <PreviousText>${item.previousPrice}</PreviousText>
                        <PriceText>${item.price}</PriceText>
                      </PriceBlock>
                    </ConPrice>
                  ) : (
                    <PriceText>${item.price}</PriceText>
                  )}
                  <ConOs>
                    {item.platform.split(", ").map((platform, index) => (
                      <React.Fragment key={index}>
                        {GetIcon(platform, 20, "transparent", "transparent")}
                      </React.Fragment>
                    ))}
                  </ConOs>
                </ConPriceOS>
              </View>
            </Container>
          </ImgBg>
        </ContainerFullGame>
      ))}
    </ScrollGames>
  );
};
const ScrollGames = styled.ScrollView`
  min-height: 230px;
  margin-bottom: 15px;
  margin-top: 30px;
`;
const ContainerFullGame = styled.View`
  margin-right: 10px;
`;
const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  height: 90px;
  padding: 0 0 0 10px;
`;
const PriceBlock = styled.View`
  width: 55px;
  height: 22px;
  flex-direction: row;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #000000a5;
  align-items: center;
  justify-content: center;
`;
const ConPriceOS = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ConPrice = styled.View`
  flex-direction: row;
`;
const ConOs = styled.View`
  transform: translateX(6px);
  flex-direction: row;
  align-text: center;
  margin-right: 10px;
`;
const ImgBg = styled.ImageBackground`
  width: 327px;
  height: 230px;
  overflow: hidden;
  justify-content: flex-end;
  padding: 10px;
`;
const PriceText = styled.Text`
  font-family: "PingFang-SC-Regular";
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.13px;
  text-transform: uppercase;
  color: #ffffff;
`;

const PreviousText = styled.Text`
  font-family: "PingFang-SC-Regular";
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.13px;
  text-transform: uppercase;
  text-decoration: line-through;
  color: #c1bcb5;
  margin-right: 4px;
`;

const DiscountBlock = styled.View`
  width: 40px;
  height: 22px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #00d44b80;
  align-items: center;
  justify-content: center;
`;

const DiscountText = styled.Text`
  font-family: "PingFang-SC-Regular";
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.13px;
  text-transform: uppercase;
  color: white;
`;
const DescriptionText = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.14px;
  color: lightgray;
`;
const GameTitle = styled.Text`
  font-family: "Gilroy-Bold";
  font-weight: 700;
  font-size: 20px;
  line-height: 39px;
  letter-spacing: -0.34px;
  color: white;
`;
