import { StyleSheet, TextInput, View } from 'react-native';
import TweetList from '../../../components/TweetList';
import { DataContext } from '../../../components/DataProvider';
import { useContext } from 'react';
import { useState } from 'react';

export default function HomeScreen() {
const {tweets, loading, loadData} = useContext(DataContext);
const [filter,setFilters] = useState("");
const filterTweets = tweets.filter(tweet => tweet.text.toUpperCase().includes(filter.toUpperCase()));
  return (

    <View style={styles.container}>
      <TextInput onChangeText={(text) => setFilters(text)} value={filter} style={{backgroundColor:"white",marginVertical:8,marginHorizontal:16, borderColor:"#444", borderRadius:8,padding:15,borderWidth:1,elevation:3}}/>
      <TweetList tweets={filterTweets} loadData={loadData} loading={loading}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});