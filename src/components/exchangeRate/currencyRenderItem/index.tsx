import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OpenSvg from '../../../assets/svg/openSvg';
import {appColors} from '../../../constants';
import CurrencyRenderHook from './hooks';
import icons from 'currency-icons';
import {styles} from './styles';
import {exchangeItem} from '../../../screens/exchangeRateScreen/types';

export default function CurrencyRenderItem({
  item,
  base,
}: {
  item: exchangeItem;
  base: string;
}) {
  const {onPress} = CurrencyRenderHook({item, base});

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icons[item.currency]?.symbol ? (
          <Text style={styles.iconText}>{icons[item.currency]?.symbol}</Text>
        ) : (
          <Image
            source={{uri: icons[item.currency]?.icon}}
            style={styles.iconImage}
          />
        )}
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.textWithWidth}>1</Text>

          <View style={styles.divider} />

          <Text style={styles.text}>{base}</Text>
        </View>

        <View style={styles.horizontalDivider} />

        <View style={styles.row}>
          <Text style={styles.textWithWidth}>{item.rate.toFixed(2)}</Text>

          <View style={styles.divider} />

          <Text style={styles.text}>{item.currency}</Text>
        </View>
      </View>

      <Pressable
        onPress={onPress}
        hitSlop={33}
        style={({pressed}) =>
          StyleSheet.compose(pressed && styles.onPress, styles.buttonContainer)
        }>
        <OpenSvg
          size={Dimensions.get('screen').width * 0.08}
          color={appColors.primary}
        />
      </Pressable>
    </View>
  );
}
