import * as React from 'react';
const Img = require('./styles').Img;

enum ImageSize {
  xsmall = 200,
  small = 300,
  medium = 400,
  large = 500,
  xlarge = 600,
};

interface IProps extends React.Props<Image> {
  size?: ImageSize,
  src: string,
};

class Image extends React.Component<IProps, any> {
  static defaultProps = {
    size: ImageSize.xsmall,
  }
  render() {
    return (
      <Img
        size={this.props.size}
        src={this.props.src}
      />
    );
  }
}

export default Image;
