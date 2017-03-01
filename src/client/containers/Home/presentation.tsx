import * as React from 'react';
import { Button, Anchor } from 'components';
import { ButtonSize } from 'components/Button';
import { Heading, Section, Hero, Paragraph } from 'components';
import { Container, HeroLogo, HeroLogoRow, HeadingContainer, GetStartedButtons } from './styles';

interface Props extends React.Props<typeof HomePresentation> {
  children?: JSX.Element;
}
export default function HomePresentation({
  children,
}: Props): JSX.Element {
  return (
    <Container>
      <Section
        alignItems="center"
        flexDirection="column"
        full={{ horizontal: true }}
        backgroundColor="#f5f5f5"
      >
        <Hero>
          <HeroLogoRow>
            <HeroLogo>
              TS
            </HeroLogo>
          </HeroLogoRow>
          <HeadingContainer>
            <Heading margin="small" tag="h1" color="#007acc">
              Scalable React TypeScript Boilerplate
            </Heading>
            <Paragraph margin="small" size="large">
              Scaling JavaScript apps has never been easier
            </Paragraph>
          </HeadingContainer>
          <GetStartedButtons>
            <Anchor
              color="#fff"
              path="/docs"
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
              path="/todo-app"
            >
              <Button
                style={{ margin: 10 }}
                size={ButtonSize.xlarge}
                isHero
                backgroundColor="#c05b4d"
                borderColor="#732419"
              >
                View Example App
              </Button>
            </Anchor>
          </GetStartedButtons>
        </Hero>
      </Section>
      {children}
    </Container>
  );
}
