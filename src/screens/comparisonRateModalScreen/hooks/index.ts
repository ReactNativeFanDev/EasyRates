import {HooksResult} from './types';
import {useAppSelector} from '../../../store';

export default function useComparisonRateHook(): HooksResult {
  const rates = useAppSelector(state => state.exchangeRates.rates);

  const ratesArray = Object.entries(rates).map(([currency, rate]) => ({
    currency,
    rate,
  }));

  return {ratesArray};
}
