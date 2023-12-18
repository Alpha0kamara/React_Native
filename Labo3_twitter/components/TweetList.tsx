import React from "react";
import { FlatList, View, Image, Text, StyleSheet } from "react-native";
import { Tweet } from "../types";
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
interface TweetListProps {
    tweets: Tweet[]
}
export default function TweetList({ tweets }: TweetListProps) {
    return (
        <View style={styles.container}>
            <FlatList data={tweets}
                renderItem={({ item }) => <TweetView tweet={item} />}
                keyExtractor={(item) => item.id.toString()} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
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