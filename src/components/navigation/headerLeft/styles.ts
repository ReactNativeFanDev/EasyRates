import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width * 0.08;

export const styles = StyleSheet.create({
  container: {
    height: width,
    width: width * 1.5,
    marginLeft: Dimensions.get('screen').width * 0.025,
  },
});
