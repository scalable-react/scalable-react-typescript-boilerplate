import styled from 'styled-components';

interface ButtonComponentProps {
  backgroundColor: string;
}
export const ButtonComponent = styled.button`
  text-align: center;
  background-color: ${(props: ButtonComponentProps) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

interface HeroButtonProps {
  backgroundColor: string;
  borderColor: string;
}

export const HeroButton = styled.button`
  background-color: ${(props: HeroButtonProps) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 20px 20px;
  line-height: 16px;
  font-size: ${(props) => props.size}px;
  transition: 150ms;
  display: inline-block;
  border-style: solid;
  border-width: 0 0 4px 0;
  border-color: ${(props) => props.borderColor};
  border-radius: 3px;
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
  &:active {
    background-color: ${(props) => props.borderColor};
  }
`;
