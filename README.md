__NOTICE__:
We have been working on refactoring this repo to use lerna for the last few months and are nearly there!  Stay tuned for more announcements and checkout our progress [on this branch](https://github.com/scalable-react/scalable-react-typescript-boilerplate/tree/feat_rc_docs_package).

![WIP](https://github.com/RyanCCollins/cdn/blob/master/misc/Work_In_Progress.png?raw=true)

# Work In Progress
__NOTICE__: This repository is in active development.  We encourage usage and pull requests, but please be advised that it is changing fast!

![TypeScript](https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png)

# Scalable React TS Boilerplate
[![Build Status](https://travis-ci.org/scalable-react/scalable-react-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/scalable-react/scalable-react-typescript-boilerplate)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Roadmap](https://camo.githubusercontent.com/de5f01c39b77893278b0f44ebf20ecca32adb13c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462539332539342d726f61646d61702d4344393532332e7376673f7374796c653d666c61742d737175617265)](https://github.com/scalable-react/scalable-react-typescript-boilerplate#roadmap)
[![Star on Github](https://img.shields.io/github/stars/scalable-react/scalable-react-typescript-boilerplate.svg?style=social)](https://github.com/scalable-react/scalable-react-typescript-boilerplate/stargazers)
[![Watch on Github](https://img.shields.io/github/watchers/scalable-react/scalable-react-typescript-boilerplate.svg?style=social)](https://github.com/scalable-react/scalable-react-typescript-boilerplate/watchers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/scalable-react/scalable-react-typescript-boilerplate.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20scalable-react-typescript-boilerplate!%20https://github.com/scalable-react/scalable-react-typescript-boilerplate%20%F0%9F%91%8D)

Checkout [our website](https://scalable-react-ts-boilerplate.herokuapp.com/) for documentation and examples.

## Background Info

We know that there are a ton of react boilerplates and starter projects to choose from.  Our hope with this project is to provide an example of one of the best front-end architectural patterns available: Feature First.  We started initially with a vanilla JS version of this architecture and have since converted it entirely to strongly-typed TypeScript.  Above all else, the hope of this repository is to provide the open source community with a great example of how to build large-scale apps with React and TypeScript using the feature-first modularization pattern.  Read on to get started!

## Main Features
- Feature First
- Statically Typed
- TypeScript
- Lerna
- Starter UI Kit (Open UI)
- Redux Logic
- Webpack 2
- React
- Redux
- Hot Module Reloading
- Server Side Rendering
- Highly optimized webpack configuration
  - Code Chunking
  - Lazy route loading
  - Uglification / minification

## Getting Started
1. Clone the Repo
`git clone https://github.com/RyanCCollins/scalable-react-ts-boilerplate`

2. Install Dependencies
From the root of the project directory, run `yarn` if you have yarn installed globally.
--- or ---
`npm install`.

3. Start the Development Server
Run `npm run start` then browse http://localhost:1337 to see your running app.

## What is Feature First?
In many projects and frameworks, files are organized by their file type.  For example, you will find tests in a test folder, reducers in a reducers folder and so on and so forth.  This framework takes a different approach.

We encourage modularization / encapsulation of features by asking that you organize your files by feature, rather than file type. When you begin working on your next container, instead of having to root through multiple files to find all of the files that the container depends on, you can expect to find these files in one place: with the feature that they represent.  This helps to decouple the features in your app, lending itself well to code reuse, scalability and modularization.

On top of that, we also ask that you think about separation of concern as you are building your features.  You will see in the example application in this repository that a feature is built up of a dozen or so small, single purpose modules.  By following these simple patterns, you will set yourself up for maximum scalability.  Give it a try! We think you will enjoy it.

## Lerna
We are hard at work converting the structure of this boilerplate to use Lerna.  Stay tuned for more information!

## Styled Components
This project embraces [styled-components](https://github.com/styled-components/styled-components) as it's a fantastic way to style your React components.  

Check the components directory for examples.

## Full Stack
This boilerplate contains setup to quickly get started with a full stack application.  Within the [`src/`](https://github.com/scalable-react/scalable-react-typescript-boilerplate/tree/master/src) directory, you will find a server and a client folder.

## File Tree Structure

### Client File Structure
```
src/client
├── apolloClient.ts
├── components
│   ├── Box
│   │   ├── __tests__
│   │   │   ├── __mocks__
│   │   │   │   └── boxMocks.mock.ts
│   │   │   ├── __snapshots__
│   │   │   │   └── index.test.tsx.snap
│   │   │   └── index.test.tsx
│   │   ├── index.tsx
│   │   ├── maps.ts
│   │   ├── styleUtils.ts
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── Section
│   │   ├── __tests__
│   │   │   ├── __mocks__
│   │   │   │   └── sectionMocks.mock.ts
│   │   │   ├── __snapshots__
│   │   │   │   └── index.test.tsx.snap
│   │   │   └── index.test.tsx
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── index.ts
├── containers
│   ├── Blog
│   │   ├── index.tsx
│   │   ├── posts.graphql.ts
│   │   └── styles.ts
│   ├── BlogPost
│   │   ├── comments.graphql.ts
│   │   ├── index.tsx
│   │   ├── post.graphql.ts
│   │   └── styles.ts
│   └── index.ts
├── index.tsx
├── reducers.ts
├── routes.tsx
├── store.tsx
└── styles
    └── index.css
```

### Server file structure
```
src/server
├── db
│   ├── index.ts
│   ├── models
│   │   ├── comment.ts
│   │   └── post.ts
│   └── utils
│       └── uuid.ts
├── graph
│   ├── index.ts
│   ├── mutations
│   │   ├── comment
│   │   │   ├── createComment.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── queries
│   │   ├── comment
│   │   │   ├── comment.ts
│   │   │   ├── comments.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── post
│   │       ├── index.ts
│   │       ├── post.ts
│   │       └── posts.ts
│   ├── schema.json
│   └── types
│       ├── comment
│       │   ├── comment.ts
│       │   └── commentInput.ts
│       ├── index.ts
│       └── post
│           ├── post.ts
│           └── postInput.ts
├── graphqlEntry.ts
└── index.tsx
```

## Apollo GraphQL
Recently, we've added support for Apollo and GraphQL both server and client side.  The starter code in this repo demonstrates how to setup your GraphQL server.  The `/blog` route will show you a very simple example of loading data via Apollo Graphql.

## UI Components
#### Build your next UIKit with this library!
Included in this project are a few primitive components that you can use to bootstrap your next project, or as a reference for building a UIKit.
- [Box](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Box/index.tsx)
  - Flex Box component!  Whoot!
- [Section](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Section/index.tsx)
  - A section component.  Extends the Box component giving flex-box properties.
- [Anchor](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Anchor/index.tsx)
- [Article](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Article/index.tsx)
- [Button](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Button/index.tsx)
- [Footer](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Footer/index.tsx)
- [Heading](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Heading/index.tsx)
- [Headline](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Headline/index.tsx)
- [Hero](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Hero/index.tsx)
- [Image](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Image/index.tsx)
- [Markdown](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Markdown/index.tsx)
- [NavBar](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/NavBar/index.tsx)
- [Paragraph](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/Paragraph/index.tsx)
- [SvgIcon](https://github.com/scalable-react/scalable-react-typescript-boilerplate/blob/master/src/client/components/SvgIcon/index.tsx)
- And more!

## React Storybook
We've included react storybook to make it easy for you to test your ui kit components.
Run `npm run storybook` and navigate to `http://localhost:9001` to see your stories. 

You can add more stories as you are building out your components within the `./config/.storybook/stories` folder.
Simply [write a story](https://getstorybook.io/docs/react-storybook/basics/writing-stories) and export it in the `stories/index.js` file. Checkout the [React Storybook](https://getstorybook.io/) docs for more info!

Note: the components are currently being served from the `build` directory, so please make sure you have compiled (`npm run compile`) the app before running.

## Generators
We've included some generators so that you can easily scaffold out components & containers from the command line.

To use the generators, run `npm run generator` and select the options you want to use.  The generators will create your component or container and their accompanying imports / exports.

## Server Rendering
We have included setup to get you server-rendering out of the box.  Included in the setup is an [Express server](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/server.tsx) that will server render.  Note that the server-rendering will not work with the TypeScript source code, so you must compile the project into the Build directory first.  Also, you must copy any other assets (images, markdown, etc.) into the build folder.

## Testing
Included is a test framework for all of your React testing needs.  We are using Jest to run the test suite and generate snapshots, plus Enzyme for component introspection.

Tests should be collocated within the component / container they represent. Test files should be named `index.test.tsx` and mocks must be named `myMock.mock.ts`.

Please reference the [`Box`](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/tree/master/src/client/components/Box) and [`Section`](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/tree/master/src/client/components/Section) components for example tests.  More will be added at a later time. 

Note that the test are not compiled by TypeScript, that way there is no code duplication and you can use static types in your tests.

P.S. If you are looking to contribute, this would be a great first contribution!

## Deployment
<!-- HTML snippet -->
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/RyanCCollins/scalable-react-ts-boilerplate">
  <img src="https://www.netlify.com/img/deploy/button.svg" title="Deploy to Netlify">
</a>

The [documentation website](https://scalable-react-ts-boilerplate.herokuapp.com/) built for this boilerplate is deployed to Heroku.  Included is a Procfile that will run the server.  The deployment is automated completely.  After the install script, the deploy script will run on the server in order to compile the bundle and prepare the build folder for server-rendering.

## Scripts
- `npm run setup:yarn`
  - Install the package dependencies via yarn
- `npm install`
  - Install dependencies (the ol' fashioned way)
- `npm run start`
  - Start the dev server
- `npm run build`
  - Build the project
- `npm run deploy`
  - Create a production bundle for deployment
- `npm run serve`
  - Serve the production bundle on port 1337
- `npm run test`
  - Run the test suite
- `npm run test:watch`
  - Run the test suite in watch mode
- `npm run test:update`
  - Update the failing snapshot tests
- `npm run storybook`
  - Run the storybook server

## Resources
- [JavaScript Code Quality with Free Tools](https://dev-blog.apollodata.com/javascript-code-quality-with-free-tools-9a6d80e29f2d#.1unvvh8vw)
- [Working with React & TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
- [Setting up a New React / TypeScript Project](http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/)
- [Feature First Architecture](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.8nerdsqhd)

## Contributing
See here for our [contribution guide](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/blob/master/CONTRIBUTING.md).  We are on slack, please go [here for an invite](https://scalable-react-slack.herokuapp.com/)!  We'd love to hear from you!

## License
See here for the [license](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/blob/master/LICENSE).

## Roadmap
### v1.0.2

- [X] Add CI
- [x] Introduce an async redux workflow
  - Redux logic
- [x] Integrate storybook
- [x] Standardize the tslint configuration
- [x] Add more reusable modules, ala box / section
- [x] Refactor reusable modules into uikit
- [x] Remove requires and use es6 imports for all libs
- [x] Add a no any rule and update source to use it
- [ ] Migrate to a multi-module pattern using lerna (in progress)

## Troubleshooting
Make sure to use the right version of node.  You can reference the version in the `.nvmrc` file.  For help installing and using NVM, please refer to this [gist](https://gist.github.com/RyanCCollins/1a5686ff9dd51b72eb2d4dc70aa6c1f4).
