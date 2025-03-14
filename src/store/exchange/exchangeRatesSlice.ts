import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchExchangeRates} from './exchangeRatesActions';
import {ExchangeRatesState} from './exchangeRatesTypes';

const initialState: ExchangeRatesState = {
  rates: {},
  base: 'EUR',
  date: '',
  lastUpdated: null,
  loading: false,
  error: null,
};

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    signInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchExchangeRates.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchExchangeRates.fulfilled,
        (
          state,
          action: PayloadAction<{
            rates: Record<string, number>;
            lastUpdated: number;
            base: string;
            date: string;
          }>,
        ) => {
          state.loading = false;
          state.rates = action.payload.rates;
          state.base = action.payload.base;
          state.date = action.payload.date;
          state.lastUpdated = action.payload.lastUpdated;
        },
      )
      .addCase(
        fetchExchangeRates.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.loading = false;
          state.error =
            typeof action.payload === 'string'
              ? action.payload
              : 'Сталася помилка';
        },
      );
  },
});

export default exchangeRatesSlice.reducer;
