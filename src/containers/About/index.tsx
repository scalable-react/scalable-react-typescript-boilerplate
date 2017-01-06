import * as React from 'react';
import { Headline, Markdown, Image } from 'components';
const { Container, AboutSection, AboutSectionInner } = require('./styles');

class About extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <AboutSection id="about-section-one" background="#f3f3f3">
          <Headline>
            About
          </Headline>
          <AboutSectionInner>
            <Image
              alt="Coming soon"
              src="http://oi63.tinypic.com/24vse9f.jpg"
            />
            <Markdown content={`# Coming soon!`} />
          </AboutSectionInner>
        </AboutSection>
      </Container>
    );
  }
}

export default About;
