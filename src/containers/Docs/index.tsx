import * as React from 'react';
import { Article } from 'components';
const Section = require('./styles').Section;
const markdownContent = require('./README.md');

class Docs extends React.Component<any, any> {
  public render() {
    return (
      <Section>
        {typeof markdownContent === 'string' &&
          <Article content={markdownContent} />
        }
      </Section>
    );
  }
}

export default Docs;
