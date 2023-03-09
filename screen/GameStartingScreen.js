import React, { useState, useContext } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import { gameContext } from "../hooks/Game";

import Card from "../components/ui/Card";
import SubTitle from "../components/ui/SubTitle";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import Button from "../components/ui/Button";

const GameStartingScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const { startGame } = useContext(gameContext);

  const reset = () => setEnteredValue("");

  const confirm = () => {
    reset();
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: reset },
      ]);
      return;
    }
    startGame(chosenNumber);
  };

  return (
    <View>
      <Title>Guess My Number</Title>
      <Card>
        <SubTitle>Enter a Number</SubTitle>
        <TextInput
          maxLength={2}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          value={enteredValue}
          onChangeText={(text) => setEnteredValue(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={reset}>Reset</Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={confirm}>Confirm</Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameStartingScreen;

const styles = StyleSheet.create({
  input: {
    width: 30,
    textAlign: "center",
    color: colors.accent[500],
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: colors.accent[500],
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});
