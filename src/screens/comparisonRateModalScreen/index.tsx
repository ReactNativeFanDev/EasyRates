import {FlatList, View} from 'react-native';
import useComparisonRateHook from './hooks';
import {styles} from './styles';
import RatesRenderItem from '../../components/modal/ratesRenderItem';
import ItemSeparatorComponent from '../../components/itemSeparator';

export default function ComparisonRateModalScreen() {
  const {ratesArray} = useComparisonRateHook();

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={ratesArray}
        renderItem={RatesRenderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ItemSeparatorComponent({height: 20})}
        ListHeaderComponent={ItemSeparatorComponent({height: 20})}
        indicatorStyle="white"
      />
    </View>
  );
}
