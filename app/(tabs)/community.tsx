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


export default function CommunityScreen() {
  return (

    <Container>
      <Title>준비중인 페이지 입니다</Title>
              </Container>

      
      
  );
}
