import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../constants/colors";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.primary[700],
    borderColor: colors.accent[900],
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 5,
    shadowColor: colors.primary[900],
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
