import {SafeAreaView, SectionList, Text, View} from 'react-native';
import {styles} from './styles';
import useFavoriteListHook from './hooks';
import CurrencyRenderItem from '../../components/exchangeRate/currencyRenderItem';
import ItemSeparatorComponent from '../../components/itemSeparator';
import FavoriteListEmptyComponent from '../../components/favoriteList/favoriteListEmptyComponent';

export default function FavoriteListScreen() {
  const {favoritesArray} = useFavoriteListHook();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SectionList
        ListEmptyComponent={FavoriteListEmptyComponent}
        indicatorStyle="white"
        sections={favoritesArray}
        keyExtractor={(item, index) => item.currency + index.toString()}
        renderItem={({item, section}) => (
          <CurrencyRenderItem item={item} base={section.title} />
        )}
        ItemSeparatorComponent={ItemSeparatorComponent}
        SectionSeparatorComponent={ItemSeparatorComponent}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
