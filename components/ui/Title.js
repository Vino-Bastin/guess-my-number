import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ children, style }) => {
  return (
    <View style={[styles.titleContainer, style]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
