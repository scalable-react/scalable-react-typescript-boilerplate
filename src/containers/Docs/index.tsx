import * as React from 'react';
import { Article } from 'components';
const Section = require('./styles').Section;

const content = `
  ## Docs

  This is a placeholder for documentation.
`;

class Home extends React.Component<any, any> {
  render() {
    return (
      <Section>
        <Article content={content} />
      </Section>
    );
  }
}

export default Home;
