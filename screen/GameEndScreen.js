import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { gameContext } from "../hooks/Game";
import colors from "../constants/colors";

import Button from "../components/ui/Button";

const GameEndScreen = () => {
  const { rounds, resetGame, number } = useContext(gameContext);

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.description}>
        {"Computer guessed your number in "}
        <Text style={styles.highLight}>{rounds}</Text>
        {" rounds and number was "}
        <Text style={styles.highLight}>{number}</Text>
      </Text>
      <View style={styles.resetButton}>
        <Button onPress={resetGame}>New Game</Button>
      </View>
    </View>
  );
};

export default GameEndScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.accent[500],
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  highLight: {
    color: colors.primary[500],
    // fontFamily: "open-sans-bold",
    fontWeight: "bold",
  },
  resetButton: {
    marginVertical: 20,
  },
});
