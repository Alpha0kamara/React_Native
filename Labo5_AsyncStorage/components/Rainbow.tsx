import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";


 interface RainBowProps{
    containerStyle : StyleProp<ViewStyle>,
    lineStyle: StyleProp<ViewStyle>,
    colors: string[],
    pastel:boolean

  }
  
 export default function RainBow({containerStyle, lineStyle,  colors,pastel}: RainBowProps){
   
    return(
      <View style={containerStyle}>
         {colors.map((color) => ( <View key={color}style={[{ backgroundColor: color} ,lineStyle]}></View> ))}
      </View>
    )
  }