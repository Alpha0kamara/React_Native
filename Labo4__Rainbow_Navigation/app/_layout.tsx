import { Tabs } from 'expo-router';
import { Entypo,FontAwesome5 } from '@expo/vector-icons';

export default function Layout(){
    return(
        <Tabs
        screenOptions={{ headerShown:false}}>
            <Tabs.Screen name='index' 
            options={{title:"Home",
            tabBarIcon:({color, size})=> <Entypo name="home" size={size} color={color} />}} />
            <Tabs.Screen name='rainbow' 
            options={{title:"Rainbow",
            tabBarIcon:({size,color}) => <FontAwesome5 name="rainbow" size={size} color={color} />
            }}/>
            <Tabs.Screen name='rainbows' 
            options={{title:"Rainbow List",
            tabBarIcon:({size,color}) => <FontAwesome5 name="rainbow" size={size} color={color} />
            }}/>
        </Tabs>
    )
}