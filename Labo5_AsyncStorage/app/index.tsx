import { useRouter } from "expo-router";
import { View, StyleSheet, Button } from 'react-native';

export default function Home() {

  const router = useRouter();
  return (
    <View  style={styles.container}>
      <Button title="Go to raindbow List" onPress={() => router.push("rainbows")}/>
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
