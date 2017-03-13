import * as React from 'react';
import { PicProps } from './types';
import {
  StyledPic,
} from './styles';

export interface PicProps extends React.Props<typeof Pic> {
  url?: string;
}

export default function Pic({
  url,
}: PicProps): JSX.Element {

  return (
    <StyledPic url={url}/>
  );
}
