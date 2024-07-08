import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import react,{useState} from "react"

export default function App() {

  const [people, setPeople] = useState([
    { name: "Name 1", id: 1 },
    { name: "Name 2", id: 2 },
    { name: "Name 3", id: 3 },
    { name: " Name 4", id: 4 },
    { name: "Name 5", id: 5 },
    { name: "Name 6", id: 6 },
    { name: "Name 7", id: 7 },
  ]);

  const pressHandler = (id) => {
    setPeople((prevValues)=> (
      prevValues.filter((item)=> item.id != id)
    ))
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={[styles.item, styles.boldTxt]}>{item.name}</Text> 
            </TouchableOpacity>)}
      />

      {/* <View style={styles.ButtonContainer}> */}
      {/* <Button title="State change Button" onPress={clickHandler} /> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  body: {
    // backgroundColor: "yellow",
    padding: 20,
  },
  // ButtonContainer: {
  //   marginTop:20
  // },
  boldTxt: {
    fontWeight: "bold",
  },

  item: {
    padding:20,
    marginTop:24,
    backgroundColor:"pink",
    marginRight:20
  }
});
