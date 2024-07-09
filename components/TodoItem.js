import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons} from "@expo/vector-icons"
// https://icons.expo.fyi/Index

interface props {
  item: Array;
  pressHandler: () => void;
  EmptyList:boolean;
}

export default function TodeItem({item,pressHanlder, EmptyList}: props) {
    return (
      <TouchableOpacity
        onPress={() => pressHanlder(item.key)}
        disabled={EmptyList}
      >
        <View style={styles.item}>
          {!EmptyList && <MaterialIcons name="delete" size={18} color="#333" />}
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
  },
});