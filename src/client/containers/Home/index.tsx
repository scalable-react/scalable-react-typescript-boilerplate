import * as React from 'react';
import { Features } from 'containers';
import { ThemeColorMap } from '../../types';
import HomePresentation from './presentation';
const { withTheme } = require('styled-components');

interface Props { theme: ThemeColorMap; }
class Home extends React.Component<Props, undefined> {
  public render() {
    return (
      <HomePresentation theme={this.props.theme}>
        <Features />
      </HomePresentation>
    );
  }
}

export default withTheme(Home);
