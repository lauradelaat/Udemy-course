import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

function RestaurantDetail({ route }) {
	const [result, setResult] = useState(null);
	const id = route.params.id;

	const getRestaurant = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	const renderPhotos = ({ item }) => {
		return <Image source={{ uri: item }} style={styles.image} />;
	};

	useEffect(() => {
		getRestaurant(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={renderPhotos}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
	},
});

export default RestaurantDetail;
