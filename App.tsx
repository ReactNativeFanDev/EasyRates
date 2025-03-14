import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/stackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
