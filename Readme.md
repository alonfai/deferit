# React Native List App
  
This project was based on the [Expo CLI] template to render a Mobile first app with a single screen.

It consists of single scrollable bills list of the user taking data from a custom [Mocked Server](http://jsonplaceholder.typicode.com/). It uses React-Native 0.63.4 and Expo 42 versions that includes:

o a thumbnail and clickable image of a bill. If I click on this thumbnail, a modal will show the image in full.

o the amount of my bill

o date of my bill in dd/MM/yyyy format

o status of my bill (processing, scheduled, unable to pay, paid) renders as an colored icon

o Additional information icon pop-up next to the status field with data to give more information about this bill
  
#### Notes:

o The list will be lazy loaded with a pre-defined 10 items at a time

o An infinite scroll to load next batch of bills if there are any
  
#### Libraries used across the solution:

- Typescript 4.x+

- ESLint + Prettier for coding standard and formatting

- Husky + lint-staged for git hooks support
- [Cypress](https://www.cypress.io/) for E2E testing framework (**TODO**)
-  [Jest](https://jestjs.io/) + [react-native-testing-library](https://github.com/callstack/react-native-testing-library) for unit tests
- [date-fns](https://date-fns.org/) for date manipulation
- [React-Query](https://react-query.tanstack.com/) for caching/fetching data and manage the state automatically

The project uses environment variables to define the API domain endpoint using Expo's [app manifest `.extra` field](https://docs.expo.dev/guides/environment-variables/):
```
API_URL
```
  
  ## Pre requirements
  
Have NPM v7.x and node 16.x on your machine and execute the following.

  ```js

npm install 

// Alternatively you can use 

npm ci
```

  ## Available Scripts

  In the project directory, you can run:

### `npm start`
 
Open the Expo dashboard and help run/debug the app across iOS/Andriod/Web in development/production modes

### `npm run android`

Starts the app locally in Android Emulator. You'll need to make sure you have an emulator installed. See instructions [here](https://docs.expo.dev/workflow/android-studio-emulator/)

### `npm run ios`

Starts the app locally in iOS Emulator. You'll need to make sure you have an emulator installed. See instructions [here](https://docs.expo.dev/workflow/ios-simulator/)

### `npm run web`

Starts the app locally in browser environment. 

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
Create native iOS and Android project files. Learn more:  https://docs.expo.dev/workflow/customizing/

### `npm test`

Launches the Jest test runner across the app.

### `npm run test:watch`

Launches the Jest test runner across the app in interactive watch mode.

### `npm run test:ci`

Launches the Jest test runner across the app with an integrated coverage reporter.

### `npm run lint`

Executes ESLint on all files (ts,tsx) inside the app folders

### `npm run lint:fix`

Executes ESLint with auto fix problems (ts,tsx) inside the app folders

### `npm run cy:open`

Open Cypress E2E test runner dashboard in the background

### `npm run cy:run`

Executes Cypress E2E test runner in headless mode

### `npm run e2e`

Launch the app in web mode and executes the E2E tests in interactice mode within the dashboard

### `npm run e2e:ci`

Launch the app in web mode and executes the E2E tests in headless mode
  