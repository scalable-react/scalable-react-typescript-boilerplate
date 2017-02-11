import * as React from 'react';

interface IProps extends React.Props<SvgIcon> {
  viewBox?: string;
  width?: number;
  height?: number;
  style?: {};
  className?: string;
};

class SvgIcon extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    viewBox: '0 0 24 24',
  };
  public render() {
    const { children, viewBox, style, className } = this.props;
    return (
      <svg
        className={className}
        style={style}
        viewBox={viewBox}
      >
        {children}
      </svg>
    );
  }
}

export default SvgIcon;
