import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetailsScreen from './authorized/CardDetailsScreen';
import NavigationTab from '../components/navigation/NavigationTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={NavigationTab} />
      <Stack.Screen
        name="Card"
        component={CardDetailsScreen}
        options={{ headerTitle: 'Card', headerTitleAlign: 'center', headerShown: true }}
      />
    </Stack.Navigator>
  );
}
