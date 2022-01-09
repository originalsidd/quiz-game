import { StyleSheet, Text, Dimensions, View, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import QuizCard from "../components/QuizCard";

import Colors from "../constants/Colors";

const QuizList = (props) => {
  const subId = props.route.params.id;

  const QUIZES = useSelector((state) => {
    for (const key in state.quiz) {
      if (key === subId) {
        return state.quiz[key];
      }
    }
  });

  return (
    <FlatList
      data={QUIZES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <QuizCard
          navigation={props.navigation}
          route={props.route}
          title={itemData.item.title}
          desc={itemData.item.description}
          noq={itemData.item.noq}
        />
      )}
      style={{ backgroundColor: "#eee" }}
    />
  );
};

export const screenOptions = (navdata) => {
  return {
    headerTitle: navdata.route.params.sub,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#eee",
      elevation: 0,
      shadowOpacity: 0,
    },
  };
};

export default QuizList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
