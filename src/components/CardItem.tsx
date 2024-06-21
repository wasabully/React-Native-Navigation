import { Card, IconButton, Paragraph, Title } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, toggleFavorite } from '../reducers/favorite';
import { useNavigation } from '@react-navigation/native';
import CardItemProps from '../interfaces/Card';

const CardItem = ({ item }: { item: CardItemProps }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Card', { item });
  };
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Card.Cover source={{ uri: item.source }} />
      <IconButton
        style={styles.favoriteIcon}
        icon={favorites.includes(item.id) ? 'heart' : 'heart-outline'}
        iconColor={favorites.includes(item.id) ? 'red' : 'white'}
        size={24}
        onPress={() => dispatch(toggleFavorite({ id: item.id }))}
      />
      <Card.Content>
        <Title style={styles.title}>{item.title}</Title>
        <Paragraph style={styles.info}>Адрес: {item.address}</Paragraph>
        <Paragraph style={styles.info}>Категория: {item.category}</Paragraph>
      </Card.Content>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: '800',
    fontSize: 15,
    marginBottom: 4,
  },
  info: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 2,
  },
});

export default CardItem;
