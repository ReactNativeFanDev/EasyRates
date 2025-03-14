import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import useExchangeRateHook from './hooks';
import CurrencyRenderItem from '../../components/exchangeRate/currencyRenderItem';

function ItemSeparatorComponent() {
  return <View style={styles.itemSeparatorComponent} />;
}

export default function ExchangeRateScreen() {
  const {ratesArray, base} = useExchangeRateHook();

  return (
    <View style={styles.container}>
      <FlatList
        data={ratesArray}
        renderItem={props => <CurrencyRenderItem {...props} base={base} />}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={ItemSeparatorComponent}
        ListFooterComponent={ItemSeparatorComponent}
        indicatorStyle="white"
      />
    </View>
  );
}
