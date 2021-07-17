import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 10,
	},
	button: {
		padding: 8,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	btnPrimary: {
		backgroundColor: "#171a20cc",
	},
	btnSecondary: {
		backgroundColor: "#FFFFFFA6",
	},
	text: {
        fontSize: 16,
		fontWeight: "500",
		textTransform: "uppercase",
        justifyContent: "center",
		alignItems: "center",
	},
	textPrimary: {
		color: "#FFF",
	},
	textSecondary: {
		color: "#000",
	},
});

export default styles;
