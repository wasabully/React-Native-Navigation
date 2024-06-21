import { FlatList, View, StyleSheet } from 'react-native';
import CardItem from '../../components/CardItem';
import useRandomCard from '../../hooks/useRandomCard';

const HomeScreen = () => {
  const randomCard = useRandomCard();

  return (
    <View style={styles.container}>
      <FlatList
        data={randomCard}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
  },
});

export default HomeScreen;
