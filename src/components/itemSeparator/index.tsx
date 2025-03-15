import {View} from 'react-native';
import {styles} from './styles';

export default function ItemSeparatorComponent({height}: {height: number}) {
  return <View style={height > 0 ? {height} : styles.container} />;
}
