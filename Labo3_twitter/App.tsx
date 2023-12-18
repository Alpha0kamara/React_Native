import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import TweetList from './components/TweetList';
import DataProvider, { DataContext } from './components/DataProvider';

function App() {
 const {tweets} = useContext(DataContext);
  return (
    <View style={styles.container}>
      <TweetList tweets={tweets} />
    </View>
  );
}
export default function AppWrapper(){
  return(
    <DataProvider>
    <App/>
    </DataProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
