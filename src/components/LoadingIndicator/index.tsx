import * as React from 'react';
const { Wrapper } = require('./styles');

interface IProps extends React.Props<LoadingIndicator> {
  isLoading: boolean;
};

// tslint:disable
class LoadingIndicator extends React.Component<IProps, any> {
  public render() {
    if (this.props.isLoading) {
      return (
        <Wrapper>
          <div className="dizzy-gillespie" />
        </Wrapper>
      );
    }
    return null;
  }
}

export default LoadingIndicator;
