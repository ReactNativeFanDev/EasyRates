import {exchangeItem} from '../types';

export interface HooksProps {}

export interface UseTranslatedResult {
  ratesArray: exchangeItem[];
  base: string;
}
