import React from "react";
import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

import colors from "../../constants/colors";

const Button = ({ children, style, onPress }) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        style={({ pressed }) => [
          pressed && Platform.OS === "ios" && styles.pressed,
        ]}
        onPress={onPress}
        android_ripple={{ color: colors.primary[900] }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary[500],
    borderRadius: 5,
    minWidth: 100,
    overflow: "hidden",
  },
  button: {
    margin: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
