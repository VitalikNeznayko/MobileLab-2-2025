import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import initialGames from "../assets/initialGames";
import { GetIcon } from "../utils/LoadIcons";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import UUID from "react-native-uuid";

const GameList = () => {
  const theme = useTheme();
  const [games, setGames] = useState(initialGames);

  const loadMoreGames = () => {
    const moreGames = initialGames.map((game, index) => ({
      ...game,
      name: `${game.name}`,
    }));
    setGames((prevGames) => [...prevGames, ...moreGames]);
  };

  const renderGameItem = ({ item }) => (
    <ElementList>
      <FdRow>
        <ImgGame source={item.image} />
        <GameInfo>
          <GameTitle>{item.name}</GameTitle>
          <ConOs>
            {item.platform.split(", ").map((platform, index) => (
              <React.Fragment key={index}>
                {GetIcon(platform, 12, "transparent", "transparent")}
              </React.Fragment>
            ))}
            {item.platform}
          </ConOs>
        </GameInfo>
      </FdRow>
      <View>
        {item.discount > 0 ? (
          <View>
            <FdRow>
              <PreviousText>${item.previousPrice}</PreviousText>
              <PriceText>${item.price}</PriceText>
            </FdRow>
            <DiscountBlock>
              <DiscountText>-{item.discount}%</DiscountText>
            </DiscountBlock>
          </View>
        ) : (
          <PriceText>${item.price}</PriceText>
        )}
      </View>
    </ElementList>
  );

  return (
    <FlatList
      data={games}
      renderItem={renderGameItem}
      keyExtractor={() => UUID.v4()}
      onEndReached={loadMoreGames}
      showsVerticalScrollIndicator={false}
    />
  );
};

const baseTextStyle = `
  font-family: "PingFang-SC-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.28px;
  color: #7b8d9d;
`;

const ConOs = styled.Text`
  ${baseTextStyle}
  transform: translateX(6px);
`;

const PriceText = styled.Text`
  font-family: "PingFang-SC-Regular";
  font-weight: 300;
  font-size: 17px;
  line-height: 18px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.text};
`;

const PreviousText = styled.Text`
  ${baseTextStyle}
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.13px;
  text-decoration: line-through;
  color: ${(props) => props.theme.text};
  margin-right: 6px;
`;

const DiscountBlock = styled.View`
  width: 41px;
  height: 22px;
  border-radius: 4px;
  background-color: #00d44b80;
  align-items: center;
  justify-content: center;
  margin-left: 17px;
`;

const DiscountText = styled.Text`
  font-family: "PingFang-SC-Regular";
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.13px;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;
const GameInfo = styled.View`
  margin-left: 14px;
`;

const GameTitle = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.text};
  margin-bottom: 2px;
`;

const FdRow = styled.View`
  flex-direction: row;
`;

const ElementList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const ImgGame = styled.Image`
  border-radius: 8px;
`;

export default GameList;
