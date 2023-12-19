import { rainbow } from "rainbow-colors-array-ts";
import { View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';



export default function Home() {

  
  return (
    <View  style={styles.container}>
      <Button title="Go to raindbow List"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"column"
  },

});
