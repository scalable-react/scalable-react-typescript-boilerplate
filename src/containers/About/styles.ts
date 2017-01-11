const styled = require('styled-components').default;

export const Container = styled.div`
  min-height: calc(100vh - 54px);
  width: 100vw;
  display: flex;
`;

export const AboutSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSectionInner = styled.div`
  padding: 30px 60px;
  flex-grow: 1;
`;

export const StyledHr = styled.hr`
  border-top: 4px solid;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 60px;
`;
