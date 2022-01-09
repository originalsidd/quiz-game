import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const AddButton = () => {
  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Ionicons name="md-add" size={24} color={Colors.accent} />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 20,
    bottom: 30,
    height: 60,
    width: 60,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    elevation: 2,
    zIndex: 1,
    borderColor: Colors.accent,
  },
  touchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
