import {NavigationProp, RouteProp} from '@react-navigation/native';
import {
  RootStackParamList,
  Routes,
} from '../../navigation/stackNavigation/types';

export type Props = {
  route: RouteProp<RootStackParamList, Routes.CurrentCurrencyScreen>;
  navigation: NavigationProp<RootStackParamList>;
};
