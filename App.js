import react,{useState} from "react"
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddToDo from "./components/AddToDo"


export default function App() {
  const [todos, setTodos] = useState(
    [
        {text: "Buy Coffee ", key:1},
        {text: "Learn new Techniques ", key:2},
        {text: "Be Special Developer ", key:3}
    ]
  )

  const pressHanlder = (key) => {
      setTodos((prevValues) => prevValues.filter((item) => item.key != key));
  }


  const addNewTodo = (newValue) => {

    if(newValue && newValue.length > 3) {
      console.log("key");
      console.log(newValue);
      setTodos((prevValues) => [
        {text:newValue, key:Math.random().toString()},
         ...prevValues
        ]);
    } else {

      Alert.alert("OOPS!", "List text need to have more than 3 charecters!", [
        {text:"Understood", onPress:()=> console.log("alert closed")}
      ])
    }
 
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        console.log("Dismissed Keyboard");
      }}
    >
      <View style={styles.container}>
        {/* Header*/}
        <Header />
        <View style={styles.content}>
          {/* TODO Form*/}
          <AddToDo AddNewTodo={addNewTodo} />
          <View style={styles.list}>
            {todos.length ? (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHanlder={pressHanlder} />
                )}
              />
            ) : (
              <TodoItem
                item={{ text: "No Todos" }}
                pressHanlder={pressHanlder}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
