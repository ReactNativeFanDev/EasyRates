import {HooksProps, HooksResult} from './types';
import {useAppDispatch, useAppSelector} from '../../../store';
import {fetchExchangeRates} from '../../../store/exchange/exchangeRatesActions';

export default function useComparisonRateHook({
  navigation,
}: HooksProps): HooksResult {
  const dispatch = useAppDispatch();
  const rates = useAppSelector(state => state.exchangeRates.rates);

  function updateBaseRatePressHandler({base}: {base: string}) {
    dispatch(fetchExchangeRates({base, forceUpdate: true}));
    navigation.goBack();
  }

  const ratesArray = Object.entries(rates).map(([currency, rate]) => ({
    currency,
    rate,
  }));

  return {ratesArray, updateBaseRatePressHandler};
}
