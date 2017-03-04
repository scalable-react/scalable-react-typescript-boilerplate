import 'babel-polyfill';
import path from 'path';
import fs from 'fs';
import * as express from 'express';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import schema from './graph';

function createSchema() {
  return new Promise<string>((res, rej) => {
    graphql(schema, introspectionQuery)
      .then((json) => {
        fs.writeFile(
          path.join(__dirname, './graph/schema.json'),
          JSON.stringify(json, null, 2),
          (err) => {
            if (err) {
              rej(`Error occured while creating graphql schema. ${err}`);
            }
            res('Schema successfully created');
          },
        );
      });
  });
}

export default function graphqlEntry(app): Promise<express.Application> {
  return new Promise<express.Application>(async (res, rej) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', cors(), graphqlExpress({
      schema,
    }));

    app.use('/graphql-ui', graphiqlExpress({
      endpointURL: '/api',
    }));
    await createSchema().catch((err) => rej(err));
    res(app);
  });
};
