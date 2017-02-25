import * as React from 'react';
import { Img } from './styles';
import { ImageProps, ImageSize } from './types';

class Image extends React.Component<ImageProps, undefined> {
  public static defaultProps = {
    size: 'small',
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
