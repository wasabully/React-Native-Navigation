import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import HomeScreen from '../../screens/authorized/HomeScreen';
import NavigationDrawer from './NavigationDrawer';
import SearchScreen from '../../screens/authorized/SearchScreen';
import FavoriteScreen from '../../screens/authorized/FavoriteScreen';

const Tab = createBottomTabNavigator();

const NavigationTab = function () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Главная') {
            iconName = 'home';
          } else if (route.name === 'Категории') {
            iconName = 'view-grid';
          } else if (route.name === 'Избранное') {
            iconName = 'heart';
          } else if (route.name === 'Поиск') {
            iconName = 'magnify';
          }

          return <IconButton icon={iconName} iconColor={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Главная" component={HomeScreen} />
      <Tab.Screen
        name="Категории"
        component={NavigationDrawer}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Избранное" component={FavoriteScreen} />
      <Tab.Screen name="Поиск" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
