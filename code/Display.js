import React, {useContext, useState, useRef} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import {GlobalContext} from "./GlobalProvider";

export default function Display() {
  const {input, output, Length1, animaton1, setAnimation1} =
    useContext(GlobalContext);

  const Array1 = [{title: input}];
  const opacity = new Animated.Value(0);
  const renderItem = ({item}) => (
    <View style={{flex: 1, top: 20}}>
      <SafeAreaView
        style={{
          flex: 0.4,
          width:
            Length1 == 1
              ? 40
              : Length1 == 2
              ? 50
              : Length1 == 3
              ? 60
              : Length1 == 4
              ? 70
              : Length1 == 5
              ? 85
              : Length1 == 6 || Length1 > 6
              ? Number(Length1) * 16
              : 25,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
        <Text style={styling?.Input}> {item?.title} </Text>
      </SafeAreaView>
    </View>
  );

  const Anime = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.elastic(9),
      useNativeDriver: true,
    }).start();
  };
  animaton1 === true &&
    setTimeout(() => {
      setAnimation1(false);
    }, 500);

  animaton1 && Anime();
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <View style={styling?.container}>
      {animaton1 === true ? (
        <Animated.View
          style={{
            backgroundColor: "#D9CCCC",
            opacity,
            width: 20,
            height: 12,
            transform: [{scale: size}, {perspective: size}],
          }}
        />
      ) : (
        <>
          <FlatList
            data={Array1}
            renderItem={renderItem}
            keyExtractor={item => item?.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            inverted
            contentContainerStyle={styling?.content}
          />
          <View style={styling?.second}>
            <Text
              style={{
                fontWeight: "bold",
                textShadowColor: "#707070",
                elevation: 10,
                color: "#63D23C",
                fontSize: 35,
                fontFamily: "sans-serif",
              }}
            >
              {" "}
              {output}{" "}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  Input: {
    flexDirection: "row-reverse",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textShadowColor: "#707070",
  },
  second: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  content: {
    height: "40%",
    justifyContent: "flex-end",
    alignItems: "center",
    top: 20,
  },
});
