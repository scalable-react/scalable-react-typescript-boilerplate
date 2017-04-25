import * as React from 'react';
import HeaderComponent from './header';
import getNextState, { HeaderState } from './utils';

export interface Props {
  backgroundColor?: string;
}

export interface State {
  headerState: HeaderState;
}

export default class Header extends React.Component<Props, State> {
  public constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.backgroundColor = this.backgroundColor.bind(this);
    this.state = {
      headerState: {
        state: 'Pinned',
        position: 0,
        height: 0,
      },
    };
  }
  public componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  public componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  private handleScroll() {
    const header = document.getElementsByTagName('header')[0];
    const nextState = getNextState(window, header, this.state.headerState);
    this.setState({
      headerState: nextState,
    });
  }
  private backgroundColor() {
    const header = document.getElementsByTagName('header')[0];
    if (typeof window !== 'undefined' && typeof header !== 'undefined') {
      const isDocked = window.pageYOffset <= header.clientHeight + 100;
      return !isDocked
        ? '#0a0a0a'
        : 'transparent';
    }
    return '';
  }
  public render() {
    const {
      children,
      ...rest,
    } = this.props;
    const backgroundColor = this.backgroundColor();
    return (
      <HeaderComponent
        {...rest}
        backgroundColor={backgroundColor}
        height={this.state.headerState.height}
        state={this.state.headerState.state}
      >
        {children}
      </HeaderComponent>
    );
  }
}
