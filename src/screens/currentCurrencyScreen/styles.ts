import {Dimensions, StyleSheet} from 'react-native';
import {appColors, fontSize} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.background,
    flex: 1,
  },
  currencyText: {
    color: appColors.secondary0,
    fontSize: fontSize(16),
    textAlign: 'center',
    marginTop: 12,
  },
  chartContainer: {
    width: Dimensions.get('screen').width * 0.95,
    alignSelf: 'center',
    marginTop: 12,
  },
  exchangeRateText: {
    textTransform: 'capitalize',
    fontSize: fontSize(16),
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFF',
  },
  rateContainer: {
    backgroundColor: appColors.secondary800,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 15,
    width: '75%',
    gap: 15,
  },
  rateText: {
    color: appColors.secondary0,
    fontSize: fontSize(16),
  },
  equalsText: {
    color: appColors.secondary0,
    fontSize: fontSize(22),
    fontWeight: '300',
  },
  saveButton: {
    backgroundColor: appColors.primary,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 12,
    width: '85%',
  },
  saveButtonPressed: {
    opacity: 0.75,
  },
  saveButtonText: {
    fontSize: fontSize(16),
    textAlign: 'center',
    paddingVertical: 6,
  },
  flex: {
    flex: 1,
  },
});
