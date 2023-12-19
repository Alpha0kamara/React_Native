import { View,Text, FlatList, Image, Pressable } from "react-native";
import { useContext } from "react";
import { DataContext } from "../../../components/DataProvider";
import { Profile } from "../../../types";
import { useRouter } from "expo-router";

interface ProfileViewProps{
    profile: Profile
}

export function ProfileView({profile}: ProfileViewProps){
    const router = useRouter();
    return(
        <Pressable onPress={() => router.push("/"+profile.handle)}>
        <View style={{borderRadius:8, padding: 15, marginVertical:8,marginHorizontal:16, elevation:3, backgroundColor:"white", borderWidth:1,borderColor:"#ddd", flexDirection:"row"}}>
            <Image source={{uri:profile.avatar}} style={{height:50,width:50, marginRight:10, borderRadius:50}}/>
            <View>
             <Text style={{fontWeight:"bold", fontSize:16}}>{profile.name}</Text>
             <Text style={{fontWeight:"100", fontSize:14}}> @{profile.handle}</Text>
            </View>
        </View>
        </Pressable>
    )
}

export default function ProfilesScreen(){
    const {profiles, loadData, loading} = useContext(DataContext);

    return(
        <View>
            <FlatList
            data={profiles}
            renderItem={({item}) => <ProfileView profile={item}/>}
            keyExtractor={(item)=> item.id.toString()}
            
            >

            </FlatList>
        </View>
    )

}