import * as React from 'react';
import { NavBar } from 'components';
import { Box, Heading, Footer, Paragraph, SvgIcon, Anchor } from 'ui';
import { SetIsMobileAction } from './actions';
import { State } from './state';
import { Author, Main } from './styles';

export type StateProps = State;

export interface DispatchProps {
  actions: {
    setIsMobile: (isMobile: boolean) => SetIsMobileAction,
  };
};

export type FeatureProps = React.Props<Feature> & StateProps & DispatchProps;

export default class Feature extends React.Component<FeatureProps, undefined> {
  constructor(props) {
    super(props);
  };

  public componentDidMount() {
    window.addEventListener('resize', this.handleMobile);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleMobile);
  }

  private handleMobile = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== this.props.isMobile) {
      this.props.actions.setIsMobile(isMobile);
    }
  }

  public render() {
    const {
      children,
      navLinks,
      logoText,
    } = this.props;

    return (
      <Main>
        <NavBar
          links={navLinks}
          logoText={logoText}
        />
        {children}
        <Footer>
          <Box alignItems="center" >
            <Heading>
              React + TypeScript
            </Heading>
            <Paragraph margin="none">
              Scalable React TS Boilerplate
            </Paragraph>
          </Box>
          <Author>
            <span>By </span>
            <Anchor plain color="#007acc" href="http://www.ryancollins.io/" > Ryan C.Collins </Anchor>
          </Author>
          <Box flexDirection="row" alignItems="center" justifyContent="center" >
            <Box margin="small" >
              <Anchor href="https://github.com/RyanCCollins/scalable-react-ts-boilerplate" >
                <SvgIcon style={{ height: 35, width: 35, fill: 'white' }} viewBox="0 0 1792 1792" >
                  <path // tslint:disable-next-line
                    d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                  />
                </SvgIcon>
              </Anchor>
            </Box>
            <Box margin="small" >
              <Anchor href="https://scalable-react-slack.herokuapp.com/" >
                <SvgIcon style={{ height: 35, width: 35, fill: 'white' }} viewBox="0 0 256 256" >
                  <path // tslint:disable-next-line
                    d="M165.964 15.838c-3.89-11.975-16.752-18.528-28.725-14.636-11.975 3.89-18.528 16.752-14.636 28.725l58.947 181.365c4.048 11.187 16.132 17.473 27.732 14.135 12.1-3.483 19.475-16.334 15.614-28.217L165.964 15.838" fill="#DFA22F" /><path d="M74.626 45.516C70.734 33.542 57.873 26.989 45.9 30.879 33.924 34.77 27.37 47.631 31.263 59.606l58.948 181.366c4.047 11.186 16.132 17.473 27.732 14.132 12.099-3.481 19.474-16.332 15.613-28.217L74.626 45.516" fill="#3CB187" /><path d="M240.162 166.045c11.975-3.89 18.526-16.75 14.636-28.726-3.89-11.973-16.752-18.527-28.725-14.636L44.708 181.632c-11.187 4.046-17.473 16.13-14.135 27.73 3.483 12.099 16.334 19.475 28.217 15.614l181.372-58.93" fill="#CE1E5B" /><path d="M82.508 217.27l43.347-14.084-14.086-43.352-43.35 14.09 14.089 43.347" fill="#392538" /><path d="M173.847 187.591c16.388-5.323 31.62-10.273 43.348-14.084l-14.088-43.36-43.35 14.09 14.09 43.354" fill="#BB242A" /><path d="M210.484 74.706c11.974-3.89 18.527-16.751 14.637-28.727-3.89-11.973-16.752-18.526-28.727-14.636L15.028 90.293C3.842 94.337-2.445 106.422.896 118.022c3.481 12.098 16.332 19.474 28.217 15.613l181.371-58.93" fill="#72C5CD" /><path d="M52.822 125.933c11.805-3.836 27.025-8.782 43.354-14.086-5.323-16.39-10.273-31.622-14.084-43.352l-43.36 14.092 14.09 43.346" fill="#248C73" /><path d="M144.16 96.256l43.356-14.088a546179.21 546179.21 0 0 0-14.089-43.36L130.07 52.9l14.09 43.356" fill="#62803A" />
                </SvgIcon>
              </Anchor>
            </Box>
          </Box>
        </Footer>
      </Main>
    );
  }
}
