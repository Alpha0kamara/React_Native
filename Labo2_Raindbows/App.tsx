import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

export default function App() {
  const colors = rainbow(10, "hex", false);
  const raindbowLetter = "rainbow";
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "red" }}>
        {colors.slice(0, 6).map((color) => (
          <View
            key={color.hex}
            style={{ backgroundColor: color.hex, height: 10 }}
          ></View>
        ))}
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {colors.slice(0, 6).map((color) => (
            <View
              key={color.hex}
              style={{ backgroundColor: color.hex, width: 10 }}
            ></View>
          ))}
        </View>
        <View style={{flex: 1, justifyContent:"space-around", alignItems:"center" }}>
          {colors.slice(0, 6).map((color) => (
            <View
              key={color.hex}
              style={{ backgroundColor: color.hex, width: 50, height: 50 }}
            ></View>
          ))}
        </View>
      </View>
      <View style={{ height: 100, alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
        {
          raindbowLetter.split("").map((letter, index) => <Text style={{color: colors[index].hex, fontSize:30}}>{letter}</Text>)
        }
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
