import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Button,
} from "react-native";
import Card from "./Card";

const QCard = (props) => {
  return (
    <Card style={styles.screen}>
      <View style={styles.quesTitle}>
        <TextInput style={styles.title}>{props.item.ques}</TextInput>
      </View>
      <ScrollView style={styles.options}>
        {props.item.op_arr.map((op) => (
          <TextInput key={op} style={styles.opText}>
            {op}
          </TextInput>
        ))}
      </ScrollView>
      <View style={styles.dropdown}>
        <View style={styles.dd}>
          <Button title="dropdown" />
        </View>
      </View>
    </Card>
  );
};

export default QCard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get("window").width - 40,
    maxHeight: Dimensions.get("window").width - 40,
    margin: 20,
    padding: 20,
  },
  quesTitle: {
    width: "90%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  options: {
    marginVertical: 10,
  },
  opText: {
    fontSize: 16,
    margin: 10,
  },
  dropdown: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dd: {
    width: 100,
  },
});
