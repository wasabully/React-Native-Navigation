import { useEffect, useState } from 'react';
import { IconButton } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { categories } from '../../card/listCategory';

const TopTabs = createMaterialTopTabNavigator();
const BackButton = ({ onPress }) => (
  <IconButton
    icon="arrow-left"
    onPress={onPress}
    style={{ marginLeft: 10 }}
    accessibilityLabel="Go Back"
  />
);
const NavigationTopTabs = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={handleGoBack} />,
    });
  }, [navigation]);

  const setCategory = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    const subCategory = categories.some((category) => category.idParent === categoryId);
    if (category && !subCategory) {
      return;
    }
    setCurrentCategory(category);
  };

  const handleGoBack = () => {
    setCurrentCategory(
      (prevCategory) =>
        categories.find((category) => category.id === prevCategory?.idParent) || null,
    );
  };

  const mappingTopTabs = (currentCategoryId) => {
    const filteredCategories = categories.filter(
      (category) => category.idParent === currentCategoryId,
    );
    return filteredCategories.map((category) => (
      <TopTabs.Screen
        key={category.id}
        name={category.name}
        component={category.component}
        listeners={{
          tabPress: () => setCategory(category.id),
        }}
      />
    ));
  };

  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: { display: 'none' },
        tabBarScrollEnabled: true,
      }}
    >
      {currentCategory ? mappingTopTabs(currentCategory.id) : mappingTopTabs(null)}
    </TopTabs.Navigator>
  );
};

export default NavigationTopTabs;
