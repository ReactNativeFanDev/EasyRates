import EmptyWallet from '../../../assets/svg/emptyWallet';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {appColors} from '../../../constants';
import {styles} from './styles';

export default function FavoriteListEmptyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your list of favorite rates is empty</Text>
      </View>

      <View
        style={StyleSheet.compose(
          styles.textContainer,
          styles.bottomTextContainer,
        )}>
        <Text style={styles.text}>
          To add, go to the exchange rates section, open a rate, and then you
          will be able to save it to your favorites
        </Text>
      </View>

      <EmptyWallet
        color={appColors.secondary500}
        size={Dimensions.get('screen').width * 0.3}
      />
    </View>
  );
}
