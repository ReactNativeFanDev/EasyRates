import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store';
import {UseTranslatedResult} from './types';
import {fetchExchangeRates} from '../../../store/exchange/exchangeRatesActions';

export default function useExchangeRateHook(): UseTranslatedResult {
  const exchangeRates = useAppSelector(state => state.exchangeRates);
  const dispatch = useAppDispatch();

  const ratesArray = Object.entries(exchangeRates.rates).map(
    ([currency, rate]) => ({
      currency,
      rate,
    }),
  );

  useEffect(() => {
    dispatch(fetchExchangeRates({base: exchangeRates.base}));
  }, [dispatch, exchangeRates.base]);

  return {
    ratesArray,
    base: exchangeRates.base,
  };
}
