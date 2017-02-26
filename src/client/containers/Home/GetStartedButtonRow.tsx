import * as React from 'react';
import { Button, Anchor } from 'components';
import { ButtonSize } from 'components/Button';
const { withTheme } = require('styled-components');
import { GetStartedButtons } from './styles';

interface Props {
  theme: any;
}

const GetStartedButtonRow = ({
  theme,
}: Props): JSX.Element =>
  <GetStartedButtons>
    <Anchor
      color="#fff"
      path="/docs"
    >
      <Button
        style={{ margin: 10 }}
        size={ButtonSize.xlarge}
        isHero
        backgroundColor={theme.secondary}
        borderColor="#732419"
      >
        Read the docs
      </Button>
    </Anchor>
    <Anchor
      color="#fff"
      path="/todo-app"
    >
      <Button
        style={{ margin: 10 }}
        size={ButtonSize.xlarge}
        isHero
        backgroundColor={theme.secondary}
        borderColor="#732419"
      >
        View Example App
      </Button>
    </Anchor>
  </GetStartedButtons>;

export default withTheme(GetStartedButtonRow);
