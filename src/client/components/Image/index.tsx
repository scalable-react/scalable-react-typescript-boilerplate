import * as React from 'react';
const Img = require('./styles').Img;

export enum ImageSize {
  xxsmall = 100,
  xsmall = 200,
  small = 300,
  medium = 400,
  large = 500,
  xlarge = 600,
}

interface ImageProps extends React.Props<Image> {
  size?: ImageSize;
  src: string;
  alt: string;
}

class Image extends React.Component<ImageProps, any> {
  public static defaultProps = {
    size: ImageSize.xsmall,
  };
  public render() {
    return (
      <Img
        alt={this.props.alt}
        size={this.props.size}
        src={this.props.src}
      />
    );
  }
}

export default Image;
