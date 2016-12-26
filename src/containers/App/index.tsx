import * as React from 'react';
import { Header } from './styles';

interface AppProps {
  children: any
};

class App extends React.Component<AppProps, any> {
  render() {
    return (
      <main>
        {React.cloneElement(this.props.children, this.props)}
      </main>
    );
  }
}

export default App;
