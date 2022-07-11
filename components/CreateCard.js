import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import Card from "./Card";

const CreateCard = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const quizHandler = (id) => {
    props.navigation.navigate("Edit", {
      screen: "edit",
      params: { quizId: id },
    });
  };

  return (
    <Card style={styles.quiz}>
      <TouchableCmp onPress={() => quizHandler(props.item.id)} useForeground>
        <View style={styles.touchable}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.noq}>{props.item.noq}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.desc}>{props.item.description}</Text>
          </View>
        </View>
      </TouchableCmp>
    </Card>
  );
};

export default CreateCard;

const styles = StyleSheet.create({
  quiz: {
    height: 150,
    margin: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  touchable: {
    height: "100%",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 4,
  },
  title: {
    flex: 1,
    marginRight: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  noq: {
    fontSize: 18,
    color: "#888",
  },
  descContainer: {
    paddingVertical: 4,
  },
  desc: {
    fontSize: 14,
  },
});
