import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from "./cars";
import CarItem from "../CarItem";
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;
