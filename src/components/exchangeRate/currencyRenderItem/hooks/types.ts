import {exchangeItem} from '../../../../screens/exchangeRateScreen/types';

export interface HooksProps {
  item: exchangeItem;
  base: string;
}

export interface CurrencyRenderResult {
  onPress: () => void;
}
