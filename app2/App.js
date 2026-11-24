import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import RestaurantDetail from "./src/screens/RestaurantDetail";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerTitle: "Restaurant Search" }}>
				<Stack.Screen name="Search" component={SearchScreen} />
				<Stack.Screen name="Restaurant" component={RestaurantDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
