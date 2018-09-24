[![https://www.remoteassembly.com](https://www.remoteassembly.com/img/logo_3-bb1a318535.svg)](https://github.com/remoteassembly)

# Remote Assembly react native starter kit


## Table of contents

- [Get started](docs/getStarted.md)
- [**Development workflow**](#development-workflow)
- [Technologies](docs/technologies.md)
- [Roadmap](#roadmap)
- [Credits](#credits)


## Development workflow

After you have set up the project using above instructions, you can use your favorite IDE or text editor to write code, and run the application from the command line. Turn on React Native hot module reloading in the app developer menu to update your application as you code.

##### Start the application in iOS simulator
```
$ react-native run-ios
```

##### Start the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
$ react-native run-android
```

##### Run unit tests
```
$ npm test
```

##### Generate code coverage report
```
$ npm run coverage
```


## Roadmap

- [x] Modular and well-documented structure for application code
- [x] [Redux](http://redux.js.org/) and [ImmutableJS](https://facebook.github.io/immutable-js/) for safe state management
- [x] [Redux Loop](https://github.com/raisemarketplace/redux-loop) for Elm-style controlled side effects
- [x] [React Navigation](https://reactnavigation.org/) for awesome navigation with 60fps transitions
- [x] Disk-persisted application state caching for offline support and snappy startup performance
- [x] [Standard](https://github.com/standard/standard) linter
- [ ] [Microsoft Code Push](http://microsoft.github.io/code-push) for instant JavaScript and images update
- [ ] redux-socket.io
- [ ] authentication
- [ ] Crash reporting
- [ ] Analytics
- [ ] Generators
- [ ] Standard folders structure
- [ ] Test coverage
- [ ] Standardised scripts
- [ ] User feedback service
- [ ] A-B testing
- [ ] App documentation & designs


## Credits

This project was forked from [Pepperoni app kit](https://github.com/futurice/pepperoni-app-kit), a React Native boilerplate by Futurice. It shares some features and design principles, but it wasn't the right fit for our needs.
