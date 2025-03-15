import {NavigationProp} from '@react-navigation/native';
import {favoriteItemTypes} from '../../../types/api';
import {RootStackParamList} from '../../../navigation/stackNavigation/types';

export interface HooksProps {
  item: {currency: string; rate: number};
  navigation: NavigationProp<RootStackParamList>;
}

export interface UseTranslatedResult {
  onSavePressHandler: ({currency, rate, base}: favoriteItemTypes) => void;
  favorite: boolean;
}
