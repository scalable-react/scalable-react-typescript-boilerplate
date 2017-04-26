const path = require('path');
const { trimTemplateFile } = require('../utils/');

module.exports = {
  description: 'Generate a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
      default: 'Post',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return true;
        }
        return 'The name is required.';
      }
    },
    {
      type: 'input',
      name: 'path',
      message: 'What directory would you like your component in? (relative)',
      default: './src/client/components',
      validate: (value) => {
        return true;
      }
    },
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['ES6 Class', 'Stateless Function']
    },
  ],
  actions: (data) => {
    const componentPath = path.resolve(process.cwd(), `${data.path}/{{properCase name}}/`);
    const rootPath = path.resolve(process.cwd(), `./src/client/components/index.ts`);
    const actions = [{
      type: 'add',
      path: `${componentPath}/index.tsx`,
      templateFile: data.type === 'ES6 Class' ?
        './component/es6class.tsx.hbs' : './component/stateless.tsx.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: `${componentPath}/types.ts`,
      templateFile: './component/types.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: `${componentPath}/styles.ts`,
      templateFile: './component/styles.ts.hbs',
      abortOnFail: true
    }, {
      type: 'modify',
      path: rootPath,
      pattern: /(\/\* GENERATOR-IMPORT \*\/)/g,
      template: trimTemplateFile('./config/generators/component/import.ts.hbs'),
      abortOnFail: false
    }, {
      type: 'modify',
      path: rootPath,
      pattern: /(\/\* GENERATOR-EXPORT \*\/)/g,
      template: trimTemplateFile('./config/generators/component/export.ts.hbs'),
      abortOnFail: false
    }];
    return actions;
  }
};
