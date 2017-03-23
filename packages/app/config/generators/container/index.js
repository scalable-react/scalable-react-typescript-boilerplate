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
      default: './src/client/containers',
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
    }
  ],
  actions: (data) => {
    const containerPath = path.resolve(process.cwd(), `${data.path}/{{properCase name}}/`);
    const rootPath = path.resolve(process.cwd(), `./src/client/containers/index.ts`);
    const reducersPath = path.resolve(process.cwd(), './src/client/reducers.ts');
    const typesPath = path.resolve(process.cwd(), './src/client/types.ts');
    const statePath = path.resolve(process.cwd(), './src/client/state.ts');
    const actions = [
      {
        type: 'add',
        path: `${containerPath}/index.tsx`,
        templateFile: './container/index.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: `${containerPath}/presentation.tsx`,
        templateFile: './container/presentation.js.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: rootPath,
        pattern: /(\/\* GENERATOR-IMPORT \*\/)/g,
        template: trimTemplateFile('./config/generators/container/import.js.hbs'),
        abortOnFail: false
      },
      {
        type: 'modify',
        path: rootPath,
        pattern: /(\/\* GENERATOR-EXPORT \*\/)/g,
        template: trimTemplateFile('./config/generators/container/export.js.hbs'),
        abortOnFail: false
      },
      {
        type: 'modify',
        path: typesPath,
        pattern: /(\/\* GENERATOR-IMPORT \*\/)/g,
        template: trimTemplateFile('./config/generators/container/types.import.ts.hbs'),
        abortOnFail: false
      },
      {
        type: 'modify',
        path: typesPath,
        pattern: /(\/\* GENERATOR-EXPORT \*\/)/g,
        template: trimTemplateFile('./config/generators/container/types.export.ts.hbs'),
        abortOnFail: false
      }
    ];

    actions.push({
      type: 'add',
      path: `${containerPath}/styles.ts`,
      templateFile: './container/styles.js.hbs',
      abortOnFail: true
    });

    actions.push( {
      type: 'add',
      path: `${containerPath}/types.ts`,
      templateFile: './container/types.ts.hbs',
      abortOnFail: true
    });

    if (data.wantSelectors) {
      actions.push({
        type: 'add',
        path: `${containerPath}/selectors.ts`,
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
        path: `${containerPath}/actionCreators.ts`,
        templateFile: './container/actionCreators.js.hbs',
        abortOnFail: true
      });


      actions.push({
        type: 'add',
        path: `${containerPath}/state.ts`,
        templateFile: './container/state.js.hbs',
        abortOnFail: true
      });

      actions.push({
        type: 'add',
        path: `${containerPath}/actions.ts`,
        templateFile: './container/actions.js.hbs',
        abortOnFail: true
      });

      // Constants
      actions.push({
        type: 'add',
        path: `${containerPath}/constants.ts`,
        templateFile: './container/constants.js.hbs',
        abortOnFail: true
      });

      // Reducer
      actions.push({
        type: 'add',
        path: `${containerPath}/reducer.ts`,
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true
      });

      actions.push({
        type: 'modify',
        path: reducersPath,
        pattern: /(\/\* GENERATOR-IMPORT-REDUCER \*\/)/g,
        template: trimTemplateFile('./config/generators/container/reducer.import.js.hbs'),
        abortOnFail: false
      });

      actions.push({
        type: 'modify',
        path: reducersPath,
        pattern: /(\/\* GENERATOR-EXPORT-REDUCER \*\/)/g,
        template: trimTemplateFile('./config/generators/container/reducer.export.js.hbs'),
        abortOnFail: false
      });

      actions.push({
        type: 'modify',
        path: statePath,
        pattern: /(\/\* GENERATOR-IMPORT-STATE \*\/)/g,
        template: trimTemplateFile('./config/generators/container/state.import.js.hbs'),
        abortOnFail: false
      });

      actions.push({
        type: 'modify',
        path: statePath,
        pattern: /(\/\* GENERATOR-EXPORT-STATE \*\/)/g,
        template: trimTemplateFile('./config/generators/container/reducer.export-state.js.hbs'),
        abortOnFail: false
      });

      actions.push({
        type: 'modify',
        path: statePath,
        pattern: /(\/\* GENERATOR-EXPORT-STATE-TYPE \*\/)/g,
        template: trimTemplateFile('./config/generators/container/state-type.js.hbs'),
        abortOnFail: false
      });

    }

    return actions;
  }
};
