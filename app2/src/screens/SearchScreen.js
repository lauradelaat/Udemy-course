import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import useSearchApi from "../hooks/useSearchApi";
import ResultsList from "../components/ResultsList";

function SearchScreen() {
	const [searchTerm, setSearchTerm] = useState("");

	const [searchApi, restaurants, errorMessage] = useSearchApi();

	const filterByPrice = (price) => {
		return restaurants.filter((restaurant) => {
			return restaurant.price === price;
		});
	};

	return (
		<>
			<SearchBar
				searchTerm={searchTerm}
				onSearchTermChange={setSearchTerm}
				onSubmit={() => searchApi(searchTerm)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList title="Cost Effective" results={filterByPrice("$")} />
				<ResultsList title="Bit Pricier" results={filterByPrice("$$")} />
				<ResultsList title="Big Spender" results={filterByPrice("$$$")} />
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({});
export default SearchScreen;
