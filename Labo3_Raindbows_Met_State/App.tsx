import { rainbow } from "rainbow-colors-array-ts";
import {View, StyleSheet, Button, TextInput} from "react-native";
import Constants from 'expo-constants';
import Rainbow from "./components/Rainbow"
import Footer from "./components/Footer"
import { useState } from "react";


export default function App() {
  const [rainbowText, setRainbowText] = useState("rainbow");
  const [pastel, setPastel] = useState(false);
  const [rainbowOrder, setRainBowOrder] = useState([0,1,2,3,4,5]);

  const colors = rainbow(6,"hex",pastel).map(color => color.hex);
  const rainbowColors = rainbowOrder.map((i) => colors[i]);
  function randomize(){
   setRainBowOrder([...rainbowOrder].sort(()=> Math.random() - 0.5));
  }
  return (
    <View style={styles.container}>
       <Rainbow pastel={pastel} colors={rainbowColors} containerStyle={{}} lineStyle={{height:10}}  />
       <TextInput style={{height: 40, borderColor: "gray", borderWidth: 1}} onChangeText={(text) => setRainbowText(text)} value={rainbowText}/>
       <Button title="Set pastel" onPress={() => setPastel(pastel => !pastel)}/>
       <Button title="Randomize colors" onPress={randomize} />
       <View style={{flexDirection: "row", flex:1 , justifyContent:"space-around"}}>
          <Rainbow pastel={pastel} colors={rainbowColors} containerStyle={{flexDirection:"row",flex:1, justifyContent:"space-around"}} lineStyle={{width:10}}  />
          <Rainbow pastel={pastel} colors={rainbowColors} containerStyle={{flex: 1,justifyContent:'space-around', alignItems:'center'}} lineStyle={{width:50,height:50}}/>
       </View>
       <Footer pastel={pastel} text={rainbowText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  },
  footer: {
    flexDirection:"row", 
    height:100,
    justifyContent:"center",
    alignItems:"center"
  }
});
