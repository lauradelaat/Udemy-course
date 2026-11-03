import { View, Text, StyleSheet, FlatList } from "react-native";

function ListScreen() {
	const friends = [
		{ name: "Friend #1", age: "25" },
		{ name: "Friend #2", age: "49" },
		{ name: "Friend #3", age: "37" },
		{ name: "Friend #4", age: "47" },
		{ name: "Friend #5", age: "38" },
		{ name: "Friend #6", age: "30" },
		{ name: "Friend #7", age: "27" },
		{ name: "Friend #8", age: "17" },
		{ name: "Friend #9", age: "34" },
	];
	return (
		<FlatList
			keyExtractor={(friend) => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.friend}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
}

const styles = StyleSheet.create({
	friend: {
		marginVertical: 50,
	},
});

export default ListScreen;
