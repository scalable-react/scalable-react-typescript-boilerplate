import * as React from 'react';
import { Heading, Section, Hero, Paragraph, Button, Anchor } from 'ui';
import { Container, HeroLogo, HeroLogoRow, HeadingContainer, GetStartedButtons } from './styles';
import { Props as HomeProps } from './types';

export interface Props extends HomeProps {
  children?: JSX.Element;
}
export default function HomePresentation({
  children,
  theme,
}: Props): JSX.Element {
  return (
    <Container>
      <Section
        alignItems="center"
        flexDirection="column"
        full={{ horizontal: true }}
        backgroundColor={theme.offwhite}
      >
        <Hero backgroundColor={theme.black2}>
          <HeroLogoRow>
            <HeroLogo>
              TS
            </HeroLogo>
          </HeroLogoRow>
          <HeadingContainer>
            <Heading margin="small" tag="h1" color={theme.primary}>
              Scalable React TypeScript Boilerplate
            </Heading>
            <Paragraph margin="small" paragraphSize="large">
              Scaling JavaScript apps has never been easier
            </Paragraph>
          </HeadingContainer>
          <GetStartedButtons>
            <Anchor
              plain
              color={theme.white1}
              path="/docs"
            >
              <Button
                style={{ margin: 10 }}
                fontSize="xlarge"
                isHero
                backgroundColor={theme.secondary}
                borderColor="#733529"
              >
                Read the docs
              </Button>
            </Anchor>
            <Anchor
              plain
              color={theme.white1}
              path="/todo-app"
            >
              <Button
                style={{ margin: 10 }}
                fontSize="xlarge"
                isHero
                backgroundColor={theme.secondary}
                borderColor="#733529"
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
