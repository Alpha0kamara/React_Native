import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import {View} from "react-native";
import Letter from './Letter';

interface FooterProps {
    text:string,
    pastel: boolean
  }
const Footer = ({text, pastel}:FooterProps) =>
{
    const rainbowText = text.slice(0,10);
    const colors = rainbow(rainbowText.length,"hex", pastel);
    return (
        <View style={{height:100, flexDirection:"row", justifyContent:"center"}}>
            {rainbowText.split("").map((letter, index) => (
                <Letter key={letter + index} color={colors[index]} text={letter}/>
            ))}
        </View>
    )
}
export default Footer;