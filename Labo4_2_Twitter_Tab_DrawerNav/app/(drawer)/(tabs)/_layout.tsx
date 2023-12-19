import { Tabs } from "expo-router";
import { AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';

export default function Layout(){
    return(
        <Tabs
        screenOptions={{
            headerShown:false
        }}
        >
            <Tabs.Screen name="index" options={{title:"Home", tabBarIcon:({color, size}) => <AntDesign name="twitter" size={size} color={color} />}}/>
            <Tabs.Screen name="profiles" options={{title:"Profile", tabBarIcon:({color, size})=> <MaterialCommunityIcons name="face-man-profile" size={size} color={color} /> }}/>
        </Tabs>
    )
}