import * as React from 'react';
import { Button, Anchor } from 'components';
import { ButtonSize } from 'components/Button';
const { GetStartedButtons } = require('./styles');

const GetStartedButtonRow = () =>
  <GetStartedButtons>
    <Anchor
      color="#fff"
      href="/docs"
    >
      <Button
        style={{ margin: 10 }}
        size={ButtonSize.xlarge}
        isHero
        backgroundColor="#c05b4d"
        borderColor="#732419"
      >
        Read the docs
      </Button>
    </Anchor>
    <Anchor
      color="#fff"
      href="https://github.com/RyanCCollins/scalable-react-ts-boilerplate"
    >
      <Button
        style={{ margin: 10 }}
        size={ButtonSize.xlarge}
        isHero
        backgroundColor="#c05b4d"
        borderColor="#732419"
      >
        View the code
      </Button>
    </Anchor>
  </GetStartedButtons>;

export default GetStartedButtonRow;
