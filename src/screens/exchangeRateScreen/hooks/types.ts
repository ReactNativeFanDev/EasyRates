import {ExchangeItem} from '../types';

export interface HooksProps {}

export interface UseTranslatedResult {
  ratesArray: ExchangeItem[];
  base: string;
}
