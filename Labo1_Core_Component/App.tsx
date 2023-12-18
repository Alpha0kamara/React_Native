import React from "react";
import { Text, View, StyleSheet, Button, Image, Alert, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  const Random0To10 = () => {
    return Math.floor(Math.random() * 10);
  };

  return (
    <View style={styles.container}>
      <Text>
        Het getal is: <Text style={styles.boldText}>{Random0To10()}</Text>
      </Text>
      
      <View style={styles.subView}>
        <Text style={styles.subText}>Subview</Text>
      </View>
      <TouchableOpacity delayLongPress={3000} onLongPress={() => Alert.alert("Pikcahu")}>
        <Image style={styles.image} source={require("./assets/pokemon.png")} />
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: "https://purepng.com/photo/239/yellow-mercedes-amg-gt-solarbeam-car" }} />
      <TextInput
        style={styles.Textinput}
        placeholder="Enter password"
        secureTextEntry={true}
        onSubmitEditing={(event) => Alert.alert(event.nativeEvent.text)}
      />
      <Button color="red" title="Random" onPress={() => Alert.alert("The number is: " + Random0To10())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff",
  },
  boldText: {
    fontWeight: "bold",
  },
  subView: {
    width: 10,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
  },
  subText: {
    backgroundColor: "blue",
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
  },
  Textinput: {
    borderColor: "black",
    borderWidth: 2,
    width: "100%"
  },
});

export default App;
