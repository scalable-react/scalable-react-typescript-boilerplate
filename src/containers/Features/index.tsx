import * as React from 'react';
import { Header, Headline, Image, Button, Markdown, Anchor } from 'components';
import { ImageSize } from 'components/Image';
const {
  Container,
  FeatureImage,
  Card,
  FeaturesSection,
  Feature,
  FeatureSectionInner,
} = require('./styles');
const features = require('./features').default;

class Features extends React.Component<any, any> {
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
                size={ImageSize.small}
                alt="Type-Script Logo"
                src="https://raw.githubusercontent.com/RyanCCollins/cdn/master/stsb-images/ts-resized-2.png"
              />
            </Feature>
            <Feature>
              <Card>
                <Header textAlign="left" color="black">TypeScript</Header>
                <Markdown
                  content={features.typeScript}
                />
                <Anchor
                  color="#fff"
                  href="http://www.typescriptlang.org/docs/tutorial.html"
                >
                  <Button color="#c05b4d">
                    Get Started
                  </Button>
                </Anchor>
              </Card>
            </Feature>
          </FeatureSectionInner>
        </FeaturesSection>
        <FeaturesSection id="features-section-two" background="#e6e8ec">
          <FeatureSectionInner>
            <Feature>
              <Card>
                <Header textAlign="left" color="black">Styled Components</Header>
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
                size={ImageSize.small}
                alt="Styled-components logo"
                src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/sc.png?raw=true"
              />
            </Feature>
          </FeatureSectionInner>
          <FeatureImage>
            <Image
              size={ImageSize.medium}
              alt="Styled-components example"
              src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/sc-example.png?raw=true"
            />
          </FeatureImage>
        </FeaturesSection>
        <FeaturesSection id="features-section-three" background="#f3f3f3">
          <FeatureSectionInner reverse>
            <Feature>
              <Image
                size={ImageSize.small}
                alt="feature-first logo"
                src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/feature-first.png?raw=true"
              />
            </Feature>
            <Feature>
              <Card>
                <Header textAlign="left" color="black">Feature First</Header>
                <Markdown
                  content={features.featureFirst}
                />
              </Card>
            </Feature>
          </FeatureSectionInner>
          <FeatureImage>
            <Image
              size={ImageSize.medium}
              alt="feature-first example"
              src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/feature-first-example.png?raw=true"
            />
          </FeatureImage>
        </FeaturesSection>
      </Container>
    );
  }
}

export default Features;
