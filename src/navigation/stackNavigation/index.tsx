import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './types';
import TabNavigator from '../tabNavigator';
import {screenOptions} from './options';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Routes.TabBar} component={TabNavigator} />
    </Stack.Navigator>
  );
}
