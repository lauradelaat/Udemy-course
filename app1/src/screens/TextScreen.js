import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

function TextScreen() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View>
			<Text>Enter name: </Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={name}
				onChangeText={(newValue) => setName(newValue)}
			/>
			<Text>My name is {name}</Text>
			<Text>Enter password: </Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			{password.length < 5 && (
				<Text>The password should be at least 5 characters</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default TextScreen;
