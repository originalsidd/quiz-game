import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Card from "../components/Card";
import HeaderButton from "../components/HeaderButton";
import QuizCard from "../components/QuizCard";
import SUBJECTS from "../data/Subjects";
import COLOR_ARR from "../data/ColorArray";

import Colors from "../constants/Colors";

const QuizList = () => {
  const length = Dimensions.get("window").width / 2 - 25;
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.row}>
        {SUBJECTS.map((item, index) => (
          <Card
            width={length}
            height={length}
            padding={10}
            margin={10}
            color={COLOR_ARR[index]}
            key={index}
          >
            <QuizCard title={item} />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navdata) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navdata.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default QuizList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
