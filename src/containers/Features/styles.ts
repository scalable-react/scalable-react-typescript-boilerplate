const styled = require('styled-components').default;

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

export const FeaturesSection = styled.section`
  width: 100%;
  background: ${props => props.background}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeatureSectionInner = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  padding: 60px 120px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Feature = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Card = styled.div`
  max-width: 540px;
`;

export const FeatureImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px;
`;
