import { LinearGradient } from "expo-linear-gradient";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

import { GameProvider } from "./hooks/Game";

import colors from "./constants/colors";
import Game from "./Game";

export default function App() {
  return (
    <GameProvider>
      <LinearGradient
        colors={[colors.primary[500], colors.accent[500]]}
        style={styles.screen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          style={styles.screen}
          imageStyle={styles.imageBackground}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.window}>
            <Game />
          </SafeAreaView>
          <ExpoStatusBar style="auto" />
        </ImageBackground>
      </LinearGradient>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
  window: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 15,
    padding: 15,
  },
});
