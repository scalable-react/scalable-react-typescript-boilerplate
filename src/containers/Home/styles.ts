const styled = require('styled-components').default;

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

export const Section = styled.section`
  padding: 60px;
  background-color: ${(props) => props.backgroundColor};
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  height: 100px;
`;

export const HeadingContainer = styled.div`
  padding: 20px;
`;

export const GetStartedButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
