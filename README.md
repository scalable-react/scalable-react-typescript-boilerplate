# Scalable React TS Boilerplate

## Background

This project was initially inspired by the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate). It inherits the [Feature-First](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.8nerdsqhd) organizational pattern.

The main feature of this project is that it embraces [TypeScript](https://www.typescriptlang.org/) as its main language.  The reasons to use static types are plentiful, but if you need more convincing, check the resources section below.

## Getting Started
1. Clone the Repo
`git clone https://github.com/RyanCCollins/scalable-react-ts-boilerplate`

2. Install Dependencies
From the root of the project directory, run `yarn` if you have yarn installed globally.
--- or ---
`npm install`.

3. Start the Development Server
Run `npm run start` then browse http://localhost:3000 to see your running app.

## What is Feature First?
In most projects and frameworks, files are organized in a File type first fashion. For example, your tests exist in a test folder, your styles in a styles folder. This boilerplate takes a different approach.

We encourage encapsulation of features by asking that you organize each feature into the same folder. With React, this means that your containers and components exist in their own folders, along with literally every other file that pertains to that one component. Your actions, reducers, tests, styles, and everything else are all internal to the component they represent. By decoupling your features from the rest of your app, you set yourself up to reuse your UI components in future projects. You can thank us later!

Give it a try! We promise you will enjoy it.

## Styled Components
This project embraces [styled-components](https://github.com/styled-components/styled-components) as it's a fantastic way to style your React components.  

Check the components directory for examples.

## File Structure
```
├── README.md
├── LICENSE
├── index.html
├── package.json
├── yarn.lock
├── webpack.config.js
├── src/
|   ├── components
|   |   ├── Anchor
|   |   |   ├── index.tsx
|   |   |   └── styles.js
|   |   └── index.ts
|   ├── containers
|   |   ├── App
|   |   |   ├── constants.ts
|   |   |   ├── index.tsx
|   |   |   ├── actions.ts
|   |   |   └── reducers.ts
|   |   └── index.ts
|   ├── reducers.ts
|   ├── store.tsx
|   ├── routes.tsx
|   ├── index.tsx
|   └── styles
├── .babelrc
├── tsconfig.json
├── server.js
└── .gitignore
```

## Scripts
- npm run start
  - Start the dev server
- npm run build
  - Build the project

## Resources
- [JavaScript Code Quality with Free Tools](https://dev-blog.apollodata.com/javascript-code-quality-with-free-tools-9a6d80e29f2d#.1unvvh8vw)
- [Working with React & TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
- [Setting up a New React / TypeScript Project](http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/)
- [Feature First Architecture](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.8nerdsqhd)
