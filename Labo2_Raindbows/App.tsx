import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native";


interface RainBowProps{
  containerStyle : StyleProp<ViewStyle>,
  lineStyle: StyleProp<ViewStyle>
}

function RainBow({containerStyle, lineStyle}: RainBowProps){
  const colors = rainbow(6, "hex", false);
  return(
    <View style={containerStyle}>
       {colors.map((color) => ( <View key={color.hex}style={[{ backgroundColor: color.hex} ,lineStyle]}></View> ))}
    </View>
  )
}

interface FooterProps{
 letter: string,
 containerStyle : StyleProp<ViewStyle>
}

function Footer({letter,containerStyle}:FooterProps){
  const colors = rainbow(letter.length, "hex", false);
  return(
    <View style={containerStyle}>
        {
          letter.split("").map((letter, index) => <Letter color={colors[index].hex} letter={letter}/>)
        }
      </View>
  
   )
}
interface LetterProps{
  letter:string,
  color: string,
}
function Letter({letter,color}: LetterProps){
  return(
    <Text style={{color: color, fontSize:30}}>{letter}</Text>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <RainBow containerStyle= {{}} lineStyle= {{height:10}} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <RainBow containerStyle= {{flex: 1,flexDirection: "row", justifyContent: "space-around"}} lineStyle= {{width:10}} />
        <RainBow containerStyle= {{flex: 1, justifyContent:"space-around", alignItems:"center"}} lineStyle= {{width: 50, height: 50}} />
      </View>
      <Footer containerStyle={{height: 100, alignItems:"center", justifyContent:"center", flexDirection:"row"}} letter="Rainbow"/>
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
