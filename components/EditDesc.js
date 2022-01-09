import { StyleSheet, Text, View, Modal, Button, TextInput } from "react-native";
import Colors from "../constants/Colors";

const EditDesc = (props) => {
  const editDescHandler = () => {
    props.setShow(false);
  };
  return (
    <Modal
      onRequestClose={editDescHandler}
      visible={props.show}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.screen}>
        <View style={styles.editDesc}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Edit Description</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput multiline={true} style={styles.input} />
          </View>
          <View style={styles.button}>
            <Button
              title="Close"
              color={Colors.accent}
              onPress={editDescHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditDesc;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  editDesc: {
    height: "90%",
    width: "90%",
    margin: 10,
    padding: 20,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  titleContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    width: "100%",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 4,
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  input: {
    fontSize: 18,
    padding: 6,
  },
  button: {
    width: 100,
    margin: 20,
  },
});
