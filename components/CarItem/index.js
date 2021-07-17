import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyeldButton from "../StyledButton";
import styles from "./styles";

const CarItem = ({car}) => {

	const { name, tagline, taglineCTA, image } = car
	
	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.bgImage} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline}{" "}
					<Text style={styles.taglineCTA}>{taglineCTA}</Text>
				</Text>
			</View>
			<View style={styles.buttonsContainer}>
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
