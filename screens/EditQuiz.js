import React, { useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import EditDesc from "../components/EditDesc";
import QCard from "../components/QCard";
import Colors from "../constants/Colors";

const EditQuiz = (props) => {
  const quizId = props.route.params ? props.route.params.quizId : null;
  const QUIZ = useSelector((state) =>
    state.faculty.Sub.find((quiz) => quiz.id === quizId)
  );
  const QUES_ARR = QUIZ.ques_arr;

  const [show, setShow] = useState(false);
  const editDescHandler = () => {
    setShow(true);
  };

  return (
    <View style={styles.screen}>
      <EditDesc show={show} setShow={setShow} />
      <View style={styles.quizTitle}>
        <Text style={styles.title}>Quiz Title</Text>
      </View>
      <View style={styles.quizInfo}>
        <FlatList
          data={QUES_ARR}
          renderItem={(itemData) => <QCard item={itemData.item} />}
          horizontal
          pagingEnabled={true}
          snapToInterval={Dimensions.get("window").width}
          decelerationRate={"normal"}
          snapToAlignment={"center"}
          overScrollMode={"never"}
        />
      </View>
      {/* <View style={styles.quizTitle}>
          <Text style={styles.title}>Title</Text>
        </View>
        <View style={styles.quizDesc}>
          <Text style={styles.Desc}>Description:</Text>
          <Text style={styles.desc}>
            lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor
          </Text>
        </View>
        <View style={styles.quizDesc}>
          <Text style={styles.Desc}>Number of Questions:</Text>
          <Text style={styles.desc}>20</Text>
        </View> */}
      <View style={styles.button}>
        <Button
          title="Edit Desc"
          color={Colors.accent}
          onPress={editDescHandler}
        />
      </View>
    </View>
  );
};

export default EditQuiz;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  quizInfo: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  quizTitle: {
    width: "90%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  quizDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingHorizontal: 10,
  },
  Desc: {
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    width: 100,
    margin: 20,
  },
});
