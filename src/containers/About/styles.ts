const styled = require('styled-components').default;

export const Container = styled.div`
  min-height: calc(100vh - 54px);
  width: 100vw;
  display: flex;
`;

export const AboutSection = styled.section`
  width: 100%;
  background: ${(props) => props.background}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSectionInner = styled.div`
  padding: 60px 120px;
  flex-grow: 1;
`;
