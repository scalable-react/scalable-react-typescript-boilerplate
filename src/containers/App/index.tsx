import * as React from 'react';
import * as AppActionCreators from './actions';
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;

interface AppProps extends React.Props<any> {
  children: any,
  actions: {
    appSetMobile: (isMobile: boolean) => void,
  },
  isMobile: boolean,
};

const mapStateToProps = state => ({
  isMobile: state.app.isMobile,
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
      console.log(`Called app set mobile ${isMobile}`)
      this.props.actions.appSetMobile(isMobile);
    }
  }
  render() {
    return (
      <main>
        {React.cloneElement(this.props.children, this.props)}
      </main>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
