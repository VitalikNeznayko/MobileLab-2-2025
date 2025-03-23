import styled from "styled-components/native";

const MainView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 20px;
`;

export default MainView;
