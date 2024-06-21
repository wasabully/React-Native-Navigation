// TODO: TASK #1049

import { useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import NavigationTopTabs from './NavigationTopTab';
import { categories } from '../../card/listCategory';
import { IconButton } from 'react-native-paper';
import { DrawerActions, useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [currentCategory, setCurrentCategory] = useState({ id: null });

  const setCategory = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    setCurrentCategory(category);
  };

  const renderCategories = () => {
    const filteredCategories = categories.filter(
      (category) => category.idParent === currentCategory.id,
    );
    return filteredCategories.map((category) => (
      <DrawerItem
        key={category.id}
        label={category.name}
        onPress={() => setCategory(category.id)}
      />
    ));
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {renderCategories()}
    </DrawerContentScrollView>
  );
}

const NavigationDrawer = function () {
  const navigation = useNavigation();
  const RightMenu = () => {
    return (
      <IconButton
        icon="menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{ marginRight: 10 }}
        accessibilityLabel="Open Drawer"
      />
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerRight: () => <RightMenu /> }}
    >
      <Drawer.Screen
        name="Назад"
        component={NavigationTopTabs}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Категории',
          drawerPosition: 'right',
        }}
      />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
