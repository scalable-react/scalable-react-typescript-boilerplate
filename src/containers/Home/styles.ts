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

export const HeroLogo = styled.div`
  margin-bottom: 20px;
  justify-content: center;
  height: 100px;
  width: 100px;
  background: #007acc;
  color: white;
  font-size: 68px;
`;

export const HeroLogoRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadingContainer = styled.div`
  padding: 20px;
`;

export const GetStartedButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
