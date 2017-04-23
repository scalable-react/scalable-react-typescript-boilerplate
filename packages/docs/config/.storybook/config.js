import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import withPropsCombinations, { setDefaults } from 'react-storybook-addon-props-combinations'

setAddon(withPropsCombinations)

setAddon(infoAddon);

function loadStories() {
  require('./stories/index.js');
}

configure(loadStories, module);
