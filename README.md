# VSCode TypeScript node starter
Starter for developing Node apps in TypeScript with setup for VS Code debugging with no global dependencies.

 The follwing is setup out of the box:
* Linting via [tslint](https://palantir.github.io/tslint/)
* Testing via [ts-jest](https://github.com/kulshekhar/ts-jest) and [Jest](https://facebook.github.io/jest/)
* Dev Build/Compile/Run with [ts-node](https://github.com/TypeStrong/ts-node) and [nodemon](https://github.com/remy/nodemon)
* Running with [ts-node](https://github.com/TypeStrong/ts-node)
* Build via tsc to a /dist folder
* VSCode debugging

## Prerequisites

To start, **[node](https://nodejs.org)** is required.

**npm** (Node Package Manager) or **[yarn](https://yarnpkg.com)** can be used as package managers.

The [TypeScript](https://www.typescriptlang.org/) Compiler (tsc) is included and not required in your path.

## Getting started

Fork the repo and clone to your local machine, open a terminal / command line and get base packages:

via **npm**
```
    npm install
```

via **yarn**
```
    yarn
```

The src/index.ts is your entry point, it has an StartUp class that is called to start your application! Add additional files to the src folder and import to your src/index.ts file to use as per the hello_world example.

## Adding 3rd Party Packages

Open a terminal / command line, add a package:

via **npm**
```
    npm install packageName --save
```

via **yarn**
```
    yarn add packageName
```

If typings are missing/not included with the base packge, the majority of popular npm packages have typing defined on npm under the @types scoping.

Install as dev dependancies:

via **npm**
```
    npm install @types/packageName --save-dev
```

via **yarn**
```
    yarn add @types/packageName -D
```

Both steps can be completed in one by using [typac](https://github.com/ewgenius/typac).

Install typac globally:

via **npm**
```
    npm install -g typac
```

via **yarn**
```
    yarn add global typac
```

Install a package using the typac command:

e.g.
```
   typac moment
```

typac installs moment as a dependancy and @types/moment as a dev dependancy, via npm or if you have it installed yarn.

## Linting

The project is setup woth [tslint](https://palantir.github.io/tslint/) and the [tslint-language-service](https://github.com/angelozerr/tslint-language-service). Linting feedback should appear in the editor as you type, you can also run linting on the project:

via **npm**
```
    npm run lint
```

via **yarn**
```
    yarn lint
```

## Testing

The project is setup and configured with [ts-jest](https://github.com/kulshekhar/ts-jest) to run [Jest](https://facebook.github.io/jest/) tests.
Jest tests saved in the src folder will get picked up if the meet one of the following criteria:

* ts/tsx files saved in \_\_tests\_\_ folders
* files meeting the following patterns
    * *.test.ts
    * *.spec.ts

To run tests

via **npm**
```
    npm test
```

via **yarn**
```
    yarn test
```

There is a pre-test hook that runs [tslint](https://palantir.github.io/tslint/) before tests are run.

There is a very useful plugin [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) (free), an integrated continuous testing tool that adds test feedback to the editor and session based test watching.

Another (multi-editor) integrated continuous testing plugin is the renowned [Wallaby.js](https://wallabyjs.com/) (paid) that this base setup should work out of the box with.

## Building

Running the Build task in VSCode will compile TypeScript (/src) to es2015 JavaSript (/dist).

Shortcut on Windows/Linux: Ctrl + Shift + B, macOS: Command + Shift + B

## Debugging

Set breakpoints in your TS code and press F5 to start the debugger, happy debugging!

## Running via [ts-node](https://github.com/TypeStrong/ts-node)

To run the your code:

via **npm**
```
    npm start
```

via **yarn**
```
    yarn start
```

This command uses ts-node to run your application using your tsconfig.json compile options, without compiling to JavaScript files.

## Running Dev
To run the your code:

via **npm**
```
    npm run start:dev
```

via **yarn**
```
    yarn start:dev
```

This runs ts-node via nodemon so when changes are made the process is restarted for you.

## Running Dev with Tests
To run the your code:

via **npm**
```
    npm run start:dev:test
```

via **yarn**
```
    yarn start:dev:test
```

This runs ts-node via nodemon so when changes are made the process is restarted for you, and tests rerun.

## Live feedback

TS imports will work out of the box with [Quokka.js](https://quokkajs.com)

## Customisations

For editor defaults, adjust editor.config.

To change TS linting, adjust tslint.json.

Adjust the settings in tsconfig.json to change the compiled output.

