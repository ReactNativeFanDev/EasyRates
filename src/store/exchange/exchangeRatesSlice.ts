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
  favorites: [],
};

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    signInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addFavorite: (
      state,
      action: PayloadAction<{currency: string; rate: number; base: string}>,
    ) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (
      state,
      action: PayloadAction<{currency: string; rate: number; base: string}>,
    ) => {
      state.favorites = state.favorites.filter(
        fav =>
          !(
            fav.currency === action.payload.currency &&
            fav.base === action.payload.base
          ),
      );
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

          console.log(action.payload.rates);

          state.favorites = state.favorites.map(fav => {
            const newRate = action.payload.rates[fav.currency];
            if (newRate !== undefined) {
              console.log(
                `Updating rate for ${fav.currency}${fav.base}: ${fav.rate} => ${newRate}`,
              );
              return {...fav, rate: newRate};
            }
            return fav;
          });
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

export const {addFavorite, removeFavorite} = exchangeRatesSlice.actions;
export default exchangeRatesSlice.reducer;
