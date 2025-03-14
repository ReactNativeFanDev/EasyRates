import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  ExchangeRatesState,
  fetchExchangeRatesTypes,
} from './exchangeRatesTypes';
import {API_KEY} from '@env';
import {handleBaseError} from '../../utils/errorHandler';

export const fetchExchangeRates = createAsyncThunk(
  'exchangeRates/fetch',
  async (_, {getState, rejectWithValue}) => {
    const state = getState() as {exchangeRates: ExchangeRatesState};
    const lastUpdated = state.exchangeRates.lastUpdated;

    if (lastUpdated && Date.now() - lastUpdated < 10 * 60 * 10000) {
      console.log('Дані актуальні, оновлення не потрібне');
      return rejectWithValue('Дані актуальні, оновлення не потрібне');
    }

    try {
      const response = await fetch(
        `https://data.fixer.io/api/latest?access_key=${API_KEY}`,
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
