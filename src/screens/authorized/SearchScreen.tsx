import { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import CardItem from '../../components/CardItem';
import data from '../../card/card';
import { IconButton } from 'react-native-paper';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const matchedData = data.filter((item) =>
      item.title.toLowerCase().includes(query.trim().toLowerCase()),
    );
    setFilteredData(matchedData);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredData(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Поиск..."
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
        {searchQuery.length > 0 && (
          <IconButton icon="close-circle-outline" onPress={clearSearch} iconColor="#000" />
        )}
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <CardItem item={item} />}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 20,
  },
});

export default SearchScreen;
