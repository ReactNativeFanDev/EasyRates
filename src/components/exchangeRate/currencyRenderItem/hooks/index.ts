import {useNavigation} from '@react-navigation/native';
import {CurrencyRenderResult, HooksProps} from './types';
import {
  Routes,
  RootStackParamList,
} from '../../../../navigation/stackNavigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function CurrencyRenderHook({
  base,
  item,
}: HooksProps): CurrencyRenderResult {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function onPress() {
    navigation.navigate(Routes.CurrentCurrencyScreen, {item, base});
  }

  return {onPress};
}
