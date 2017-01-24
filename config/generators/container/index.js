const path = require('path');
const { trimTemplateFile } = require('../utils/');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Dashboard',
      validate: value => {
        if ((/.+/).test(value)) {
          return true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'input',
      name: 'path',
      message: 'What directory would you like your container in? (relative)',
      default: './src/js/containers',
      validate: (value) => {
        return true;
      }
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message: 'Do you want actions/constants/reducer for this container?'
    },
    {
      type: 'confirm',
      name: 'wantSelectors',
      default: true,
      message: 'Do you want to use reselect?'
    },
    {
      type: 'confirm',
      name: 'wantFlowTypes',
      default: true,
      message: 'Should the container have FlowTypes instead of PropTypes?'
    },
    {
      type: 'confirm',
      name: 'wantJestTests',
      default: false,
      message: 'Should the component have an accompanying jest test file?'
    },
    {
      type: 'checkbox',
      name: 'imports',
      message: 'Would you like to import any commonly used grommet components?',
      choices: () => [
        { name: 'Anchor', value: 'Anchor', checked: false },
        { name: 'Article', value: 'Article', checked: false },
        { name: 'Button', value: 'Button', checked: false },
        { name: 'Card', value: 'Card', checked: false },
        { name: 'Heading', value: 'Heading', checked: false },
        { name: 'Header', value: 'Header', checked: false },
        { name: 'Footer', value: 'Footer', checked: false },
        { name: 'Paragraph', value: 'Paragraph', checked: false },
        { name: 'Section', value: 'Section', checked: false }
      ]
    }
  ],
  actions: (data) => {
    const containerPath = path.resolve(process.cwd(), `${data.path}/{{properCase name}}/`);
    const rootPath = path.resolve(process.cwd(), `./src/js/containers/index.js`);
    const actions = [{
      type: 'add',
      path: `${containerPath}/index.js`,
      templateFile: './container/index.js.hbs',
      abortOnFail: true
    }, {
      type: 'modify',
      path: rootPath,
      pattern: /(\/\* GENERATOR \*\/)/g,
      template: trimTemplateFile('./config/generators/container/export.js.hbs'),
      abortOnFail: false
    }];

    if (data.wantSelectors) {
      actions.push({
        type: 'add',
        path: `${containerPath}/selectors.js`,
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: `${containerPath}/actions.js`,
        templateFile: './container/actions.js.hbs',
        abortOnFail: true
      });

      // Constants
      actions.push({
        type: 'add',
        path: `${containerPath}/constants.js`,
        templateFile: './container/constants.js.hbs',
        abortOnFail: true
      });

      // Reducer
      actions.push({
        type: 'add',
        path: `${containerPath}/reducer.js`,
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true
      });
      if (data.wantFlowTypes) {
        actions.push({
          type: 'add',
          path: `${containerPath}/flowTypes.js`,
          templateFile: './container/flowTypes.js.hbs',
          abortOnFail: true
        });
      }
      if (data.wantJestTests) {
        actions.push({
          type: 'add',
          path: `${containerPath}/tests/index.test.js`,
          templateFile: './container/test.js.hbs',
          abortOnFail: true
        });
        actions.push({
          type: 'add',
          path: `${containerPath}/tests/reducer.test.js`,
          templateFile: './container/reducer.test.js.hbs',
          abortOnFail: true
        });
        actions.push({
          type: 'add',
          path: `${containerPath}/tests/actions.test.js`,
          templateFile: './container/actions.test.js.hbs',
          abortOnFail: true
        });
      }
    }

    return actions;
  }
};
