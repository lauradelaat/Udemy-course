import { View, StyleSheet } from "react-native";

function BoxScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.redBox}></View>
			<View style={styles.greenBox}></View>
			<View style={styles.purpleBox}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	redBox: {
		height: 100,
		width: 100,
		backgroundColor: "red",
	},
	greenBox: {
		height: 100,
		width: 100,
		backgroundColor: "green",
		alignSelf: "flex-end",
	},
	purpleBox: {
		height: 100,
		width: 100,
		backgroundColor: "purple",
	},
});

export default BoxScreen;
