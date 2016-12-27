import * as React from 'react';
import * as AppActionCreators from './actions';
import { NavBar } from 'components';
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;

interface AppProps extends React.Props<any> {
  children: any,
  actions: {
    appSetMobile: (isMobile: boolean) => void,
  },
  isMobile: boolean,
  navLinks: Array<{ url: string, text: string }>,
  logoText: string,
};

const mapStateToProps = state => ({
  isMobile: state.app.isMobile,
  navLinks: state.app.navLinks,
  logoText: state.app.logoText,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    AppActionCreators,
    dispatch,
  )
});

class App extends React.Component<AppProps, any> {
  constructor() {
    super();
    this.handleMobile = this.handleMobile.bind(this);
  }
  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleMobile);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleMobile);
    }
  }
  handleMobile() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== this.props.isMobile) {
      this.props.actions.appSetMobile(isMobile);
    }
  }
  render() {
    return (
      <main>
        <NavBar
          links={this.props.navLinks}
          logoText={this.props.logoText}
        />
        {React.cloneElement(this.props.children, this.props)}
      </main>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
