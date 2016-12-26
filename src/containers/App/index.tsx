import * as React from 'react';

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
