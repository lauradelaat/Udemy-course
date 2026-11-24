import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [restaurants, setRestaurants] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (search) => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: search,
					location: "san jose",
				},
			});
			setRestaurants(response.data.businesses);
			setErrorMessage("");
		} catch (e) {
			setErrorMessage("Something went wrong");
		}
	};

	useEffect(() => {
		searchApi("pasta");
	}, []);

	return [searchApi, restaurants, errorMessage];
};
