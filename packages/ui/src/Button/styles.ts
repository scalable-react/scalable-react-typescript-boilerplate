import styled from 'styled-components';
import remStringFromPX from '../utils';
import { sizeMap } from './maps';
import { Props } from './';

export const ButtonComponent = styled.button`
  text-align: center;
  background-color: ${(props: Props) => props.backgroundColor};
  color: ${(props: Props) => props.color};
  font-size: ${(props: Props) => remStringFromPX(sizeMap[props.fontSize])};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

export const HeroButton = styled.button`
  background-color: ${(props: Props) => props.backgroundColor};
  color: ${(props: Props) => props.color};
  padding: 20px 20px;
  line-height: 16px;
  font-size: ${(props: Props) => remStringFromPX(sizeMap[props.fontSize])};
  transition: 150ms;
  display: inline-block;
  border-style: solid;
  border-width: 0 0 4px 0;
  border-color: ${(props: Props) => props.borderColor};
  border-radius: 3px;
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
  &:active {
    background-color: ${(props: Props) => props.borderColor};
  }
`;
