import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../constants/colors";

const Guess = ({ children, round }) => {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guess}>{`#${round} Opponent's Guess`}</Text>
      <Text style={[styles.guess, styles.highlight]}>{children}</Text>
    </View>
  );
};

export default Guess;

const styles = StyleSheet.create({
  guessContainer: {
    marginVertical: 20,
    borderColor: colors.primary[500],
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  guess: {
    fontSize: 14,
    color: colors.primary[900],
  },
  highlight: {
    fontWeight: "bold",
    color: colors.accent[900],
  },
});
