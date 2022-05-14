import React, {useState, useContext} from "react";
import {StyleSheet} from "react-native";
import {Modal, Portal, Text, Button, Provider} from "react-native-paper";
import {GlobalContext} from "./GlobalProvider";

export default function Modal2() {
  const {visible2, setVisible2} = useContext(GlobalContext);

  return (
    <Provider>
      <Portal>
        <Modal
          visible={
            visible2 === true
              ? setTimeout(() => {
                  setVisible2(false);
                }, 500)
              : visible2
          }
          contentContainerStyle={styles?.containerStyle}
        >
          <Text style={styles?.box}>
            Maximum number of value digits(10) exceeds
          </Text>
        </Modal>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#707070",
  },
  box: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6CB5E5",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    justifyContent: "center",
    elevation: 20,
    opacity: 0.7,
    padding: 20,
    fontFamily: "sans-serif",
  },
});
