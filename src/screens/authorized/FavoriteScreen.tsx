import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectFavorites } from './../../reducers/favorite';
import data from '../../card/card';
import CardItem from '../../components/CardItem';

const FavoriteScreen = () => {
  const favorites = useSelector(selectFavorites);
  const favoriteCards = data.filter((item) => favorites.includes(item.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteCards}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
  },
});

export default FavoriteScreen;
