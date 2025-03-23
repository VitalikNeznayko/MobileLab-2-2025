import React from "react";
import NewsView from "../components/NewsView";
import SelectTab from "../components/SelectTab";
import GuardCode from "../components/GuardCode";
import styled from "styled-components/native";
import ExpandableButton from "../components/ExpandableButton";
import { ScrollView } from "react-native";
export default function Safety() {
  return (
    <NewsView>
      <ScrollView>
        <Container>
          <SelectTab tabList={["Guard", "Confirmations"]}></SelectTab>
        </Container>
        <GuardCode></GuardCode>
        <Container>
          <RegularText>
            You’ll enter your code each time you enter your password to sign in
            to your Steam account.
          </RegularText>
          <TipText>
            Tip: If you don't share your PC, you can select "Remember my
            password" when you sign in to the PC client to enter your password
            and authenticator code less often.
          </TipText>
        </Container>
        <ContainerBtn>
          <ExpandableButton
            title="Remove Authenticator"
            info="Some text"
          ></ExpandableButton>
          <ExpandableButton
            title="My Recovery Code"
            info="Some text"
          ></ExpandableButton>
          <ExpandableButton title="Help" info="Some text"></ExpandableButton>
        </ContainerBtn>
      </ScrollView>
    </NewsView>
  );
}
const baseTextStyle = `
  font-family:"ABeeZee-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
`;
const Container = styled.View`
  padding: 0 20px;
`;
const ContainerBtn = styled.View`
  padding: 0 20px;
  margin-top: 30px;
`;
const RegularText = styled.Text`
  ${baseTextStyle}
  color: ${(props) => props.theme.text};
  margin-top: 20px;
`;
const TipText = styled.Text`
  ${baseTextStyle}
  color: #2FB4F1;
  margin-top: 14px;
`;
