import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

interface props {
  item: Array;
  pressHandler: () => void;
}

export default function TodeItem({item,pressHanlder}: props) {
    return (
      <View>
        <TouchableOpacity onPress={()=> pressHanlder(item.key)}>
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );


}

const styles= StyleSheet.create({
text: {

    padding:16,
    marginTop:16,
    borderColor:"#bbb",
    borderWidth:1,
    borderStyle: "dashed",
    borderRadius:10
}



})