import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import exchangeRatesReducer from './exchange/exchangeRatesSlice';

const exchangeRatesPersistConfig = {
  key: 'exchangeRates',
  storage: AsyncStorage,
  whitelist: ['rates', 'lastUpdated', 'favorites', 'base'],
};

const persistedExchangeRatesReducer = persistReducer(
  exchangeRatesPersistConfig,
  exchangeRatesReducer,
);

const store = configureStore({
  reducer: {
    exchangeRates: persistedExchangeRatesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;
