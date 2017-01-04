import * as React from 'react';
import { Article } from 'components';
import { Header, Image, Button, Markdown } from 'components';
import { ImageSize } from 'components/Image';
const { Container, FeatureImage, Card, FeaturesSection, Feature, FeatureSectionInner } = require('./styles');

class Features extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <FeaturesSection id="features-section-one" background="#f3f3f3">
          <FeatureSectionInner>
            <Feature>
              <Image
                size={ImageSize.small}
                alt="Styled-components logo"
                src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/styled-components-logo.png?raw=true"
              />
            </Feature>
            <Feature>
              <Card>
                <Header textAlign="left" color="black">Styled Components</Header>
                <Markdown
                  content={`__Visual Primitives for the component age.__ \n Use the best bits of ES6 to style your apps without stress.`}
                />
                <Button color="#c05b4d">
                  View Website
                </Button>
              </Card>
            </Feature>
          </FeatureSectionInner>
          <FeatureImage>
            <Image
              size={ImageSize.medium}
              alt="Styled-components example"
              src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/styled-components-example.png?raw=true"
            />
          </FeatureImage>
        </FeaturesSection>
        <FeaturesSection id="features-section-two" background="#e6e8ec">
          <FeatureSectionInner>
          <Feature>
            <Card>
              <Header textAlign="left" color="black">Feature First</Header>
              <Markdown
                content={`__Visual Primitives for the component age.__ \n Use the best bits of ES6 to style your apps without stress.`}
              />
              <Button color="#c05b4d">
                View Website
              </Button>
            </Card>
          </Feature>
            <Feature>
              <Image
                size={ImageSize.small}
                alt="feature-first logo"
                src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/feature-first-image.png?raw=true"
              />
            </Feature>
          </FeatureSectionInner>
          <FeatureImage>
            <Image
              size={ImageSize.medium}
              alt="feature-first example"
              src="https://github.com/RyanCCollins/cdn/blob/master/stsb-images/feature-first-sample.png?raw=true"
            />
          </FeatureImage>
        </FeaturesSection>
      </Container>
    );
  }
}

export default Features;
