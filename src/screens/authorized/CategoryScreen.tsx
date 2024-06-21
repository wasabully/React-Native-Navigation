import { FlatList, View, StyleSheet } from 'react-native';
import CardItem from '../../components/CardItem';
import useRandomCard from '../../hooks/useRandomCard';
const CategoryScreen = () => {
  const randomCard = useRandomCard();
  return (
    <View style={styles.container}>
      <FlatList
        data={randomCard}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: '#f7f7f7',
  },
  flatListContent: {
    paddingBottom: 8,
  },
});

export default CategoryScreen;
