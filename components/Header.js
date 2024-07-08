import React from "react"
import {StyleSheet, Text, View} from "react-native"

export default function Header() {

return (

<View style={styles.header}>

    <Text style={styles.title}>My todos list:</Text>
</View>

)



}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color:"#fff",
    // display:"flex",
    fontSize: 24,
    // alignSelf:"center"
  },
});