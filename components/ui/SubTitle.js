import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const SubTitle = ({ children, style }) => {
  return <Text style={[styles.subTitle, style]}>{children}</Text>;
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.accent[500],
    textAlign: "center",
  },
});
