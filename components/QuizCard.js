import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Card from "./Card";

const QuizCard = (props) => {
  return (
    <TouchableOpacity style={styles.screen}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
