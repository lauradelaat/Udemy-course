import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Restaurant from "./Restaurant";

function ResultsList({ title, results }) {
	const navigation = useNavigation();

	if (!results.length) {
		return null;
	}

	const renderRestaurant = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Restaurant", { id: item.id });
				}}>
				<Restaurant result={item} />
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={renderRestaurant}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
	},
	container: {
		marginBottom: 10,
	},
});

export default ResultsList;
