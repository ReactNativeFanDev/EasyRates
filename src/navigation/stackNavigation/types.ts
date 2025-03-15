import {exchangeItem} from '../../screens/exchangeRateScreen/types';

export enum Routes {
  TabBar = 'TabBar',
  CurrentCurrencyScreen = 'CurrentCurrencyScreen',
  ComparisonRateModalScreen = 'ComparisonRateModalScreen',
}

export type RootStackParamList = {
  [Routes.TabBar]: undefined;
  [Routes.CurrentCurrencyScreen]: {base: string; item: exchangeItem};
  [Routes.ComparisonRateModalScreen]: undefined;
};
