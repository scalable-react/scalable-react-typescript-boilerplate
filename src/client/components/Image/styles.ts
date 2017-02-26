import remStringFromPx from '../utils';
const styled = require('styled-components').default;

const imageSizeMap = {
  xxsmall: 100,
  xsmall: 200,
  small: 300,
  medium: 400,
  large: 500,
  xlarge: 600,
};

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  max-height: ${(props) => remStringFromPx(imageSizeMap[props.size])};
  display:block
`;
