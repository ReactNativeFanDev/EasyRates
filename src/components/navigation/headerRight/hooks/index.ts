import {useNavigation} from '@react-navigation/native';
import {HooksResult} from './types';
import {
  Routes,
  RootStackParamList,
} from '../../../../navigation/stackNavigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppSelector} from '../../../../store';

export default function useHeaderRightHook(): HooksResult {
  const base = useAppSelector(state => state.exchangeRates.base);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function onPress() {
    navigation.navigate(Routes.ComparisonRateModalScreen);
  }

  return {onPress, base};
}
