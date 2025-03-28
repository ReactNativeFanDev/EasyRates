import {createAsyncThunk} from '@reduxjs/toolkit';

import {API_KEY} from '@env';
import {handleBaseError} from '../../utils/errorHandler';
import {ExchangeRatesTypes, fetchExchangeRatesTypes} from '../../types/api';

export const fetchExchangeRates = createAsyncThunk(
  'exchangeRates/fetch',
  async (
    {base, forceUpdate}: {base: string; forceUpdate?: boolean},
    {getState, rejectWithValue},
  ) => {
    const state = getState() as {exchangeRates: ExchangeRatesTypes};
    const lastUpdated = state.exchangeRates.lastUpdated;

    if (
      !forceUpdate &&
      lastUpdated &&
      Date.now() - lastUpdated < 30 * 60 * 1000
    ) {
      console.log('Дані актуальні, оновлення не потрібне');
      return rejectWithValue('Дані актуальні, оновлення не потрібне');
    }

    try {
      const response = await fetch(
        `https://data.fixer.io/api/latest?access_key=${API_KEY}&base=${base}`,
      );

      const data: fetchExchangeRatesTypes = await response.json();

      if (!data.success) {
        throw new Error('Не вдалося отримати курси валют');
      }

      return {
        rates: data.rates,
        base: data.base,
        date: data.date,
        lastUpdated: Date.now(),
      };
    } catch (error) {
      handleBaseError(error);

      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  },
);
