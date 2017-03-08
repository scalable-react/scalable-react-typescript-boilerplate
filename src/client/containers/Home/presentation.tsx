import * as React from 'react';
import { Heading, Section, Hero, Paragraph, Button, Anchor } from 'ui';
import { Container, HeroLogo, HeroLogoRow, HeadingContainer, GetStartedButtons } from './styles';
import { ThemeColorMap } from '../../types';

interface Props extends React.Props<typeof HomePresentation> {
  children?: JSX.Element;
  theme: ThemeColorMap;
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
            <Paragraph margin="small" size="large">
              Scaling JavaScript apps has never been easier
            </Paragraph>
          </HeadingContainer>
          <GetStartedButtons>
            <Anchor
              color={theme.white1}
              path="/docs"
            >
              <Button
                style={{ margin: 10 }}
                size="xlarge"
                isHero
                backgroundColor={theme.secondary}
                borderColor="#733529"
              >
                Read the docs
              </Button>
            </Anchor>
            <Anchor
              color={theme.white1}
              path="/todo-app"
            >
              <Button
                style={{ margin: 10 }}
                size="xlarge"
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
