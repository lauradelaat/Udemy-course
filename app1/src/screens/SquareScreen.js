import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 20;

function SquareScreen() {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const SetColor = (color, change) => {
		// color === 'red' | 'green' | 'blue'

		switch (color) {
			case "red":
				red + change > 255 || red + change < 0 ? null : setRed(red + change);
				return;
			case "green":
				green + change > 255 || green + change < 0
					? null
					: setGreen(green + change);
				return;
			case "blue":
				blue + change > 255 || blue + change < 0
					? null
					: setBlue(blue + change);
				return;
			default:
				return;
		}
	};

	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => SetColor("red", COLOR_INCREMENT)}
				onDecrease={() => SetColor("red", -COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => SetColor("green", COLOR_INCREMENT)}
				onDecrease={() => SetColor("green", -COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => SetColor("blue", COLOR_INCREMENT)}
				onDecrease={() => SetColor("blue", -COLOR_INCREMENT)}
			/>
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				}}></View>

			<Text>Red: {red}</Text>
			<Text>Green: {green}</Text>
			<Text>Blue: {blue}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});

export default SquareScreen;
