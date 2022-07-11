import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const AddButton = (props) => {
  const addQuizHandler = () => {
    props.navigation.navigate("Edit");
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.touchable}
        onPress={addQuizHandler}
      >
        <Ionicons name="md-add" size={24} color={Colors.accent} />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: Dimensions.get("window").width / 23,
    bottom: Dimensions.get("window").width / 23,
    height: 60,
    width: 60,
    zIndex: 1,
  },
  touchable: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 50,
    elevation: 2,
  },
});
