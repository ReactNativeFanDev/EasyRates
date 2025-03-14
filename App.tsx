import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/stackNavigation';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
