import {favoriteItemTypes} from '../../../types/api';

export interface HooksProps {
  item: {currency: string; rate: number};
}

export interface UseTranslatedResult {
  onSavePressHandler: ({currency, rate, base}: favoriteItemTypes) => void;
  favorite: boolean;
}
