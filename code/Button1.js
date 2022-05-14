import React, {useContext} from "react";
import {TouchableOpacity, View, Text, StyleSheet, Platform} from "react-native";
import PropTypes from "prop-types";
import {GlobalContext} from "./GlobalProvider";

export default function Button1({
  value,
  backgroundColor,
  onPress,
  color1,
  longPress,
}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          height:
            Platform.Version === 1
              ? 2.6
              : Platform.Version === 2
              ? 5.2
              : Platform.Version === 3
              ? 7.8
              : Platform.Version === 4
              ? 10.4
              : Platform.Version === 5
              ? 13
              : Platform.Version === 6
              ? 15.6
              : Platform.Version === 7
              ? 18.2
              : Platform.Version === 8
              ? 20.8
              : Platform.Version === 9
              ? 23.4
              : Platform.Version === 10
              ? 26
              : Platform.Version === 11
              ? 28.6
              : Platform.Version === 12
              ? 31.2
              : Platform.Version === 13
              ? 33.8
              : Platform.Version === 14
              ? 36.4
              : Platform.Version === 15
              ? 39
              : Platform.Version === 16
              ? 41.6
              : Platform.Version === 17
              ? 44.2
              : Platform.Version === 18
              ? 46.8
              : Platform.Version === 19
              ? 49.4
              : Platform.Version === 20
              ? 52
              : Platform.Version === 21
              ? 54.6
              : Platform.Version === 22
              ? 57.2
              : Platform.Version === 23
              ? 59.8
              : Platform.Version === 24
              ? 62.4
              : Platform.Version === 25
              ? 65
              : Platform.Version === 26
              ? 67.6
              : Platform.Version === 27
              ? 70.2
              : Platform.Version === 28
              ? 72.8
              : Platform.Version === 29
              ? 75.4
              : Platform.Version === 30
              ? 78
              : Platform.Version === 31
              ? 80.6
              : Platform.Version === 32
              ? 83.2
              : Platform.Version === 33
              ? 85.6
              : Platform.Version === 34
              ? 85.6
              : Platform.Version === 35
              ? 85.6
              : Platform.Version === 36
              ? 85.6
              : 0,
          width:
            Platform.Version === 1
              ? 2.6
              : Platform.Version === 2
              ? 5.2
              : Platform.Version === 3
              ? 7.8
              : Platform.Version === 4
              ? 10.4
              : Platform.Version === 5
              ? 13
              : Platform.Version === 6
              ? 15.6
              : Platform.Version === 7
              ? 18.2
              : Platform.Version === 8
              ? 20.8
              : Platform.Version === 9
              ? 23.4
              : Platform.Version === 10
              ? 26
              : Platform.Version === 11
              ? 28.6
              : Platform.Version === 12
              ? 31.2
              : Platform.Version === 13
              ? 33.8
              : Platform.Version === 14
              ? 36.4
              : Platform.Version === 15
              ? 39
              : Platform.Version === 16
              ? 41.6
              : Platform.Version === 17
              ? 44.2
              : Platform.Version === 18
              ? 46.8
              : Platform.Version === 19
              ? 49.4
              : Platform.Version === 20
              ? 52
              : Platform.Version === 21
              ? 54.6
              : Platform.Version === 22
              ? 57.2
              : Platform.Version === 23
              ? 59.8
              : Platform.Version === 24
              ? 62.4
              : Platform.Version === 25
              ? 65
              : Platform.Version === 26
              ? 67.6
              : Platform.Version === 27
              ? 70.2
              : Platform.Version === 28
              ? 72.8
              : Platform.Version === 29
              ? 75.4
              : Platform.Version === 30
              ? 78
              : Platform.Version === 31
              ? 80.6
              : Platform.Version === 32
              ? 83.2
              : Platform.Version === 33
              ? 85.8
              : Platform.Version === 34
              ? 85.6
              : Platform.Version === 35
              ? 85.6
              : Platform.Version === 36
              ? 85.6
              : 0,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          shadowColor: "black",
          shadowOpacity: 0.16,
          elevation: 10,
        }}
        onPress={onPress}
        activeOpacity={0.2}
        onLongPress={longPress}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            textShadowColor: "black",
            shadowOpacity: 0.9,
            color: color1,
            fontFamily: "sans-serif",
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

Button1.propTypes = {
  value: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  longPress: PropTypes.func,
};
