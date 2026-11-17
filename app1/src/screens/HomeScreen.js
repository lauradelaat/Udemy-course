import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
	const onPress = (page) => {
		props.navigation.navigate(page);
	};
	return (
		<View>
			<Text style={styles.text}>Hi there!</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => onPress("Components")}
			/>
			<Button title="Go to List Demo" onPress={() => onPress("List")} />
			<Button title="Go to Image Demo" onPress={() => onPress("Image")} />
			<Button title="Go to Counter Demo" onPress={() => onPress("Counter")} />
			<Button
				title="Go to Counter Reducer Demo"
				onPress={() => onPress("CounterReducer")}
			/>
			<Button title="Go to Color Demo" onPress={() => onPress("Color")} />
			<Button title="Go to Square Demo" onPress={() => onPress("Square")} />
			<Button
				title="Go to Square Reducer Demo"
				onPress={() => onPress("SquareReducer")}
			/>
			<Button title="Go to Text Demo" onPress={() => onPress("Text")} />
			<Button title="Go to Box Demo" onPress={() => onPress("Box")} />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
