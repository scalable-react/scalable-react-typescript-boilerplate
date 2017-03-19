import * as React from 'react';
import { serialize } from 'serialize-javascript';

const Html = (props: {
  content: string,
  state: {},
  scriptHash: string,
  vendorHash: string,
  cssHash: string,
  styles: string,
}) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Scalable React TypeScript Boilerplate</title>
      <link href="https://fonts.googleapis.com/css?family=Hind|Montserrat|Roboto+Mono" rel="stylesheet" />
      <link href={`public${props.cssHash}`} rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: props.styles }} />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: props.content }} />
      <script src={`public${props.scriptHash}`} charSet="UTF-8" />
      <script src={`public${props.vendorHash}`} type="text/javascript" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__=${serialize(props.state, { isJSON: true })};`,
        }}
        charSet="UTF-8"
      />
    </body>
  </html>
);

export default Html;
