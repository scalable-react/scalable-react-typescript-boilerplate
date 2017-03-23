'use strict';


const babel = require('babel-core');
const tsc = require('typescript');
const crypto = require('crypto');
const fs = require('fs');
const jestPreset = require('babel-preset-jest');
const es2015Preset = require('babel-preset-es2015');
const path = require('path');

const BABELRC_FILENAME = '.babelrc';

const cache = Object.create(null);
const tsconfig = require('../../tsconfig.json');


const getBabelRC = (filename, {useCache}) => {
  const paths = [];
  let directory = filename;
  while (directory !== (directory = path.dirname(directory))) {
    if (useCache && cache[directory]) {
      break;
    }

    paths.push(directory);
    const configFilePath = path.join(directory, BABELRC_FILENAME);
    if (fs.existsSync(configFilePath)) {
      cache[directory] = fs.readFileSync(configFilePath, 'utf8');
      break;
    }
  }
  paths.forEach(directoryPath => {
    cache[directoryPath] = cache[directory];
  });

  return cache[directory] || '';
};

const createTransformer = (options) => {
  options = Object.assign({}, options, {
    // auxiliaryCommentBefore: ' istanbul ignore next ',
    presets: ((options && options.presets) || []).concat([jestPreset]),
    retainLines: true,
  });
  delete options.cacheDirectory;

  options.presets = options.presets.concat([es2015Preset]);

  return {
    canInstrument: true,
    getCacheKey(
      fileData,
      filename,
      configString,
      {instrument, watch}
    ) {
      return crypto.createHash('md5')
        .update(fileData)
        .update(configString)
        // Don't use the in-memory cache in watch mode because the .babelrc
        // file may be modified.
        .update(getBabelRC(filename, {useCache: !watch}))
        .update(instrument ? 'instrument' : '')
        .digest('hex');
    },
    process(
      src,
      filename,
      config,
      transformOptions
    ) {
      let plugins = options.plugins || [];

      if (transformOptions && transformOptions.instrument) {
        // Copied from jest-runtime transform.js
        plugins = plugins.concat([
          [
            require('babel-plugin-istanbul').default,
            {
              // files outside `cwd` will not be instrumented
              cwd: config.rootDir,
              exclude: [],
            },
          ],
        ]);
      }

    //   console.log(transformOptions);
    //   console.log(JSON.stringify(options));
    // console.log('src', src);

      // ts compile
      const diag = [];
      const tsOutput = tsc.transpileModule(src, {diagnostics: diag, filename, compilerOptions: tsconfig.compilerOptions, reportDiagnostics: true});

    //   console.log(tsOutput.outputText)

      if (babel.util.canCompile(filename) || true) {
        const babelOutput = babel.transform(
          tsOutput.outputText,
          Object.assign({}, options, {filename, plugins})
        );

        // console.log('babelOutput', babelOutput.code);

        return babelOutput.code; 
      }

      // return src;
    },
  };
};

module.exports = createTransformer();