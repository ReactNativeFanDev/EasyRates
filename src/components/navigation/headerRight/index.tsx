import {Pressable, Text} from 'react-native';
import icons from 'currency-icons';
import { styles } from './styles';

export default function HeaderRightRate() {
  return (
    <Pressable
      hitSlop={12}
      style={({pressed}) => [styles.container, pressed && styles.onPress]}>
      <Text style={styles.symbolText}>EUR {icons['EUR']?.symbol}</Text>
    </Pressable>
  );
}
