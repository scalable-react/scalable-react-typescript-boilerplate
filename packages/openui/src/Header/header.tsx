import * as React from 'react';
import styled from 'styled-components';
import headerStyles from './styles';

export interface Props {
  backgroundColor?: string;
  state?: string;
  height: number;
}

const HeaderComponent = styled.header`
  ${headerStyles()}
`;

export default function Header(props: Props): JSX.Element {
  return (
    <HeaderComponent {...props} />
  );
}
