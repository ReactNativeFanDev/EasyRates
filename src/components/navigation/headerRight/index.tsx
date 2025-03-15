import {Pressable, StyleSheet, Text} from 'react-native';
import icons from 'currency-icons';
import {styles} from './styles';
import useHeaderRightHook from './hooks';

export default function HeaderRightRate() {
  const {onPress, base} = useHeaderRightHook();

  return (
    <Pressable
      onPress={onPress}
      hitSlop={12}
      style={({pressed}) =>
        StyleSheet.compose(pressed && styles.onPress, styles.container)
      }>
      <Text style={styles.currencyText}>{base}</Text>

      <Text style={styles.symbolText}>{icons[base]?.symbol}</Text>
    </Pressable>
  );
}
