import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import useExchangeRateHook from './hooks';
import CurrencyRenderItem from '../../components/exchangeRate/currencyRenderItem';
import ItemSeparatorComponent from '../../components/itemSeparator';
import ExchangeRateListEmptyComponent from '../../components/exchangeRate/exchangeRateListEmptyComponent';

export default function ExchangeRateScreen() {
  const {ratesArray, base} = useExchangeRateHook();

  return (
    <View style={styles.container}>
      <FlatList
        data={ratesArray}
        ListEmptyComponent={ExchangeRateListEmptyComponent}
        renderItem={({item}) => <CurrencyRenderItem item={item} base={base} />}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={ItemSeparatorComponent}
        ListFooterComponent={ItemSeparatorComponent}
        indicatorStyle="white"
      />
    </View>
  );
}
