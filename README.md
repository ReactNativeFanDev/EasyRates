This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install Dependencies:

Run npm install or yarn to install JavaScript dependencies.

```sh
# Using npm
npm install
```

## Step 2: Set Up Native Dependencies:

For iOS: Run bundle exec pod install in the ios directory.

```sh
npx pod-install
```

## Step 3: Build and run your app

For iOS: Use npm run ios or yarn ios to launch the app in the iOS Simulator.
For Android: Use npm run android or yarn android to launch the app in the Android Emulator.

### Android

```sh
# Using npm
npm run android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).


```sh
# Using npm
npm run ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Alternative

Open the project in Android Studio or Xcode and build/run directly.


## Chosen Architecture and Design Decisions

The app is designed with the following architecture and design principles:

- **React Native**: Built using React Native to ensure cross-platform compatibility and a native-like user experience on both iOS and Android devices.

- **Component-Based Architecture**: The app follows a modular design, with reusable components organized by feature (e.g., `exchangeRate`, `favoriteList`) to promote maintainability and scalability.

- **State Management**: Centralized state management is achieved using Redux Toolkit, which simplifies state handling and improves code readability. Additionally, `redux-persist` is used to persist state across sessions, ensuring a seamless user experience.

- **Navigation**: Implements stack and tab navigation using the `react-navigation` library, providing an intuitive and smooth navigation experience. The navigation folder contains configurations for both stack and tab navigators.

## App Structure and Main Components

- **store**: Manages application state using Redux Toolkit. Includes:
    - `exchangeRatesSlice`: Handles exchange rate data, favorites, and base currency.
    - `persistConfig`: Configures redux-persist to store data in AsyncStorage.
- **components**: Contains reusable UI components, such as:
    - `CurrencyRenderItem`: Renders individual currency items.
    - `FavoriteListEmptyComponent`: Displays a placeholder when no favorites are selected.
- **screens**: Contains screen components for different app views:
    - `ExchangeRateScreen`: Displays exchange rates.
    - `FavoriteListScreen`: Manages the user's favorite currencies.
- **navigation**: Configures stack and tab navigators for seamless navigation.
- **utils**: Includes utility functions for error handling and formatting.
- **constants**: Stores app-wide constants, such as API endpoints or default values.

## Offline Mode Implementation

Offline mode is achieved using:

- **redux-persist**: Persists the Redux state to AsyncStorage, ensuring that exchange rate data, favorites, and the base currency are available even when offline.
- **AsyncStorage**: Acts as the local storage mechanism for caching data.
- **Rehydration**: On app launch, the persisted state is rehydrated to restore the last known data.


## Additional Features or Libraries Used

- **react-native-svg**: Used for rendering SVG assets, enabling scalable and high-quality vector graphics in the app.
- **redux-persist**: Ensures data persistence across app sessions by storing Redux state in AsyncStorage. This allows the app to retain user preferences, exchange rate data, and favorites even when offline.
- **react-navigation**: Provides stack and tab navigation for a smooth and intuitive user experience. Includes libraries such as:
    - `@react-navigation/native`
    - `@react-navigation/native-stack`
    - `@react-navigation/bottom-tabs`
- **AsyncStorage**: Acts as the local storage mechanism for caching data, supporting offline functionality.
- **react-native-reanimated**: Enables smooth animations and transitions for an enhanced user interface.
- **react-native-gifted-charts**: Used for creating visually appealing and interactive charts, such as historical exchange rate trends.
- **react-native-responsive-fontsize**: Ensures text scales appropriately across different screen sizes for better readability.
- **currency-icons**: Provides currency icons for a more visually engaging user interface.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
