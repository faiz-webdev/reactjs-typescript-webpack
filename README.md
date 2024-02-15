# Packages

## run the project
`npm start`

## Build the project
`npm run build`

## Run the project build
`npx serve`

## Instructions and steps

### `Step 1: create folder react-typescript-webpack directory`

### `Step 2: Under root directory create build, src directory, .gitignore file add ignore files and directories`

### `Step 3: Initialize project with below command`
#### `npm init -y`

### `Step 4: Create index.html, app.tsx, index.tsx under src directory and install below dependencies`
#### `npm i react react-dom`
#### `npm i -D typescript @types/react @types/react-dom`
#### `Create tsconfig.json file under the root directory and setup the configuration`

### `Step 5: Create .babelrc file under the root directory and setup the configuration. Install below packages`
#### `npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`


### `Step 6: Create webpack/webpack.config.js file and install package`
#### `npm i -D babel-loader`

### `Step 7: Install css loader package and setup css configuration in webpack`
#### `npm i -D css-loader style-loader`

## Setup webpack for multiple environments
### `step 1: remane webpack.config.js to webpack.common.js and remove mode property`

### `step 2: create 3 new files 1. webpack.dev.js, 2. webpack.prod.js and 3. webpack.config.js`

### `step 3: install below package`
#### `npm i -D webpack-merge`

### `step 4: update scripts`
#### `"start": webpack serve --config webpack/webpack.config.js --env env=dev --open`
#### `"build": "webpack --config webpack/webpack.config.js --env env=prod",`