import {Dimensions, Text, View} from 'react-native';
import {appColors} from '../../../constants';
import EmptyWallet from '../../../assets/svg/emptyWallet';
import {styles} from './styles';

export default function ExchangeRateListEmptyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Unfortunately, data is not available, please try again later
        </Text>
      </View>

      <EmptyWallet
        color={appColors.secondary500}
        size={Dimensions.get('screen').width * 0.3}
      />
    </View>
  );
}
