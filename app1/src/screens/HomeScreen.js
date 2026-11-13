import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
	return (
		<View>
			<Text style={styles.text}>Hi there!</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => props.navigation.navigate("Components")}
			/>
			<Button
				onPress={() => props.navigation.navigate("List")}
				title="Go to List Demo"
			/>
			<Button
				onPress={() => props.navigation.navigate("Image")}
				title="Go to Image Demo"
			/>
			<Button
				title="Go to Counter Demo"
				onPress={() => props.navigation.navigate("Counter")}
			/>
			<Button
				title="Go to Counter Reducer Demo"
				onPress={() => props.navigation.navigate("CounterReducer")}
			/>
			<Button
				title="Go to Color Demo"
				onPress={() => props.navigation.navigate("Color")}
			/>
			<Button
				title="Go to Square Demo"
				onPress={() => props.navigation.navigate("Square")}
			/>
			<Button
				title="Go to Square Reducer Demo"
				onPress={() => props.navigation.navigate("SquareReducer")}
			/>
			<Button
				title="Go to Text Demo"
				onPress={() => props.navigation.navigate("Text")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
