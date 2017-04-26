import styled from 'styled-components';
import remStringFromPX from '../utils';
import { sizeMap } from './maps';
import { Props } from './';

export default styled.button`
  text-align: center;
  background-color: ${(props: Props) => props.backgroundColor};
  color: ${(props: Props) => props.color};
  font-size: ${(props: Props) => remStringFromPX(sizeMap[props.fontSize])};
  border: ${(props: Props) => props.borderColor ? `3px solid ${props.borderColor}` : 'none'};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;
