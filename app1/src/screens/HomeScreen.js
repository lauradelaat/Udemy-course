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
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
