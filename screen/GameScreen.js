import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { gameContext } from "../hooks/Game";
import colors from "../constants/colors";

import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import SubTitle from "../components/ui/SubTitle";
import Button from "../components/ui/Button";
import Guess from "../components/game/Guess";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minValue = 1;
let maxValue = 100;

const GameScreen = () => {
  const { number, endGame } = useContext(gameContext);
  const initialGuess = generateRandomNumber(1, 100, number);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === number) {
      endGame(guessRounds.length);
    }
  }, [currentGuess, number]);

  useEffect(() => {
    minValue = 1;
    maxValue = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "higher" && currentGuess > number)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxValue = currentGuess;
    } else {
      minValue = currentGuess + 1;
    }

    const nextNumber = generateRandomNumber(minValue, maxValue, currentGuess);
    setCurrentGuess(nextNumber);
    setGuessRounds((prevGuessRounds) => [nextNumber, ...prevGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.guessContainer}>
        <View style={styles.guessInnerContainer}>
          <Text style={styles.guessNumber}>{currentGuess}</Text>
        </View>
      </View>
      <Card>
        <SubTitle>Higher or Lower?</SubTitle>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </Button>
          </View>
        </View>
      </Card>
      <View style={styles.roundsContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <Guess round={guessRounds.length - itemData.index}>
              {itemData.item}
            </Guess>
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  guessContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  guessInnerContainer: {
    borderColor: colors.accent[500],
    borderWidth: 1,
    padding: 10,
  },
  guessNumber: {
    fontSize: 20,
    color: colors.accent[500],
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  roundsContainer: {
    flex: 1,
    marginVertical: 10,
  },
});
