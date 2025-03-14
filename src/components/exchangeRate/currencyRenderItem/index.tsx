import {Dimensions, Image, Platform, Text, View} from 'react-native';
import {ExchangeItem} from '../../../screens/exchangeRateScreen/types';
import {appColors, fontSize} from '../../../constants';
import icons from 'currency-icons';

export default function CurrencyRenderItem({
  item,
  base,
}: {
  item: ExchangeItem;
  base: string;
}) {
  return (
    <View
      style={{
        width: '94%',
        backgroundColor: appColors.secondary800,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      }}>
      <View
        style={{
          backgroundColor:
            Platform.OS === 'ios'
              ? appColors.secondary900
              : appColors.background,
          width: Dimensions.get('screen').width * 0.12,
          height: Dimensions.get('screen').width * 0.12,
          shadowColor: appColors.secondary0,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius: Dimensions.get('screen').width * 0.06,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons[item.currency]?.symbol ? (
          <Text
            style={{
              color: appColors.secondary0,
              fontSize: fontSize(12),
            }}>
            {icons[item.currency]?.symbol}
          </Text>
        ) : (
          <Image
            source={{uri: icons[item.currency]?.icon}}
            style={{
              width: Dimensions.get('screen').width * 0.05,
              height: Dimensions.get('screen').width * 0.05,
            }}
          />
        )}
      </View>

      <View style={{gap: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: appColors.secondary0,
              fontSize: fontSize(12),
              width: Dimensions.get('screen').width * 0.3,
            }}>
            1
          </Text>

          <View
            style={{
              height: '100%',
              width: 2,
              backgroundColor: appColors.secondary500,
              marginLeft: 5,
              marginRight: 20,
            }}
          />

          <Text
            style={{
              color: appColors.secondary0,
              fontSize: fontSize(12),
            }}>
            {base}
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            backgroundColor: appColors.secondary500,
            height: 2,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: appColors.secondary0,
              fontSize: fontSize(12),
              width: Dimensions.get('screen').width * 0.3,
            }}>
            {item.rate.toFixed(2)}
          </Text>

          <View
            style={{
              height: '100%',
              width: 2,
              backgroundColor: appColors.secondary500,
              marginLeft: 5,
              marginRight: 20,
            }}
          />

          <Text
            style={{
              color: appColors.secondary0,
              fontSize: fontSize(12),
            }}>
            {item.currency}
          </Text>
        </View>
      </View>
    </View>
  );
}
