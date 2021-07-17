import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import CarItem from "./components/CarItem";

export default function App() {
	return (
		<View style={styles.container}>
			<CarItem
				name="Model Y"
				tagline="Starting from $99,500"
				taglineCTA="Touchless Delivery"
				image={require("./assets/images/ModelY.jpeg")}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
