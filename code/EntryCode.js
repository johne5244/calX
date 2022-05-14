import React, {useContext} from "react";
import {SafeAreaView, StyleSheet, View, Text} from "react-native";
import Display from "./Display";
import {GlobalContext} from "./GlobalProvider";
import Key from "./Key";
import Modal1 from "./Modal1.js";
import Modal2 from "./Modal2";

export default function EntryCode() {
  const {visible, visible2} = useContext(GlobalContext);
  return (
    <>
      {visible === true ? (
        <Modal1 />
      ) : visible2 === true ? (
        <Modal2 />
      ) : (
        <SafeAreaView style={Style?.container}>
          <Display />
          <Key />
        </SafeAreaView>
      )}
    </>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
});
