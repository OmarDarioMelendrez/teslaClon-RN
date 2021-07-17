import React from "react";
import { View, Text, FlatList, Dimensions} from "react-native";
import cars from "./cars";

import CarItem from "../CarItem";
import styles from "./styles";

const CarList = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={"start"}
                snapToInterval={Dimensions.get("screen").height}
                decelerationRate={"fast"}
			/>
		</View>
	);
};

export default CarList;
