const styled = require('styled-components').default;

export const Container = styled.div`
  min-height: calc(100vh - 54px);
  width: 100vw;
`;

export const AboutSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSectionInner = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-wrap: ${(props) => props.reverse ? 'wrap-reverse' : 'wrap'};
    padding: 60px 20px;
    padding-top:
  }
`;

export const StyledHr = styled.hr`
  border-top: 4px solid;
`;

export const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Div = styled.div`
  padding: 10px;
  text-align: justify;
  text-justify: inter-word;
`;

export const Divider = styled.div`
  position:absolute;
  left:50%;
  top:10%;
  bottom:10%;
  border-left:1px solid black;
`;

export const Github = styled.p`
  width: 100px;
  height: 82px;
  background: url(/src/containers/About/github.svg);
  background-size: 100px 82px;
`;
