import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 54px);
  width: 100vw;
`;

interface AboutSectionProps {
  padBottom?: boolean
}

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  padding-bottom: ${(props: AboutSectionProps) => props.padBottom ? 100 : 0}px;
`;

interface AboutSectionInnerProps {
  reverse?: boolean
}
export const AboutSectionInner = styled.div`
  padding: 30px 60px;
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-wrap: ${(props: AboutSectionInnerProps) => props.reverse ? 'wrap-reverse' : 'wrap'};
    padding: 60px 20px;
    margin-top: 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2.19492%;
  width: 28.5rem !important;
  box-sizing: border-box;
  background: whitesmoke;
  height: 36rem;
  border: 1px solid #dbe2e8;
  box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
  border-radius: 6px;
  transition: box-shadow 0.3s ease, border 0.3s ease;
  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
  }
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    margin-left: 1.69492%;
    width: 100vw !important;
  }
`;

export const StyledHr = styled.hr`
  border-top: 4px solid;
`;

export const Transform = styled.div`
  transform: translate(0px, -75px);
  position: absolute;
`;

export const AvatarContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 30px;
  max-height: 238px;
  margin-top: 50px;
  box-sizing: border-box;
  text-align: justify;
  text-justify: inter-word;
  p {
    font-family: 'Roboto';
    font-size: 21px;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-grow: 1;
  padding: 30px;
`;

export const Divider = styled.div`
  position:absolute;
  left:50%;
  top:10%;
  bottom:10%;
  border-left:1px solid black;
`;
