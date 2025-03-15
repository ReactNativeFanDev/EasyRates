export interface HooksProps {}

export interface UseTranslatedResult {
  favoritesArray: {
    title: string;
    data: {
      currency: string;
      rate: number;
    }[];
  }[];
}
