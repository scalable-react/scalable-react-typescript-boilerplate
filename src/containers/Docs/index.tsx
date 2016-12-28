import * as React from 'react';
import { Article } from 'components';
const Section = require('./styles').Section;
const markdownContent = require('./README.md');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Section>
        <Article content={markdownContent} />
      </Section>
    );
  }
}

export default Home;
