import {Dimensions, Pressable, Text, View} from 'react-native';
import {appColors, fakeGrafData} from '../../constants';
import {LineChart} from 'react-native-gifted-charts';
import useCurrentCurrencyHook from './hooks';
import {styles} from './styles';
import {Props} from './types';

export default function CurrentCurrencyScreen({route, navigation}: Props) {
  const {base, item} = route.params;
  const {onSavePressHandler, favorite} = useCurrentCurrencyHook({
    item,
    navigation,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.currencyText}>Currency {item.currency}</Text>

      <View style={styles.chartContainer}>
        <LineChart
          data={fakeGrafData}
          areaChart
          width={Dimensions.get('screen').width * 0.8}
          startFillColor1={appColors.primary700}
          endFillColor1={appColors.background}
          color={appColors.primary}
          xAxisColor={appColors.secondary0}
          yAxisColor={appColors.secondary0}
          color1={appColors.primary}
          dataPointsColor1={appColors.primary}
          yAxisTextStyle={{color: appColors.secondary0}}
          startOpacity1={0.7}
          endOpacity1={0.3}
          height={Dimensions.get('screen').height * 0.4}
        />
      </View>

      <Text style={styles.exchangeRateText}>current exchange rate</Text>

      <View style={styles.rateContainer}>
        <Text style={styles.rateText}>
          {item.rate.toFixed(2)} {item.currency}
        </Text>

        <Text style={styles.equalsText}>=</Text>

        <Text style={styles.rateText}>1 {base}</Text>
      </View>

      <View style={styles.flex} />

      <Pressable
        hitSlop={30}
        onPress={() =>
          onSavePressHandler({currency: item.currency, rate: item.rate, base})
        }
        style={({pressed}) => [
          styles.saveButton,
          pressed && styles.saveButtonPressed,
        ]}>
        <Text style={styles.saveButtonText}>
          {favorite ? 'Remove' : 'Save'}
        </Text>
      </Pressable>
    </View>
  );
}
