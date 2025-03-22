import styled from "styled-components/native";

const MainView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export default MainView;
