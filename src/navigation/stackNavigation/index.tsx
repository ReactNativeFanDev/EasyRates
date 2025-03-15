import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './types';
import TabNavigator from '../tabNavigator';
import {
  CurrentCurrencyOptions,
  screenOptions,
  screenOptionsModal,
} from './options';
import CurrentCurrencyScreen from '../../screens/currentCurrencyScreen';
import {RootStackParamList} from './types';
import ComparisonRateModalScreen from '../../screens/comparisonRateModalScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={screenOptions}>
        <Stack.Screen name={Routes.TabBar} component={TabNavigator} />
        <Stack.Screen
          name={Routes.CurrentCurrencyScreen}
          component={CurrentCurrencyScreen}
          options={CurrentCurrencyOptions}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          options={screenOptionsModal}
          name={Routes.ComparisonRateModalScreen}
          component={ComparisonRateModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
