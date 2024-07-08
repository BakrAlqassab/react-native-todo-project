import React, {useState} from "react"
import {StyleSheet, Text,View, TextInput,Button} from "react-native"


export default function AddToDo({AddNewTodo}: {AddNewTodo: void}) {

    const [text, setText] = useState("");

    const changeHandler=(val)=> {
        setText(val)
    }
  return (
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={changeHandler}
        style={styles.input}
      />

      <Button onPress={() => AddNewTodo(text)} title="Add" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({

    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddinVertical:6,
        borderBottomWidth:1,
        borderBottomColor: "#ddd"
    }

})