import * as React from 'react';
import { Article } from 'components';
declare var require: any;
declare var process: any;
const Section = require('./styles').Section;
const markdownContent = require('./README.md');

console.log(`markdownContent: ${JSON.stringify(markdownContent)}`);

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
