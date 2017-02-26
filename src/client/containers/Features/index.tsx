import * as React from 'react';
import { Heading, Headline, Image, Button, Markdown, Anchor } from 'components';
import { FeaturesProps } from './types';
import {
  Container,
  FeatureImage,
  Card,
  FeaturesSection,
  Feature,
  FeatureSectionInner,
} from './styles';
const features = require('./features').default;
const { withTheme } = require('styled-components');

class Features extends React.Component<FeaturesProps, undefined> {
  public render() {
    return (
      <Container>
        <FeaturesSection id="features-section-one" background="#f3f3f3">
          <Headline>
            Features
          </Headline>
          <FeatureSectionInner>
            <Feature>
              <Image
                size="small"
                alt="Type-Script Logo"
                src="https://raw.githubusercontent.com/RyanCCollins/cdn/master/stsb-images/ts-resized-2.png"
              />
            </Feature>
            <Feature>
              <Card>
                <Heading textAlign="left" color="black">TypeScript</Heading>
                <Markdown
                  content={features.typeScript}
                />
                <Anchor
                  color="#fff"
                  href="http://www.typescriptlang.org/docs/tutorial.html"
                >
                  <Button color="#c05b4d">
                    View Website
                  </Button>
                </Anchor>
              </Card>
            </Feature>
          </FeatureSectionInner>
        </FeaturesSection>
        <FeaturesSection id="features-section-two" background="#e6e8ec">
          <FeatureSectionInner reverse>
            <Feature>
              <Card>
                <Heading textAlign="left" color="black">Styled Components</Heading>
                <Markdown
                  content={features.styledComponents}
                />
                <Anchor
                  color="#fff"
                  href="https://styled-components.com/"
                >
                  <Button color="#c05b4d">
                    View Website
                  </Button>
                </Anchor>
              </Card>
            </Feature>
            <Feature>
              <Image
                size="small"
                alt="Styled-components logo"
                src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/sc.png?raw=true"
              />
            </Feature>
          </FeatureSectionInner>
          <FeatureImage>
            <Image
              size="medium"
              alt="Styled-components example"
              src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/sc-example.png?raw=true"
            />
          </FeatureImage>
        </FeaturesSection>
        <FeaturesSection id="features-section-three" background="#f3f3f3">
          <FeatureSectionInner>
            <Feature>
              <Image
                size="small"
                alt="feature-first logo"
                src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/feature-first.png?raw=true"
              />
            </Feature>
            <Feature>
              <Card>
                <Heading textAlign="left" color="black">Feature First</Heading>
                <Markdown
                  content={features.featureFirst}
                />
              </Card>
            </Feature>
          </FeatureSectionInner>
          <FeatureImage>
            <Image
              size="medium"
              alt="feature-first example"
              src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/feature-first-example.png?raw=true"
            />
          </FeatureImage>
        </FeaturesSection>
      </Container>
    );
  }
}

export default withTheme(Features);
