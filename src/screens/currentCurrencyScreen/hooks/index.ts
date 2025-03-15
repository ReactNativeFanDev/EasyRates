import {Alert} from 'react-native';
import {useAppSelector} from '../../../store';
import {
  addFavorite,
  removeFavorite,
} from '../../../store/exchange/exchangeRatesSlice';
import {HooksProps, UseTranslatedResult} from './types';
import {useDispatch} from 'react-redux';
import {favoriteItemTypes} from '../../../types/api';

export default function useCurrentCurrencyHook({
  item,
  navigation,
}: HooksProps): UseTranslatedResult {
  const favoritesArray = useAppSelector(state => state.exchangeRates.favorites);
  const favorite = !!favoritesArray.some(fav => fav.currency === item.currency);
  const dispatch = useDispatch();

  function onSavePressHandler({currency, rate, base}: favoriteItemTypes) {
    if (favorite) {
      dispatch(removeFavorite({currency, rate, base}));
      navigation.goBack();
      Alert.alert('Done', 'You have successfully deleted the currency');
    } else {
      dispatch(addFavorite({currency, rate: 0, base}));
      navigation.goBack();
      Alert.alert('Done', 'You have successfully saved the currency');
    }
  }

  return {
    onSavePressHandler,
    favorite,
  };
}
