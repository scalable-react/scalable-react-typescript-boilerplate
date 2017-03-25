import * as React from 'react';
import { Markdown } from 'openui';
import Component from './styles';

export interface Props extends React.HTMLProps<typeof Welcome> {
  data: string;
}
export default function Welcome({
  data,
}: Props): JSX.Element {
  const content = data || '';
  return (
    <Component>
      Welcome!!
      <Markdown content={content} />
    </Component>
  );
};
