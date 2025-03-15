import {Pressable, Text} from 'react-native';
import icons from 'currency-icons';
import {styles} from './styles';
import useHeaderRightHook from './hooks';

export default function HeaderRightRate() {
  const {onPress, base} = useHeaderRightHook();

  return (
    <Pressable
      onPress={onPress}
      hitSlop={12}
      style={({pressed}) => [styles.container, pressed && styles.onPress]}>
      <Text style={styles.currencyText}>{base}</Text>

      <Text style={styles.symbolText}>{icons[base]?.symbol}</Text>
    </Pressable>
  );
}
