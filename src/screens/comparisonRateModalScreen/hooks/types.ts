import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/stackNavigation/types';

export interface HooksProps {
  navigation: NavigationProp<RootStackParamList>;
}

export interface HooksResult {
  ratesArray: {currency: string; rate: number}[];
  updateBaseRatePressHandler: ({base}: {base: string}) => void;
}
