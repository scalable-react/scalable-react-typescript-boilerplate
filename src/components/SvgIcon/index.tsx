import * as React from 'react';

interface IProps extends React.Props<SvgIcon> {
  viewBox?: string,
  width?: number,
  height?: number,
  style? : {},
  className?: string
};

function rest(object: any, remove: {[key: string]: any}) {
  let rest = Object.assign({}, object);
  Object.keys(remove).forEach(key => delete rest[key]);
  return rest;
}

class SvgIcon extends React.Component<IProps, any> {
  static defaultProps: IProps = {
    viewBox: '0 0 24 24',
  }
  render() {
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
