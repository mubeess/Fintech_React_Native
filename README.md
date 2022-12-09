<a name="readme-top"></a>

# QUOLA-APP

Quola-App is a react-native based UI application that improves the world of FinTech.

## Getting started

### Prerequisites

- Install LTS version of [`Node.js`](https://nodejs.org/en/)
- Run `yarn install` in the root directory of the project
- Run `yarn start` in the root directory of the project

### Recommendations

- Install the latest version of [`vsCode`](https://code.visualstudio.com/)
- Open `vsCode` and install [workspace recommended extenstions](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies

- [`TypeScript`](https://www.typescriptlang.org/) - strongly-typed JavaScript wrapper
- [`Expo`](https://expo.dev/) - react-native framework with support for web
- [`NativeBase`](https://nativebase.io/) - react-native component library with support for web
- [`ReactNavigation`](https://reactnavigation.org/) - react-native navigation library with support for web
- [`Zustand`](https://www.npmjs.com/package/zustand) - state management library
- [`EsLint`](https://eslint.org/) - code linter
- [`Prettier`](https://prettier.io/) - code style formatter
- [`Release Please`](https://github.com/googleapis/release-please) - automated versioning, CHANGELOG, and releases

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development practices

### Traceability

For cleaner documentation, it is ideal to create a branch off of `main` from a GitHub issue to link the story being worked on to the code.
When the work on the branch is done then merge back to `main` (see below) with the link to the issue intact.

### Pull requests to `main` branch

Pull requests to `main` should be titled according to the [`conventional commits`](https://www.conventionalcommits.org/).
This will allow `Release Please` tool to automate versioning, CHANGELOG, and releases.
For this reason, pull requests to `main` will have a check to make sure that at least the title of pull requests complies
with `conventional commits`. It is important to have the same `conventional commits`
compliant message so that `Release Please` functions as expected.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
