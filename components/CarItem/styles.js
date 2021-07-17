import { StyleSheet , Dimensions} from "react-native";

const styles = StyleSheet.create({
	carContainer: {
		width: "100%",
		height: Dimensions.get('screen').height,
	},
	bgImage: {
		width: "100%",
		height: "100%",
		// minHeight: Dimensions.get("screen").height,
		resizeMode: "cover",
		position: "absolute",
	},
	titles: {
		marginTop: "30%",
		width: "100%",
		alignItems: "center",
	},
	title: {
		fontSize: 40,
		fontWeight: "500",
	},
	subtitle: {
		fontSize: 16,
		color: "#5c5e62",
	},
	taglineCTA: {
		textDecorationLine: "underline"
	},
	buttonsContainer: {
		width: "100%",
		position: "absolute",
		bottom: 55
	},
});

export default styles;
