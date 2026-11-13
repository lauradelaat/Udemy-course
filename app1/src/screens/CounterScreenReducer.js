import { View, Text, StyleSheet, Button } from "react-native";
import { useReducer } from "react";

const reducer = (state, action) => {
	return { ...state, count: state.count + action.payload };
};

function CounterScreenReducer() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const { count } = state;
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					dispatch({ type: change_count, payload: 1 });
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					dispatch({ type: change_count, payload: -1 });
				}}
			/>
			<Text>Current Count: {count}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});

export default CounterScreenReducer;
