import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyeldButton from "../StyledButton";
import styles from "./styles";

const CarItem = () => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/images/ModelX.jpeg")}
				style={styles.bgImage}
			/>
			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitle}>Starting at $69,420</Text>

				<StyeldButton
					type="primary"
					content="Custom Order"
					onPress={() => {
						console.warn("Custom order was pressed.");
					}}
				/>

				<StyeldButton
					type="secondary"
					content="Existing inventory"
					onPress={() => {
						console.warn("Existing inventory was pressed.");
					}}
				/>

			</View>
		</View>
	);
};

export default CarItem;
