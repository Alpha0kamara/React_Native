import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';


const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [color1, setColor1] = useState('white');
  const [color2, setColor2] = useState('black');
  const [useColor1, setUseColor1] = useState(true);

  const handleSwitchChange = () => {
    setBackgroundColor(useColor1 ? color2 : color1);
    setUseColor1(!useColor1);
  };

  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.inputContainer}>
       
        <TextInput
          style={styles.input}
          value={color1}
          onChangeText={(text) => setColor1(text)}
        />
      </View>
      <View style={styles.inputContainer}>
       
        <TextInput
          style={styles.input}
          value={color2}
          onChangeText={(text) => setColor2(text)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Switch Colors:</Text>
        <Switch
          value={!useColor1}
          onValueChange={handleSwitchChange}
        />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    marginLeft: 10,
    padding: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;
