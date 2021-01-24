/* import { StatusBar } from 'expo-status-bar'; */
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableNativeFeedback, Button, Alert, Platform, StatusBar} from 'react-native';

export default function App() {
  let i = 0;
  let j = 0;
  const handlePress = () => console.log("Text Pressed"+ i++);
  //console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3} onPress={handlePress}>Welcome to StockPredict App Bhai. khbcjdgfjdgfjhdfgdshugf khdskfhsdkjfhksdjhfkj kjhdfkjsdhkfjhdk</Text>
      <TouchableNativeFeedback onPress={() => console.log("Image Pressed"+ j++)}><Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}}/>
        </TouchableNativeFeedback>
      <StatusBar style="auto" />
      <Button
      color="orange"
      title="Press Me" onPress={() => Alert.alert("My Title", "My message", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No", onPress: () => console.log("No")}
      ])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DADEC',
    /* alignItems: 'center',
    justifyContent: 'center' */
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
