import {FlatList, View} from 'react-native';
import useComparisonRateHook from './hooks';
import {styles} from './styles';
import RatesRenderItem from '../../components/modal/ratesRenderItem';
import ItemSeparatorComponent from '../../components/itemSeparator';

import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/stackNavigation/types';

export default function ComparisonRateModalScreen({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  const {ratesArray, updateBaseRatePressHandler} = useComparisonRateHook({
    navigation,
  });

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={ratesArray}
        renderItem={({item}) => (
          <RatesRenderItem
            item={item}
            updateBaseRatePressHandler={updateBaseRatePressHandler}
          />
        )}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ItemSeparatorComponent({height: 20})}
        ListHeaderComponent={ItemSeparatorComponent({height: 20})}
        indicatorStyle="white"
      />
    </View>
  );
}
