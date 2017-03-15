import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

interface FeaturesSectionProps {
  background: string
}

export const FeaturesSection = styled.section`
  width: 100%;
  background: ${(props: FeaturesSectionProps) => props.background}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface FeatureSectionInnerProps {
  reverse?: boolean;
}
export const FeatureSectionInner = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  padding: 60px 120px;
  @media screen and (max-width: 768px) {
    flex-wrap: ${(props: FeatureSectionInnerProps) => props.reverse ? 'wrap-reverse' : 'wrap'};
    padding: 60px 20px;
    padding-top:
  }
`;

export const Feature = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  margin: 20px;
  min-width: 300px;
  @media screen and (max-width: 768px) {
    max-width: 100vw !important;
    flex-basis: 100%;
  }
`;

export const Card = styled.div`
  max-width: 540px;
  h1 {
    margin-top: 0 !important;
  }
`;

export const FeatureImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px;
`;
