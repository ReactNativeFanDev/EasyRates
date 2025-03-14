export interface ExchangeRatesState {
  rates: Record<string, number>;
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
  rates: Record<string, number>;
}
