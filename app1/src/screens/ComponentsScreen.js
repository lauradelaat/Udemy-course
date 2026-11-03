import { Text, StyleSheet, View } from "react-native";

function ComponentsScreen() {
	const name = "Laura";
	return (
		<View>
			<Text style={styles.textHeader}>Getting started with React Native!</Text>
			<Text style={styles.text}>My name is {name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textHeader: {
		fontSize: 45,
	},
	text: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
