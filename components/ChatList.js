import React, { useState } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import initialChat from "../assets/initialChat";
import { GetIcon } from "../utils/LoadIcons";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import UUID from "react-native-uuid";
import { ImageBackground } from "react-native";

const ChatList = () => {
  const theme = useTheme();
  const [message, setMessage] = useState(initialChat);

  const loadMoreMessage = () => {
    const moreMessage = initialChat.map((message, index) => ({
      ...message,
      user: `${message.user}`,
    }));
    setMessage((prevMessage) => [...prevMessage, ...moreMessage]);
  };

  const renderMessageItem = ({ item }) => (
    <MessageBlock>
      <ImgUser source={item.iconUser}>
        {item.active !== "" ? (
          <ActiveStatus
            style={{
              backgroundColor: item.active !== "" ? item.active : "transparent",
            }}
          ></ActiveStatus>
        ) : (
          <></>
        )}
      </ImgUser>
      <ContainerMessage>
        <MessageContent>
          <User>{item.userName}</User>
          <Message>
            {item.userWrite ? item.message : `You: ${item.message}`} •{" "}
            {item.date}
          </Message>
        </MessageContent>
        <View>
          {!item.read &&
            (item.userWrite ? (
              <YouNotReadMess>
                <Text>{item.countNoReadMessage}</Text>
              </YouNotReadMess>
            ) : (
              <YourMessUnread></YourMessUnread>
            ))}
        </View>
      </ContainerMessage>
    </MessageBlock>
  );

  return (
    <FlatList
      data={message}
      renderItem={renderMessageItem}
      keyExtractor={() => UUID.v4()}
      onEndReached={loadMoreMessage}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ChatList;

const YouNotReadMess = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #31bcfc;
  align-items: center;
  margin-bottom: 7px;
`;
const YourMessUnread = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.text};
  margin-right: 5px;
`;
const ImgUser = styled.ImageBackground`
  width: 52px;
  height: 53px;
  justify-content: flex-end;
  align-items: flex-end;
`;
const ActiveStatus = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 50px;
`;
const MessageBlock = styled.View`
  flex-direction: row;
  height: 72px;
`;
const ContainerMessage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const Message = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.15px;
  color: #7b8d9d;
  margin-bottom: 10px;
`;
const User = styled.Text`
  font-family: "ABeeZee-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.18px;
  color: ${(props) => props.theme.text};
  margin-bottom: 4px;
`;
const MessageContent = styled.View`
  margin-left: 11px;
`;
