import { HexColor } from "rainbow-colors-array-ts";
import { View, Text, StyleProp, ViewStyle } from "react-native";

interface LetterProps{
    color: HexColor,
    text: string
}
export default function({ color, text}: LetterProps){
    return(
        <View>
            <Text style={{color:color.hex, fontSize:30}} >{text}</Text>
        </View>
    )
}