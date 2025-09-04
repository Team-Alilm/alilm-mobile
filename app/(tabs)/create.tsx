import { Text, View } from "react-native";
import styled from 'styled-components';


const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled(Text)`
  color: white;
  font-size: 18px;
`;


export default function AdditionScreen() {
  return (

    <Container>
      <Title>준비중인 페이지 입니다</Title>
      <Title>URL 입력하고 하는 곳</Title>
    </Container>

      
      
  );
}
