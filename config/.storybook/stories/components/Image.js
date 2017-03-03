import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Image } from 'components';

storiesOf('Image', module)
  .add('thumb image', () =>
    <Image
      size="thumb"
      alt="tree shaking"
      src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FoccaD2XA4l5FC%2Fgiphy-downsized.gif"
    />
  )
  .add('xxsmall image', () =>
    <Image
      size="xxsmall"
      alt="tree shaking"
      src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FoccaD2XA4l5FC%2Fgiphy-downsized.gif"
    />
  ).add('xsmall image', () =>
    <Image
      size="xsmall"
      alt="tree shaking"
      src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FoccaD2XA4l5FC%2Fgiphy-downsized.gif"
    />
  ).add('small image', () =>
    <Image
      size="small"
      alt="tree shaking"
      src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FoccaD2XA4l5FC%2Fgiphy-downsized.gif"
    />
  ).add('medium image', () =>
    <Image
      size="medium"
      alt="tree shaking"
      src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FoccaD2XA4l5FC%2Fgiphy-downsized.gif"
    />
  ).add('large image', () =>
    <Image
      size="large"
      alt="tree shaking"
      src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FoccaD2XA4l5FC%2Fgiphy-downsized.gif"
    />
  ).add('xlarge image', () =>
    <Image
      alt="tree shaking"
      size="xlarge"
      src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FoccaD2XA4l5FC%2Fgiphy-downsized.gif"
    />
  );