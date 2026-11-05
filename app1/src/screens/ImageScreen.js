import ImageDetail from "../Components/ImageDetail";
import { View, Text, StyleSheet } from "react-native";

function ImageScreen() {
	return (
		<View>
			<ImageDetail
				title="Forest"
				imageSource={require("../../assets/forest.jpg")}
				imageScore={10}
			/>
			<ImageDetail
				title="Beach"
				imageSource={require("../../assets/beach.jpg")}
				imageScore={7}
			/>
			<ImageDetail
				title="Mountain"
				imageSource={require("../../assets/mountain.jpg")}
				imageScore={6}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default ImageScreen;
