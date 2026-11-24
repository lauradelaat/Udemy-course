import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function SearchBar({ searchTerm, onSearchTermChange, onSubmit }) {
	return (
		<View style={styles.container}>
			<Feather name="search" style={styles.icon} />
			<TextInput
				placeholder="Search"
				style={styles.input}
				value={searchTerm}
				onChangeText={onSearchTermChange}
				autoCapitalize="none"
				autoCorrect={false}
				onEndEditing={onSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#dcd6d6",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		marginVertical: 5,
		flexDirection: "row",
	},
	icon: {
		alignSelf: "center",
		fontSize: 30,
		marginHorizontal: 12,
	},
	input: {
		flex: 1,
		fontSize: 18,
	},
});
export default SearchBar;
