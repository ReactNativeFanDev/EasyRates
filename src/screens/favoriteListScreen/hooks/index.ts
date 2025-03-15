import {useAppSelector} from '../../../store';
import {UseTranslatedResult} from './types';

export default function useFavoriteListHook(): UseTranslatedResult {
  const data = useAppSelector(state => state.exchangeRates.favorites);

  const favoritesArray = data.reduce((acc, item) => {
    const section = acc.find(s => s.title === item.base);
    if (section) {
      section.data.push(item);
    } else {
      acc.push({title: item.base, data: [item]});
    }
    return acc;
  }, [] as {title: string; data: typeof data}[]);

  return {
    favoritesArray,
  };
}
