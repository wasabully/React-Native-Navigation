import { Card, IconButton, Paragraph, Title } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, toggleFavorite } from '../../reducers/favorite';

const CardDetailsScreen = ({ route }) => {
  const { item } = route.params;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  return (
    <TouchableOpacity style={styles.card}>
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
        <Paragraph style={styles.info}>Описание: {item.description}</Paragraph>
        <Paragraph style={styles.info}>Телефон: {item.phone}</Paragraph>
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
  },
  title: {
    fontWeight: '800',
    fontSize: 15,
    marginBottom: 4,
  },
  info: {
    fontSize: 15,
    color: '#666',
    marginBottom: 2,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 2,
  },
});

export default CardDetailsScreen;
