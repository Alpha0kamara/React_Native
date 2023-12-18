import { StyleSheet, View } from 'react-native';
import TweetList from './components/TweetList';
import DataProvider, { DataContext } from './components/DataProvider';

 export default function App() {

  return (
    <DataProvider>
       <View style={styles.container}>
      <TweetList/>
    </View>
    </DataProvider>
   
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
