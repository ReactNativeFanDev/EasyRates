export interface ExchangeRatesTypes {
  rates: ratesTypes;
  lastUpdated: number | null;
  loading: boolean;
  error: string | null;
  base: string;
  date: string;
}

export interface fetchExchangeRatesTypes {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: ratesTypes;
}

export interface favoriteItemTypes {
  currency: string;
  rate: number;
  base: string;
}

export interface ratesTypes extends Record<string, number> {}
