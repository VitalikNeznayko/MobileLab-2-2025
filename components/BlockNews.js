import React, { useState } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import initialNews from "../assets/initialNews";
import { GetIcon } from "../utils/LoadIcons";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import UUID from "react-native-uuid";

const BlockNews = () => {
  const theme = useTheme();
  const [News, setNews] = useState(initialNews);

  const loadMoreNews = () => {
    const moreNews = initialNews.map((news, index) => ({
      ...news,
      news: `${game.news}`,
    }));
    setNews((prevNews) => [...prevNews, ...moreNews]);
  };

  const renderGameItem = ({ item }) => (
    <ScrollView>
      <Strip></Strip>
      <BlockNew>
        <UserInfo>
          <Author>
            <Image source={item.iconUser} />
            <UserCon>
              <NameCon>
                <User>{item.user}</User>
                <TagNews>
                  <TagNewsText>News</TagNewsText>
                </TagNews>
              </NameCon>
              <Date>{item.date}</Date>
            </UserCon>
          </Author>
          <AdditionalInfo>···</AdditionalInfo>
        </UserInfo>
        <View>
          <ImgNew source={item.image} />
        </View>
        <View>
          <TitleNews>{item.title}</TitleNews>
          <DescriptionNews>{item.description}</DescriptionNews>
        </View>
        <SmallStrip></SmallStrip>
        <СonInteract>
          <SocialActions>
            {GetIcon("Like", 18, "transparent", "transparent")}
            <CountLike>{item.countLike}</CountLike>
            {GetIcon("Message", 16, "transparent", "transparent")}
            <CountMess>{item.countMess}</CountMess>
          </SocialActions>
          <View>{GetIcon("Share", 20, "transparent", "transparent")}</View>
        </СonInteract>
      </BlockNew>
    </ScrollView>
  );

  return (
    <FlatList
      data={News}
      renderItem={renderGameItem}
      keyExtractor={() => UUID.v4()}
      onEndReached={loadMoreNews}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default BlockNews;

const Strip = styled.View`
  width: 100%;
  height: 8px;
  color: white;
  background-color: ${(props) => props.theme.strip};
`;
const SmallStrip = styled.View`
  width: 100%;
  height: 1px;
  color: white;
  background-color: #303649;
  margin: 12px 0;
`;
const СonInteract = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const SocialActions = styled.View`
  flex-direction: row;
`;
const CountLike = styled.Text`
  font-family: "PingFang-SC-Regular";
  color: #00d44b;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.15px;
  margin: 0 36px 0 8px;
`;
const CountMess = styled.Text`
  font-family: "PingFang-SC-Regular";
  color: #4b5664;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.15px;
  margin-left: 8px;
`;
const Author = styled.View`
  flex-direction: row;
`;
const TitleNews = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 8px;
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.text};
`;
const DescriptionNews = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.28px;
  color: #7b8d9d;
`;
const User = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.text};
`;
const Date = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #7b8d9d;
`;
const UserCon = styled.View`
  margin-left: 9px;
`;
const NameCon = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TagNews = styled.View`
  width: 32px;
  height: 14px;
  background-color: #b63db6;
  border-radius: 3px;
  margin-left: 10px;
  align-items: center;
`;
const TagNewsText = styled.Text`
  font-family: "PingFang-SC-Regular";
  font-weight: 300;
  font-size: 10px;
  color: white;
`;
const AdditionalInfo = styled.Text`
  font-size: 30px;
  letter-spacing: -0.7px;
  color: #4b5664;
`;
const BlockNew = styled.ScrollView`
  padding: 16px 20px;
`;
const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ImgNew = styled.Image`
  width: 350px;
  height: 186px;
  border-radius: 8px;
  margin-bottom: 15px;
`;
