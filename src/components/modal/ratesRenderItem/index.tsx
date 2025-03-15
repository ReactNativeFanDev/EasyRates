import {Dimensions, Pressable, Text, View} from 'react-native';

import OpenSvg from '../../../assets/svg/openSvg';
import {appColors} from '../../../constants';
import {styles} from './styles';

export default function RatesRenderItem({
  item,
  updateBaseRatePressHandler,
}: {
  item: {currency: string};
  updateBaseRatePressHandler: ({base}: {base: string}) => void;
}) {
  const {currency} = item;

  return (
    <View style={styles.rateItemContainer}>
      <Text style={styles.currencyText}>{currency}</Text>

      <Pressable
        onPress={() => updateBaseRatePressHandler({base: currency})}
        style={({pressed}) => pressed && styles.pressedStyle}>
        <OpenSvg
          size={Dimensions.get('screen').width * 0.075}
          color={appColors.primary}
        />
      </Pressable>
    </View>
  );
}
