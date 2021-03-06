import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";

import Card from "./Card";

const QuizCard = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const quizHandler = () => {
    props.navigation.navigate("list", {
      id: props.item.id,
      sub: props.item.sub,
    });
  };

  return (
    <Card style={{ ...styles.quiz, backgroundColor: props.color }}>
      <TouchableCmp onPress={quizHandler} useForeground>
        <View style={styles.touchable}>
          <Text style={styles.title}>{props.item.sub}</Text>
        </View>
      </TouchableCmp>
    </Card>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  quiz: {
    width: Dimensions.get("window").width / 2.6,
    height: Dimensions.get("window").width / 2.7,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    height: "100%",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
