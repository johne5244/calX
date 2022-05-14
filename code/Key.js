import React, {useContext, useRef, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import Button1 from "./Button1";
import {GlobalContext} from "./GlobalProvider";

export default function Key() {
  const RefSheet = useRef(null);
  const {
    AC,
    DEL,
    Percent,
    Divide,
    seven,
    eight,
    nine,
    multiply,
    four,
    five,
    six,
    minus,
    one,
    two,
    three,
    doubleMinus,
    add,
    zero,
    dot,
    equal,
    Sin,
    Cos,
    Tan,
    Open1,
    Close1,
    SquareRoot,
    Power,
    Factorial1,
    Pie,
    Infinity1,
    Log,
    Log10,
  } = useContext(GlobalContext);

  const RenderContent = () => (
    <View style={Design?.RenderHeader}>
      <View style={Design?.firstLine}>
        <TouchableOpacity
          style={Design?.button}
          onPress={Sin}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>sin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={Cos}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>cos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={Tan}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>tan</Text>
        </TouchableOpacity>
      </View>

      <View style={Design?.firstLine}>
        <TouchableOpacity
          style={Design?.button}
          onPress={Log}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={Log10}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>log</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={Factorial1}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>!</Text>
        </TouchableOpacity>
      </View>

      <View style={Design?.firstLine}>
        <TouchableOpacity
          style={Design?.button}
          onPress={Pie}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>π</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={Infinity1}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>e</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={Power}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}> ^</Text>
        </TouchableOpacity>
      </View>

      <View style={Design?.firstLine}>
        <TouchableOpacity
          style={Design?.button}
          onPress={Open1}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={Close1}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Design?.button}
          onPress={SquareRoot}
          activeOpacity={0.3}
        >
          <Text style={Design?.text}>√</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const RenderHeader = () => (
    <View
      style={{
        width: "100%",
        height: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#63D23C",
      }}
    />
  );

  return (
    <View style={Design.Box}>
      <View style={Design?.row}>
        <Button1
          value="AC"
          backgroundColor="#EF8A46"
          onPress={AC}
          longPress={AC}
          color1="#FBF2F2"
        />
        <Button1
          value="DEL"
          backgroundColor="#EF3F3F"
          onPress={DEL}
          longPress={AC}
          color1="#FBF2F2"
        />
        <Button1
          value="%"
          backgroundColor="#6CB5E5"
          onPress={Percent}
          color1="#FBF2F2"
        />
        <Button1
          value="÷"
          backgroundColor="#6CB5E5"
          onPress={Divide}
          color1="#FBF2F2"
        />
      </View>
      <View style={Design?.row}>
        <Button1
          value="7"
          backgroundColor="#D9CCCC"
          onPress={seven}
          color1="#707070"
        />
        <Button1
          value="8"
          backgroundColor="#D9CCCC"
          onPress={eight}
          color1="#707070"
        />
        <Button1
          value="9"
          backgroundColor="#D9CCCC"
          onPress={nine}
          color1="#707070"
        />
        <Button1
          value="x"
          backgroundColor="#6CB5E5"
          onPress={multiply}
          color1="#FBF2F2"
        />
      </View>
      <View style={Design?.row}>
        <Button1
          value="4"
          backgroundColor="#D9CCCC"
          onPress={four}
          color1="#707070"
        />
        <Button1
          value="5"
          backgroundColor="#D9CCCC"
          onPress={five}
          color1="#707070"
        />
        <Button1
          value="6"
          backgroundColor="#D9CCCC"
          onPress={six}
          color1="#707070"
        />
        <Button1
          value="-"
          backgroundColor="#6CB5E5"
          onPress={minus}
          color1="#FBF2F2"
        />
      </View>
      <View style={Design?.row}>
        <Button1
          value="1"
          backgroundColor="#D9CCCC"
          onPress={one}
          color1="#707070"
        />
        <Button1
          value="2"
          backgroundColor="#D9CCCC"
          onPress={two}
          color1="#707070"
        />
        <Button1
          value="3"
          backgroundColor="#D9CCCC"
          onPress={three}
          color1="#707070"
        />
        <Button1
          value="+"
          backgroundColor="#6CB5E5"
          onPress={add}
          color1="#FBF2F2"
        />
      </View>
      <View style={Design?.row}>
        <Button1
          value="±"
          backgroundColor="#6CB5E5"
          onPress={doubleMinus}
          color1="#FBF2F2"
        />
        <Button1
          value="0"
          backgroundColor="#D9CCCC"
          onPress={zero}
          color1="#707070"
        />
        <Button1
          value="."
          backgroundColor="#D9CCCC"
          onPress={dot}
          color1="#707070"
        />
        <Button1
          value="="
          backgroundColor="#6CB5E5"
          onPress={equal}
          color1="#FBF2F2"
        />
      </View>
      <TouchableWithoutFeedback>
        <BottomSheet
          ref={RefSheet}
          snapPoints={[25, 320]}
          enabledGestureInteraction
          renderHeader={RenderHeader}
          renderContent={RenderContent}
          enabledContentTapInteraction={false}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const Design = StyleSheet.create({
  Box: {
    height: "60%",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  firstLine: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 17,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
    zIndex: -1,
  },
  RenderHeader: {
    backgroundColor: "#63D23C",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
