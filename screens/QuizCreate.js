import { StyleSheet, Text, Dimensions, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import CreateCard from "../components/CreateCard";

import Colors from "../constants/Colors";
import AddButton from "../components/AddButton";

const QuizCreate = (props) => {
  const QUIZES = useSelector((state) => state.faculty.Sub);

  return (
    <View style={styles.screen}>
      <AddButton navigation={props.navigation} />
      <FlatList
        data={QUIZES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CreateCard
            navigation={props.navigation}
            route={props.route}
            item={itemData.item}
          />
        )}
        style={{ backgroundColor: "#eee" }}
      />
    </View>
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

export default QuizCreate;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  cardList: {
    height: "100%",
    width: "100%",
  },
});
