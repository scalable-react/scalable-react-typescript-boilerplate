import styled from 'styled-components';
import { Props } from './types';

export default styled.div`
  background: ${(props: Props) => props.backgroundColor};
  min-height: 350px;
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;
