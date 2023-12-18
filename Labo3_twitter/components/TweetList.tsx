import React, { useState } from "react";
import { FlatList, View, Image, Text, StyleSheet, TextInput } from "react-native";
import { Tweet } from "../types";
import { useContext } from "react";
import { DataContext } from "./DataProvider";
import Constants from 'expo-constants';
interface TweetViewProps {
    tweet: Tweet,
}
function TweetView({ tweet }: TweetViewProps) {
   
    let profile = tweet.profile!;
    return (
        <View style={styles.postContainer}>
            <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: profile?.avatar }} style={styles.image} />
                <View>
                    <Text style={styles.name}>{profile.name}</Text>
                    <Text style={styles.handle}>@{tweet.handle}</Text>
                </View>
            </View>
            <View>
                <Text>{tweet.text}</Text>
            </View>
        </View>
    )
}

export default function TweetList() {
    const {tweets,loading,loadDate} = useContext(DataContext);
    const [filter,setFilters] = useState("");

    const filterTweets = tweets.filter(tweet => tweet.text.toUpperCase().includes(filter.toUpperCase()));
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(text) => setFilters(text)} value={filter} style={{backgroundColor:"white",marginVertical:8,marginHorizontal:16, borderColor:"#444", borderRadius:8,padding:15,borderWidth:1,elevation:3}}>

            </TextInput>
            <FlatList data={filterTweets}
                renderItem={({ item }) => <TweetView tweet={item} />}
                keyExtractor={(item) => item.id.toString()} 
                refreshing ={loading}
                onRefresh={()=> loadDate()}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5"
    },
    postContainer: {
        borderRadius: 8,
        padding: 15,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 3,
        borderColor: "#ddd",
        backgroundColor:"white",
        borderWidth: 1
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    handle: {
        fontSize: 14,
        fontWeight: "100"
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight:10
    }
})