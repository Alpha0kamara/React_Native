import { Stack, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { View, Text, Image } from "react-native";
import { DataContext } from "../components/DataProvider";
import { Profile } from "../types";
import TweetList from "../components/TweetList";

export default function ProfileScreen() {

    const { handle } = useLocalSearchParams<{ handle: string }>();
    const { profiles, tweets,loadData,loading } = useContext(DataContext);
    const profile: Profile = profiles.find((prof) => prof.handle === handle)!;

    const filterdTweets = tweets.filter((tweet) => tweet.handle === handle)
    return (
        <View style={{ flexDirection: "column", flex: 1 }}>
            <Stack.Screen options={{ title: profile.name, headerTransparent: true }} />
            <View>
                <Image source={{ uri: profile.banner }} style={{ height: 300 }}></Image>
            </View>
            <View style={{marginLeft: 130, marginTop:10, marginBottom:10}}>
                <Text style={{fontSize:24, fontWeight:"900"}}>{profile.name}</Text>
                <Text style={{fontSize:16, fontWeight:"200"}}>@{handle}</Text>
            </View>
            <Text style={{fontSize:16, marginTop:10, marginHorizontal:17, marginBottom:5}}>{profile.bio}</Text>
            <Image source={{ uri: profile.avatar }} style={{ position: "absolute", top: 270, left: 10, height: 100, width: 100, borderRadius: 100, borderWidth: 1, borderColor: "black" }}></Image>
            <TweetList tweets={filterdTweets} loadData={loadData} loading={loading}/>

        </View>
    )
}