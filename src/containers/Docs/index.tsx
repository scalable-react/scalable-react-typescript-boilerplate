import * as React from 'react';
import { Article } from 'components';
const { Headline, Section } = require('./styles');
const markdownContent = require('./README.md');

class Docs extends React.Component<any, any> {
  public render() {
    return (
      <Section>
        <Headline>
          Documentation
        </Headline>
        {typeof markdownContent === 'string' &&
          <Article content={markdownContent} />
        }
      </Section>
    );
  }
}

export default Docs;
