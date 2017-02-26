import * as React from 'react';
import { Features } from 'containers';
import { Heading, Section, Hero, Paragraph } from 'components';
import { HomeProps } from './types';
import { Container, HeroLogo, HeroLogoRow, HeadingContainer } from './styles';
import GetStartedButtonRow from './GetStartedButtonRow';
const { withTheme } = require('styled-components');

class Home extends React.Component<HomeProps, undefined> {
  public render() {
    const { theme } = this.props;
    return (
      <Container>
        <Section
          alignItems="center"
          flexDirection="column"
          full={{ horizontal: true }}
        >
          <Hero backgroundColor={theme.dark2}>
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
            <GetStartedButtonRow />
          </Hero>
        </Section>
        <Features />
      </Container>
    );
  }
}

export default withTheme(Home);
