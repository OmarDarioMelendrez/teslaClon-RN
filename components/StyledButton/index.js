import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyeldButton = ({ type, content, onPress }) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={[
					styles.button,
					type == "primary" ? styles.btnPrimary : styles.btnSecondary,
				]}
				onPress={onPress}
			>
				<Text
					style={[
						styles.text,
						type == "primary"
							? styles.textPrimary
							: styles.textSecondary,
					]}
				>
					{content}
				</Text>
			</Pressable>
		</View>
	);
};

export default StyeldButton;
