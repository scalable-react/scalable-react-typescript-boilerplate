const styled = require('styled-components').default;
const { css } = require('styled-components');
import Box from '../Box';
import { Status } from './types';
import colorMap from '../theming/colorMap';

const backgroundColor = (status: Status) => css`
  background-color: ${colorMap[status] || colorMap.offwhite};
`;

export default styled(Box)`
  ${(props) => backgroundColor(props.status)}
`;
