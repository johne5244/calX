import React, {createContext, useState, useEffect, useRef} from "react";
import {Text, Vibration} from "react-native";
import PropTypes from "prop-types";

export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [output, setOutput] = useState("");

  const [operator, setOperator] = useState(false);
  const [clickButton, setClickButton] = useState(false);
  const [toggleBracket, setToggleBracket] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [sideState, setSideState] = useState(false);
  const [params, setParams] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [delState, setDelState] = useState(false);
  const [pie, setPie] = useState(false);
  const [infinity1, setInfinity1] = useState(false);
  const [infinity2, setInfinity2] = useState(false);
  const [ten, setTen] = useState(0);
  const [validNumber, setValidNumber] = useState(false);
  const [validNumber2, setValidNumber2] = useState(false);
  const [factorial, setFactorial] = useState(false);
  const [zero1, setZero1] = useState(false);
  const [power, setPower] = useState(false);
  const [factor, setFactor] = useState(false);
  const [delFunction, setDelFunction] = useState(false);
  const [delFunction1, setDelFunction1] = useState(false);
  const [delFunction2, setDelFunction2] = useState(false);
  const [delFunction3, setDelFunction3] = useState(false);
  const [factorLoop, setFactorLoop] = useState(false);
  const [factorLoop1, setFactorLoop1] = useState(false);
  const [factorLoop2, setFactorLoop2] = useState(false);
  const [animaton1, setAnimation1] = useState(false);
  const [whileLoop, setWhileLoop] = useState(false);

  useEffect(() => {
    if (factor === true) {
      Power();
      setTimeout(() => {
        setFactor(false);
      }, 500);
    }
    if (
      delFunction === true ||
      delFunction1 === true ||
      delFunction2 === true ||
      delFunction3
    ) {
      DEL();
      setTimeout(() => {
        setDelFunction(false);
        setDelFunction1(false);
        setDelFunction2(false);
        setDelFunction3(false);
      }, 500);
    }
    if (factorLoop === true || factorLoop1 === true || factorLoop2 === true) {
      Factorial1();
      setTimeout(() => {
        setFactorLoop(false);
        setFactorLoop1(false);
        setFactorLoop2(false);
      }, 500);
    }
  }, []);

  const Value = [
    "AC",
    "DEL",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "-",
    "0",
    ".",
  ];

  const bottomValue = [
    "sin(",
    "tan(",
    "cos(",
    "ln(",
    "(",
    ")",
    "^",
    "!",
    "√",
    "π",
    "e",
    "log(",
  ];

  const bottomValue1 = [
    "*Math.sin(",
    "*Math.tan(",
    "*Math.cos(",
    "*Math.log(",
    "(",
    ")",
    "*Math.pow(",
    "factorial(",
    "*Math.sqrt(",
    "*Math.PI",
    "Math.E",
    "*Math.log10(",
  ];

  const Error11 = (
    <Text
      style={{
        color: "red",
        fontWeight: "500",
      }}
    >
      {" "}
      Not a number!{" "}
    </Text>
  );

  const Error1 = (
    <Text
      style={{
        color: "red",
        fontSize: 50,
        borderColor: "red",
      }}
    >
      {" "}
      Error{" "}
    </Text>
  );

  const Error2 = (
    <Text
      style={{
        color: "red",
        fontSize: 50,
        borderColor: "red",
      }}
    >
      {"∞"}
    </Text>
  );

  const gamma = n => {
    // accurate to about 15 decimal places
    //some magic constants
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
      p = [
        0.99999999999980993, 676.5203681218851, -1259.1392167224028,
        771.32342877765313, -176.61502916214059, 12.507343278686905,
        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
      ];
    if (n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    } else {
      n--;
      var x = p[0];
      for (var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
    }
  };

  const Factorial = z => {
    if (z % 1 != 0) return gamma(z + 1);
    if (z === 0 || z === 1) return 1;
    let result = 1;
    for (let i = 1; i <= z; i++) {
      result = result * i;
      result == Infinity && "∞";
    }
    return result.toString();
  };

  const AC = () => {
    setInput("");
    setInput1("");
    setOutput("");
    setOperator(false);
    setDelState(false);
    setClickButton(false);
    setParams(0);
    setTotalNumber(0);
    setVisible(false);
    setVisible2(false);
    setPie(false);
    setInfinity1(false);
    setValidNumber(false);
    setValidNumber2(false);
    setTen(0);
    setToggleBracket(false);
    setSideState(false);
    setFactorial(false);
    setInfinity2(false);
    setAnimation1(true);
  };

  const DEL = () => {
    let double = input.split("").length;
    let double1 = input.split("").length;

    if (input === "") {
      setInput("");
      setInput1("");
      setOutput("");
      setOperator(false);
      setDelState(false);
      setClickButton(false);
      setParams(0);
      setTotalNumber(0);
      setVisible(false);
      setPie(false);
      setInfinity1(false);
      setValidNumber(false);
      setValidNumber2(false);
      setTen(0);
      setVisible2(false);
      setToggleBracket(false);
      setSideState(false);
      setFactorial(false);
      setAnimation1(true);
    } else if (operator === true) {
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -1));
      setOutput("");

      input.endsWith("(") ||
      input.endsWith(")") ||
      input.endsWith("x") ||
      input.endsWith("+") ||
      input.endsWith("-") ||
      input.endsWith("÷") ||
      input.endsWith("%")
        ? setWhileLoop(true)
        : setWhileLoop(false);
      ten > 1 ? [setTen(ten - 1), setVisible2(false)] : setTen(ten + 0);
      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else if (input1.endsWith("7.188058017927146*") && input.endsWith("π!")) {
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.replace("7.188058017927146*", "3.14159*"));
      setOutput("");
      setTen(ten + 0);
      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else if (clickButton === true) {
      if (input1.endsWith("Math.pow(3.14159,") && input.endsWith("π^")) {
        input1.replace("Math.pow(3.14159,", "3.14159").includes("(") ||
        input1.replace("Math.pow(3.14159,", "3.14159").includes(",")
          ? [
              setOperator(false),
              setClickButton(true),
              setInput1(input1 =>
                input1.replace("Math.pow(3.14159,", "3.14159*")
              ),
              setInput(input => input.slice(0, -1)),
              setParams(params === 0 ? params + 0 : params - 1),
            ]
          : [
              setClickButton(false),
              setOperator(true),
              setInput1(input1 =>
                input1.replace("Math.pow(3.14159,", "3.14159*")
              ),
              setInput(input => input.slice(0, -1)),
              setParams(params === 0 ? params + 0 : params - 1),
            ];
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input1.endsWith(",") && input.endsWith("^")) {
        input1.replace("Math.pow(", "").replace(",", "").includes("(") ||
        input1.replace("Math.pow(", "").replace(",", "").includes(",")
          ? [
              setOperator(false),
              setClickButton(true),
              setInput1(input1 =>
                input1.replace("Math.pow(", "").replace(",", "")
              ),
              setInput(input => input.slice(0, -1)),
              setParams(params === 0 ? params + 0 : params - 1),
            ]
          : [
              setClickButton(false),
              setOperator(true),
              setInput1(input1 =>
                input1.replace("Math.pow(", "").replace(",", "")
              ),
              setInput(input => input.slice(0, -1)),
              setParams(params === 0 ? params + 0 : params - 1),
            ];

        input.slice(0, -1).endsWith("0") ||
        input.slice(0, -1).endsWith("1") ||
        input.slice(0, -1).endsWith("2") ||
        input.slice(0, -1).endsWith("3") ||
        input.slice(0, -1).endsWith("4") ||
        input.slice(0, -1).endsWith("5") ||
        input.slice(0, -1).endsWith("6") ||
        input.slice(0, -1).endsWith("7") ||
        input.slice(0, -1).endsWith("8") ||
        input.slice(0, -1).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (
        (input1.endsWith("*Math.cos(") ||
          input1.endsWith("*Math.tan(") ||
          input1.endsWith("*Math.sin(")) &&
        (input.endsWith("sin(") ||
          input.endsWith("tan(") ||
          input.endsWith("cos("))
      ) {
        setInput(input => input.slice(0, -4));
        setInput1(input1 => input1.slice(0, -10));
        setOutput("");
        setParams(params === 0 ? params + 0 : params - 1);

        input1.slice(0, -10).includes("(") || input1.slice(0, -10).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -4).endsWith("0") ||
        input.slice(0, -4).endsWith("1") ||
        input.slice(0, -4).endsWith("2") ||
        input.slice(0, -4).endsWith("3") ||
        input.slice(0, -4).endsWith("4") ||
        input.slice(0, -4).endsWith("5") ||
        input.slice(0, -4).endsWith("6") ||
        input.slice(0, -4).endsWith("7") ||
        input.slice(0, -4).endsWith("8") ||
        input.slice(0, -4).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 4), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 4
            );
      } else if (
        (input1.endsWith("*Math.cos(") ||
          input1.endsWith("*Math.tan(") ||
          input1.endsWith("*Math.sin(")) &&
        (input.endsWith("xsin(") ||
          input.endsWith("xtan(") ||
          input.endsWith("xcos("))
      ) {
        setInput(input => input.slice(0, -4));
        setInput1(input1 => input1.slice(0, -9));
        setOutput("");

        input1.slice(0, -9).includes("(") || input1.slice(0, -9).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -4).endsWith("0") ||
        input.slice(0, -4).endsWith("1") ||
        input.slice(0, -4).endsWith("2") ||
        input.slice(0, -4).endsWith("3") ||
        input.slice(0, -4).endsWith("4") ||
        input.slice(0, -4).endsWith("5") ||
        input.slice(0, -4).endsWith("6") ||
        input.slice(0, -4).endsWith("7") ||
        input.slice(0, -4).endsWith("8") ||
        input.slice(0, -4).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 4), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 4
            );
      } else if (
        (input1.endsWith("Math.cos(") ||
          input1.endsWith("Math.tan(") ||
          input1.endsWith("Math.sin(")) &&
        (input.endsWith("sin(") ||
          input.endsWith("tan(") ||
          input.endsWith("cos("))
      ) {
        setInput(input => input.slice(0, -4));
        setInput1(input1 => input1.slice(0, -9));
        setOutput("");
        input1.slice(0, -9).includes("(") || input1.slice(0, -9).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -4).endsWith("0") ||
        input.slice(0, -4).endsWith("1") ||
        input.slice(0, -4).endsWith("2") ||
        input.slice(0, -4).endsWith("3") ||
        input.slice(0, -4).endsWith("4") ||
        input.slice(0, -4).endsWith("5") ||
        input.slice(0, -4).endsWith("6") ||
        input.slice(0, -4).endsWith("7") ||
        input.slice(0, -4).endsWith("8") ||
        input.slice(0, -4).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 4), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 4
            );
      } else if (input1.endsWith("*Math.log10(") && input.endsWith("log(")) {
        setInput1(input1 => input1.slice(0, -12));
        setInput(input => input.slice(0, -4));
        setOutput("");
        input1.slice(0, -12).includes("(") || input1.slice(0, -12).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -4).endsWith("0") ||
        input.slice(0, -4).endsWith("1") ||
        input.slice(0, -4).endsWith("2") ||
        input.slice(0, -4).endsWith("3") ||
        input.slice(0, -4).endsWith("4") ||
        input.slice(0, -4).endsWith("5") ||
        input.slice(0, -4).endsWith("6") ||
        input.slice(0, -4).endsWith("7") ||
        input.slice(0, -4).endsWith("8") ||
        input.slice(0, -4).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 4), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 4
            );
      } else if (input1.endsWith("Math.log10(") && input.endsWith("log(")) {
        setInput1(input1 => input1.slice(0, -11));
        setInput(input => input.slice(0, -4));
        setOutput("");

        input1.slice(0, -11).includes("(") || input1.slice(0, -11).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -4).endsWith("0") ||
        input.slice(0, -4).endsWith("1") ||
        input.slice(0, -4).endsWith("2") ||
        input.slice(0, -4).endsWith("3") ||
        input.slice(0, -4).endsWith("4") ||
        input.slice(0, -4).endsWith("5") ||
        input.slice(0, -4).endsWith("6") ||
        input.slice(0, -4).endsWith("7") ||
        input.slice(0, -4).endsWith("8") ||
        input.slice(0, -4).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 4), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 4
            );
      } else if (input1.endsWith("*Math.log10(") && input.endsWith("xlog(")) {
        setInput1(input1 => input1.slice(0, -11));
        setInput(input => input.slice(0, -4));
        setOutput("");

        input1.slice(0, -11).includes("(") || input1.slice(0, -11).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -4).endsWith("0") ||
        input.slice(0, -4).endsWith("1") ||
        input.slice(0, -4).endsWith("2") ||
        input.slice(0, -4).endsWith("3") ||
        input.slice(0, -4).endsWith("4") ||
        input.slice(0, -4).endsWith("5") ||
        input.slice(0, -4).endsWith("6") ||
        input.slice(0, -4).endsWith("7") ||
        input.slice(0, -4).endsWith("8") ||
        input.slice(0, -4).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 4), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 4
            );
      } else if (input1.endsWith("*Math.log(") && input.endsWith("ln(")) {
        setInput1(input1 => input1.slice(0, -10));
        setInput(input => input.slice(0, -3));
        setOutput("");
        input1.slice(0, -10).includes("(") || input1.slice(0, -10).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -3).endsWith("0") ||
        input.slice(0, -3).endsWith("1") ||
        input.slice(0, -3).endsWith("2") ||
        input.slice(0, -3).endsWith("3") ||
        input.slice(0, -3).endsWith("4") ||
        input.slice(0, -3).endsWith("5") ||
        input.slice(0, -3).endsWith("6") ||
        input.slice(0, -3).endsWith("7") ||
        input.slice(0, -3).endsWith("8") ||
        input.slice(0, -3).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 3), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 3
            );
      } else if (input1.endsWith("*Math.log(") && input.endsWith("xln(")) {
        setInput1(input1 => input1.slice(0, -9));
        setInput(input => input.slice(0, -3));
        setOutput("");
        input1.slice(0, -9).includes("(") || input1.slice(0, -9).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -3).endsWith("0") ||
        input.slice(0, -3).endsWith("1") ||
        input.slice(0, -3).endsWith("2") ||
        input.slice(0, -3).endsWith("3") ||
        input.slice(0, -3).endsWith("4") ||
        input.slice(0, -3).endsWith("5") ||
        input.slice(0, -3).endsWith("6") ||
        input.slice(0, -3).endsWith("7") ||
        input.slice(0, -3).endsWith("8") ||
        input.slice(0, -3).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 3), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 3
            );
      } else if (input1.endsWith("Math.log(") && input.endsWith("ln(")) {
        setInput1(input1 => input1.slice(0, -9));
        setInput(input => input.slice(0, -3));
        setOutput("");
        input1.slice(0, -9).includes("(") || input1.slice(0, -9).includes(",")
          ? [setClickButton(true), setOperator(false)]
          : [setClickButton(false), setOperator(true)];
        input.slice(0, -3).endsWith("0") ||
        input.slice(0, -3).endsWith("1") ||
        input.slice(0, -3).endsWith("2") ||
        input.slice(0, -3).endsWith("3") ||
        input.slice(0, -3).endsWith("4") ||
        input.slice(0, -3).endsWith("5") ||
        input.slice(0, -3).endsWith("6") ||
        input.slice(0, -3).endsWith("7") ||
        input.slice(0, -3).endsWith("8") ||
        input.slice(0, -3).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        setParams(params === 0 ? params + 0 : params - 1);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 3), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 3
            );
      } else if (input1.endsWith("*Math.E") && input.endsWith("e")) {
        setInfinity1(false);
        setInput1(input1 => input1.slice(0, -7));
        setInput(input => input.slice(0, -1));
        setOutput("");

        input.slice(0, -1).endsWith("0") ||
        input.slice(0, -1).endsWith("1") ||
        input.slice(0, -1).endsWith("2") ||
        input.slice(0, -1).endsWith("3") ||
        input.slice(0, -1).endsWith("4") ||
        input.slice(0, -1).endsWith("5") ||
        input.slice(0, -1).endsWith("6") ||
        input.slice(0, -1).endsWith("7") ||
        input.slice(0, -1).endsWith("8") ||
        input.slice(0, -1).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input1.endsWith("*Math.E") && input.endsWith("xe")) {
        setInput1(input1 => input1.slice(0, -6));
        setInput(input => input.slice(0, -1));
        setOutput("");
        setInfinity1(false);
        input.slice(0, -1).endsWith("0") ||
        input.slice(0, -1).endsWith("1") ||
        input.slice(0, -1).endsWith("2") ||
        input.slice(0, -1).endsWith("3") ||
        input.slice(0, -1).endsWith("4") ||
        input.slice(0, -1).endsWith("5") ||
        input.slice(0, -1).endsWith("6") ||
        input.slice(0, -1).endsWith("7") ||
        input.slice(0, -1).endsWith("8") ||
        input.slice(0, -1).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input1.endsWith("Math.E") && input.endsWith("e")) {
        setInput1(input1 => input1.slice(0, -6));
        setInput(input => input.slice(0, -1));
        setOutput("");
        setInfinity1(false);
        input.slice(0, -1).endsWith("0") ||
        input.slice(0, -1).endsWith("1") ||
        input.slice(0, -1).endsWith("2") ||
        input.slice(0, -1).endsWith("3") ||
        input.slice(0, -1).endsWith("4") ||
        input.slice(0, -1).endsWith("5") ||
        input.slice(0, -1).endsWith("6") ||
        input.slice(0, -1).endsWith("7") ||
        input.slice(0, -1).endsWith("8") ||
        input.slice(0, -1).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input1.endsWith("*3.14159*") && !input.endsWith("xπ")) {
        const c = input1 => input1.slice(0, -9);
        const d = input => input.slice(0, -1);
        setInput(d);
        setInput1(c);
        setOutput("");
        input.slice(0, -1).endsWith("0") ||
        input.slice(0, -1).endsWith("1") ||
        input.slice(0, -1).endsWith("2") ||
        input.slice(0, -1).endsWith("3") ||
        input.slice(0, -1).endsWith("4") ||
        input.slice(0, -1).endsWith("5") ||
        input.slice(0, -1).endsWith("6") ||
        input.slice(0, -1).endsWith("7") ||
        input.slice(0, -1).endsWith("8") ||
        input.slice(0, -1).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input1.endsWith("*3.14159*") && input.endsWith("xπ")) {
        const c = input1 => input1.slice(0, -8);
        const d = input => input.slice(0, -1);
        setInput(d);
        setInput1(c);
        setOutput("");
        input.slice(0, -1).endsWith("0") ||
        input.slice(0, -1).endsWith("1") ||
        input.slice(0, -1).endsWith("2") ||
        input.slice(0, -1).endsWith("3") ||
        input.slice(0, -1).endsWith("4") ||
        input.slice(0, -1).endsWith("5") ||
        input.slice(0, -1).endsWith("6") ||
        input.slice(0, -1).endsWith("7") ||
        input.slice(0, -1).endsWith("8") ||
        input.slice(0, -1).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input1.endsWith("3.14159*") && input.endsWith("π")) {
        const c = input1 => input1.slice(0, -8);
        const d = input => input.slice(0, -1);
        setInput(d);
        setInput1(c);
        setOutput("");
        input.slice(0, -1).endsWith("0") ||
        input.slice(0, -1).endsWith("1") ||
        input.slice(0, -1).endsWith("2") ||
        input.slice(0, -1).endsWith("3") ||
        input.slice(0, -1).endsWith("4") ||
        input.slice(0, -1).endsWith("5") ||
        input.slice(0, -1).endsWith("6") ||
        input.slice(0, -1).endsWith("7") ||
        input.slice(0, -1).endsWith("8") ||
        input.slice(0, -1).endsWith("9")
          ? setWhileLoop(true)
          : setWhileLoop(false);

        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (
        input1.endsWith("7.188058017927146*") &&
        input.endsWith("π!")
      ) {
        setInput(input => input.slice(0, -1));
        setInput1(input1 => input1.replace("7.188058017927146*", "3.14159*"));
        setOutput("");

        setTen(ten + 0);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input.endsWith("!") && infinity2 === false) {
        setDelFunction(true);
        let x;
        let Array1 = [];
        let Array2 = [];
        let s = "+" || "-" || "/" || "*" || "(" || "," || "%";
        while (double1--) {
          let z = input[double1];
          Array1.push(z);
          if (
            z.endsWith("(") ||
            z.endsWith(")") ||
            z.endsWith("^") ||
            z.endsWith("√") ||
            z.endsWith("π") ||
            z.endsWith("e") ||
            z.endsWith("x") ||
            z.endsWith("+") ||
            z.endsWith("-") ||
            z.endsWith("÷") ||
            z.endsWith("%")
          )
            break;
        }

        for (let w = Array1.length; w >= 0; w--) {
          Array2.push(Array1[w]);
        }

        const rep = Array2.join("")
          .replace("!", "")
          .replace("(", "")
          .replace(")", "")
          .replace("^", "")
          .replace("π", "")
          .replace("e", "")
          .replace("x", "")
          .replace("+", "")
          .replace("-", "")
          .replace("÷", "")
          .replace("%", "")
          .replace("√", "");

        const t = `${Factorial(rep)}`.length + 1;
        setInput(input => input.slice(0, -1));
        setInput1(input1 => input1.slice(0, -t) + rep);
        setOutput("");
        setTen(ten + rep.length);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else if (input.endsWith("!") && infinity2 === true) {
        setDelFunction1(true);
        let c = [];
        let d = [];
        let a = input;
        while (double--) {
          const z = a[double];
          c.push(z);
          if (
            z.endsWith("(") ||
            z.endsWith(")") ||
            z.endsWith("^") ||
            z.endsWith("√") ||
            z.endsWith("π") ||
            z.endsWith("e") ||
            z.endsWith("x") ||
            z.endsWith("+") ||
            z.endsWith("-") ||
            z.endsWith("÷") ||
            z.endsWith("%")
          )
            break;
        }

        for (let w = c.length; w >= 0; w--) {
          d.push(c[w]);
        }

        const f = d
          .join("")
          .replace("!", "")
          .replace("(", "")
          .replace(")", "")
          .replace("^", "")
          .replace("π", "")
          .replace("e", "")
          .replace("x", "")
          .replace("+", "")
          .replace("-", "")
          .replace("÷", "")
          .replace("%", "")
          .replace("√", "");

        setInput(input => input.slice(0, -1));
        setInput1(input1 => input1.replace("Infinity*", "") + f);
        setOutput("");
        setTen(ten + f.length);
      } else if (input1.endsWith("0.")) {
        setInput(input => input.slice(0, -2));
        setInput1(input1 => input1.slice(0, -2));
        setOutput("");
        ten > 1 ? [setTen(ten - 1), setVisible2(false)] : setTen(ten + 0);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      } else {
        setInput(input => input.slice(0, -1));
        setInput1(input1 => input1.slice(0, -1));
        setOutput("");

        ten > 1 ? [setTen(ten - 1), setVisible2(false)] : setTen(ten + 0);
        totalNumber > 100
          ? [setTotalNumber(totalNumber - 1), setVisible(false)]
          : setTotalNumber(
              totalNumber === 0 ? totalNumber + 0 : totalNumber - 1
            );
      }
    } else if (input.endsWith("!") && infinity2 === false) {
      setDelFunction2(true);
      let x;
      let Array1 = [];
      let Array2 = [];
      let s = "+" || "-" || "/" || "*" || "(" || "," || "%";
      while (double1--) {
        let z = input[double1];
        Array1.push(z);
        if (
          z.endsWith("(") ||
          z.endsWith(")") ||
          z.endsWith("^") ||
          z.endsWith("√") ||
          z.endsWith("π") ||
          z.endsWith("e") ||
          z.endsWith("x") ||
          z.endsWith("+") ||
          z.endsWith("-") ||
          z.endsWith("÷") ||
          z.endsWith("%")
        )
          break;
      }

      for (let w = Array1.length; w >= 0; w--) {
        Array2.push(Array1[w]);
      }

      const rep = Array2.join("")
        .replace("!", "")
        .replace("(", "")
        .replace(")", "")
        .replace("^", "")
        .replace("π", "")
        .replace("e", "")
        .replace("x", "")
        .replace("+", "")
        .replace("-", "")
        .replace("÷", "")
        .replace("%", "")
        .replace("√", "");

      const t = `${Factorial(rep)}`.length + 1;

      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -t) + rep);
      setOutput("");
      setTen(ten + rep.length);
      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else if (input.endsWith("!") && infinity2 === true) {
      setDelFunction3(true);
      let c = [];
      let d = [];
      let a = input;
      while (double--) {
        const z = a[double];
        c.push(z);
        if (
          z.endsWith("(") ||
          z.endsWith(")") ||
          z.endsWith("^") ||
          z.endsWith("√") ||
          z.endsWith("π") ||
          z.endsWith("e") ||
          z.endsWith("x") ||
          z.endsWith("+") ||
          z.endsWith("-") ||
          z.endsWith("÷") ||
          z.endsWith("%")
        )
          break;
      }

      for (let w = c.length; w >= 0; w--) {
        d.push(c[w]);
      }

      const f = d
        .join("")
        .replace("!", "")
        .replace("(", "")
        .replace(")", "")
        .replace("^", "")
        .replace("π", "")
        .replace("e", "")
        .replace("x", "")
        .replace("+", "")
        .replace("-", "")
        .replace("÷", "")
        .replace("%", "")
        .replace("√", "");

      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.replace("Infinity*", "") + f);
      setOutput("");
      setTen(ten + f.length);
    } else if (visible === true) {
      setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -1));
      setOutput("");
      setVisible(false);

      ten > 1
        ? [setTen(ten - 1), setVisible2(false)]
        : setTen(ten === 0 ? ten + 0 : ten - 1);
    } else if (validNumber2 === true) {
      while (double--) {
        setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
        setVisible(false);
        setValidNumber2(false);
        let z = input[double];
        let Array1 = [];
        let arrayLength = Array1.push(z).toString().split("").length;
        setTen(ten + arrayLength - 2);
        if (
          z.endsWith("(") ||
          z.endsWith(")") ||
          z.endsWith("^") ||
          z.endsWith("!") ||
          z.endsWith("√") ||
          z.endsWith("π") ||
          z.endsWith("e") ||
          z.endsWith("x") ||
          z.endsWith("+") ||
          z.endsWith("-") ||
          z.endsWith("÷") ||
          z.endsWith("%")
        )
          break;
      }
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -1));
      setOutput("");
      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else if (input1.endsWith("*3.14159*") && !input.endsWith("xπ")) {
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -9));
      setOutput("");
      input.slice(0, -1).endsWith("0") ||
      input.slice(0, -1).endsWith("1") ||
      input.slice(0, -1).endsWith("2") ||
      input.slice(0, -1).endsWith("3") ||
      input.slice(0, -1).endsWith("4") ||
      input.slice(0, -1).endsWith("5") ||
      input.slice(0, -1).endsWith("6") ||
      input.slice(0, -1).endsWith("7") ||
      input.slice(0, -1).endsWith("8") ||
      input.slice(0, -1).endsWith("9")
        ? setWhileLoop(true)
        : setWhileLoop(false);

      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else if (input1.endsWith("*3.14159*") && input.endsWith("xπ")) {
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -8));
      setOutput("");
      input.slice(0, -1).endsWith("0") ||
      input.slice(0, -1).endsWith("1") ||
      input.slice(0, -1).endsWith("2") ||
      input.slice(0, -1).endsWith("3") ||
      input.slice(0, -1).endsWith("4") ||
      input.slice(0, -1).endsWith("5") ||
      input.slice(0, -1).endsWith("6") ||
      input.slice(0, -1).endsWith("7") ||
      input.slice(0, -1).endsWith("8") ||
      input.slice(0, -1).endsWith("9")
        ? setWhileLoop(true)
        : setWhileLoop(false);

      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else if (input1.endsWith("3.14159*") && input.endsWith("π")) {
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -8));
      setOutput("");
      input.slice(0, -1).endsWith("0") ||
      input.slice(0, -1).endsWith("1") ||
      input.slice(0, -1).endsWith("2") ||
      input.slice(0, -1).endsWith("3") ||
      input.slice(0, -1).endsWith("4") ||
      input.slice(0, -1).endsWith("5") ||
      input.slice(0, -1).endsWith("6") ||
      input.slice(0, -1).endsWith("7") ||
      input.slice(0, -1).endsWith("8") ||
      input.slice(0, -1).endsWith("9")
        ? setWhileLoop(true)
        : setWhileLoop(false);

      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else if (input1.endsWith("0.")) {
      setInput(input => input.slice(0, -2));
      setInput1(input1 => input1.slice(0, -2));
      setOutput("");
      ten > 1 ? [setTen(ten - 2), setVisible2(false)] : setTen(ten + 0);
      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    } else {
      setInput(input => input.slice(0, -1));
      setInput1(input1 => input1.slice(0, -1));
      setOutput("");
      ten > 1 ? [setTen(ten - 1), setVisible2(false)] : setTen(ten + 0);
      totalNumber > 100
        ? [setTotalNumber(totalNumber - 1), setVisible(false)]
        : setTotalNumber(totalNumber === 0 ? totalNumber + 0 : totalNumber - 1);
    }
  };

  const Power = () => {
    try {
      setClickButton(true);
      setOperator(false);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);
      let double = input1.split("").length;
      let t = [];
      let p = [];

      if (input === "") {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
        setTotalNumber(totalNumber + 0);
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",")
      ) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (input.endsWith("!")) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (delState === true) {
        setParams(params + 0);
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (infinity1 === true) {
        setParams(params + 0);
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (input.endsWith("π")) {
        setDelState(true);
        setParams(params + 1);
        setFactor(true);

        setInput(input + "^");
        setInput1(
          (input.endsWith("xπ") ||
            input.endsWith("÷π") ||
            input.endsWith("+π") ||
            input.endsWith(")π") ||
            input.endsWith("-π") ||
            input.endsWith("%π") ||
            input.endsWith("(π") ||
            input.endsWith("π")) &&
            input.replace("3.14159*", "Math.pow(3.14159,")
        );
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setDelState(true);
        setParams(params + 1);
        setFactor(true);

        let d = "*" || "+" || "-" || "/" || "%" || "(" || ",";
        while (double--) {
          let z = input1[double];
          t.push(z);
          if (
            z.endsWith("(") ||
            z.endsWith(",") ||
            z.endsWith("*") ||
            z.endsWith("+") ||
            z.endsWith("-") ||
            z.endsWith("/") ||
            z.endsWith("%")
          )
            break;
        }
        for (let a = t.length; a >= 0; a--) {
          p.push(t[a]);
        }

        const rep = p
          .join("")
          .replace("(", "")
          .replace("*", "")
          .replace("+", "")
          .replace("-", "")
          .replace("/", "")
          .replace("%", "")
          .replace(",", "");

        setInput(input => input + "^");
        setInput1(input1 => input1.slice(0, -rep.length) + `Math.pow(${rep},`);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Sin = () => {
    try {
      setClickButton(true);
      setOperator(false);
      setParams(params + 1);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);
      if (input === "") {
        setInput(input + bottomValue[0]);
        setInput1(input1 + "Math.sin(");
        setOutput("");
        setTotalNumber(totalNumber + 4);
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",")
      ) {
        setInput(input + bottomValue[0]);
        setInput1(input1 + "Math.sin(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];
      } else if (infinity1 === true) {
        setParams(params + 0);
        setInput(input + "");
        setInput1(input1 + "");
      } else if (input.endsWith("!")) {
        setParams(params + 0);
        setInput(input + "");
        setInput1(input1 + "");
      } else {
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];

        setInput(input + bottomValue[0]);
        setInput1(input1 + "*Math.sin(");
        setOutput("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Tan = () => {
    try {
      setClickButton(true);
      setOperator(false);
      setParams(params + 1);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput(input + bottomValue[1]);
        setInput1(input1 + "Math.tan(");
        setOutput("");
        setTotalNumber(totalNumber + 4);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else if (input.endsWith("!")) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",")
      ) {
        setInput(input + bottomValue[1]);
        setInput1(input1 + "Math.tan(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];
      } else {
        setInput(input + bottomValue[1]);
        setInput1(input1 + "*Math.tan(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Cos = () => {
    try {
      setClickButton(true);
      setOperator(false);
      setParams(params + 1);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput(input + bottomValue[2]);
        setInput1(input1 + "Math.cos(");
        setOutput("");
        setTotalNumber(totalNumber + 4);
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",")
      ) {
        setInput(input + bottomValue[2]);
        setInput1(input1 + "Math.cos(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else if (input.endsWith("!")) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else {
        setInput(input + bottomValue[2]);
        setInput1(input1 + "*Math.cos(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Log = () => {
    try {
      setClickButton(true);
      setOperator(false);
      setParams(params + 1);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput(input + bottomValue[3]);
        setInput1(input1 + "Math.log(");
        setOutput("");
        setTotalNumber(totalNumber + 4);
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",")
      ) {
        setInput(input + bottomValue[3]);
        setInput1(input1 + "Math.log(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 3)];
      } else if (input.endsWith("!")) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else {
        setInput(input + bottomValue[3]);
        setInput1(input1 + "*Math.log(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 3)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Open1 = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput(input + bottomValue[4]);
        setInput1(input1 + "1*");
        setOutput("");
        setTotalNumber(totalNumber + 1);
      } else if (delState === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input.endsWith("!")
      ) {
        setInput1(input1 + "");
        setInput(input + "");
        setOutput("");
      } else if (clickButton === true) {
        setOperator(false);
        if (
          input1.endsWith("+") ||
          input1.endsWith("/") ||
          input1.endsWith("*") ||
          input1.endsWith("-") ||
          input1.endsWith("%") ||
          input1.endsWith("(") ||
          input1.endsWith(",") ||
          input.endsWith("!")
        ) {
          setInput1(input1 + "");
          setInput(input + "");
          setOutput("");
        } else {
          setTotalNumber(totalNumber + 1);
          setInput(input + bottomValue[4]);
          setInput1(input1 + "*");
          setOutput("");

          totalNumber > 100
            ? [
                setVisible(true),
                setTotalNumber(totalNumber + 0),
                setInput(input + ""),
                setInput1(input1 + ""),
              ]
            : [setVisible(false), setTotalNumber(totalNumber + 1)];
        }
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else {
        setTotalNumber(totalNumber + 1);
        setOperator(true);
        setClickButton(false);
        setInput(input + bottomValue[4]);
        setInput1(input1 + "*");
        setOutput("");
        setDelState(true);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Close1 = () => {
    setValidNumber(false);
    setTen(0);
    setValidNumber2(false);
    setWhileLoop(false);

    try {
      if (input === "") {
        setInput("");
        setInput1("");
        setOutput("");
      } else if (delState === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input.endsWith("!")
      ) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (clickButton === true) {
        setOperator(false);
        setFactorial(false);
        if (
          input1.endsWith("+") ||
          input1.endsWith("/") ||
          input1.endsWith("*") ||
          input1.endsWith("-") ||
          input1.endsWith("%") ||
          input1.endsWith("(") ||
          input1.endsWith(",") ||
          input.endsWith("!")
        ) {
          setInput1(input1 + "");
          setInput(input + "");
          setOutput("");
        } else {
          setInput(input + bottomValue[5]);
          setInput1(input1 + "*");
          setOutput("");

          totalNumber > 100
            ? [
                setVisible(true),
                setTotalNumber(totalNumber + 0),
                setInput(input + ""),
                setInput1(input1 + ""),
              ]
            : [setVisible(false), setTotalNumber(totalNumber + 1)];
        }
      } else {
        setOperator(true);
        setClickButton(false);
        setInput(input + bottomValue[5]);
        setInput1(input1 + "*");
        setOutput("");
        setDelState(true);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const SquareRoot = () => {
    try {
      setClickButton(true);
      setOperator(false);
      setParams(params + 1);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput(input + bottomValue[8]);
        setInput1(input1 + "Math.sqrt(");
        setOutput("");
        setTotalNumber(totalNumber + 4);
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",")
      ) {
        setInput(input + bottomValue[8]);
        setInput1(input1 + "Math.sqrt(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else if (input.endsWith("!")) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else {
        setInput(input + bottomValue[8]);
        setInput1(input1 + "*Math.sqrt(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Factorial1 = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (input.endsWith("π") && input1.endsWith("3.14159*")) {
        setPie(true);
        setFactorial(true);
        setDelState(true);
        setTen(0);
        setFactorLoop1(true);
        const y = clickButton
          ? input1.slice(0, -8) + `${Factorial(3.14159)}` + ")".repeat(params)
          : input1.slice(0, -8) + `${Factorial(3.14159)}`;

        const d = Factorial(3.14159);
        const x =
          Number.isInteger(Number(eval(y))) &&
          Number(eval(y)).toString().split("").length > 11
            ? Number(eval(y)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(y))) &&
              Number(eval(y)).toString().split("").length > 11
            ? Number(eval(y)).toPrecision(11).toString()
            : eval(y);

        setInput1(input1.slice(0, -8) + `${Factorial(3.14159)}` + "*");
        setInput(input + "!");
        setOutput(x);

        d == Infinity && setInfinity2(true);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        operator &&
        input.endsWith("π") &&
        input1.endsWith("3.14159*")
      ) {
        setPie(true);
        setFactorial(true);
        setDelState(true);
        setTen(0);
        setFactorLoop1(true);
        const y = input1.slice(0, -8) + `${Factorial(3.14159)}`;

        const d = Factorial(3.14159);
        const x =
          Number.isInteger(Number(eval(y))) &&
          Number(eval(y)).toString().split("").length > 11
            ? Number(eval(y)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(y))) &&
              Number(eval(y)).toString().split("").length > 11
            ? Number(eval(y)).toPrecision(11).toString()
            : eval(y);

        setInput1(input1.slice(0, -8) + `${Factorial(3.14159)}` + "*");
        setInput(input + "!");
        setOutput(x);

        d == Infinity && setInfinity2(true);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (operator === true || factorial === true) {
        setFactorLoop(true);
        setClickButton(false);
        setDelState(true);
        setTen(0);
        let z = [];
        let zSecond = [];
        let a = input1.split("").length;

        while (a--) {
          let b = input1[a];
          z.push(b);
          if (
            b.endsWith("*") ||
            b.endsWith(",") ||
            b.endsWith("+") ||
            b.endsWith("-") ||
            b.endsWith("/") ||
            b.endsWith("%") ||
            b.endsWith("(")
          )
            break;
        }

        for (let f = z.length; f >= 0; --f) {
          zSecond.push(z[f]);
        }

        const rep = zSecond
          .join("")
          .replace("*", "")
          .replace("/", "")
          .replace("-", "")
          .replace("%", "")
          .replace(",", "")
          .replace("+", "")
          .replace("(", "");

        const s =
          zSecond.length > 5
            ? input1.slice(0, -zSecond.length + 2) + "Infinity"
            : input1.slice(0, -zSecond.length + 2) +
              `${Factorial(Number(rep))}`;

        const d = zSecond.length > 5 ? Infinity : Factorial(Number(rep));

        const x1 =
          Number.isInteger(Number(eval(s))) &&
          Number(eval(s)).toString().split("").length > 11
            ? Number(eval(s)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(s))) &&
              Number(eval(s)).toString().split("").length > 11
            ? Number(eval(s)).toPrecision(11).toString()
            : eval(s);

        setInput1(
          zSecond.length > 5
            ? input1.slice(0, -zSecond.length + 2) + "Infinity" + "*"
            : input1.slice(0, -zSecond.length + 2) +
                `${Factorial(Number(rep))}` +
                "*"
        );
        setInput(input + "!");
        setOutput(x1);
        d == Infinity && setInfinity2(true);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (clickButton === true) {
        setFactorLoop1(true);
        setOperator(false);
        setDelState(true);
        setTen(0);
        let z = [];
        let zSecond = [];
        let a = input1.split("").length;

        while (a--) {
          let b = input1[a];
          z.push(b);
          if (
            b.endsWith("*") ||
            b.endsWith(",") ||
            b.endsWith("+") ||
            b.endsWith("-") ||
            b.endsWith("/") ||
            b.endsWith("%") ||
            b.endsWith("(")
          )
            break;
        }

        for (let f = z.length; f >= 0; --f) {
          zSecond.push(z[f]);
        }

        const rep = zSecond
          .join("")
          .replace("*", "")
          .replace("/", "")
          .replace("-", "")
          .replace("%", "")
          .replace(",", "")
          .replace("+", "")
          .replace("(", "");

        const s =
          zSecond.length > 5
            ? input1.slice(0, -zSecond.length + 2) +
              "Infinity" +
              ")".repeat(params)
            : input1.slice(0, -zSecond.length + 2) +
              `${Factorial(Number(rep))}` +
              ")".repeat(params);

        const d = zSecond.length > 5 ? Infinity : Factorial(Number(rep));
        const r = Number(eval(s))
          .toExponential(9)
          .toString()
          .replace("e+", "E");

        setInput1(
          zSecond.length > 5
            ? input1.slice(0, -zSecond.length + 2) + "Infinity" + "*"
            : input1.slice(0, -zSecond.length + 2) +
                `${Factorial(Number(rep))}` +
                "*"
        );
        setInput(input + "!");
        setOutput(r);

        d == Infinity && setInfinity2(true);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        delState === true ||
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input.endsWith("!")
      ) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else {
        setPie(true);
        setFactorial(true);
        setFactorLoop2(true);
        setDelState(true);
        setTen(0);
        let z = [];
        let zSecond = [];
        let a = input1.split("").length;

        while (a--) {
          let b = input1[a];
          z.push(b);
          if (
            b.endsWith("*") ||
            b.endsWith(",") ||
            b.endsWith("+") ||
            b.endsWith("-") ||
            b.endsWith("/") ||
            b.endsWith("%") ||
            b.endsWith("(")
          )
            break;
        }

        for (let f = z.length; f >= 0; --f) {
          zSecond.push(z[f]);
        }
        const s =
          zSecond.length > 5
            ? input1.slice(0, -zSecond.length) + "Infinity"
            : input1.slice(0, -zSecond.length) +
              `${Factorial(Number(zSecond.join("")))}`;

        const r = Number(eval(s))
          .toExponential(9)
          .toString()
          .replace("e+", "E");

        const rep = zSecond
          .join("")
          .replace("*", "")
          .replace("/", "")
          .replace("-", "")
          .replace("%", "")
          .replace(",", "")
          .replace("+", "")
          .replace("(", "");

        const d = zSecond.length > 5 ? Infinity : Factorial(Number(rep));

        setInput1(
          zSecond.length > 5
            ? input1.slice(0, -zSecond.length) + "Infinity" + "*"
            : input1.slice(0, -zSecond.length) +
                `${Factorial(Number(zSecond.join("")))}` +
                "*"
        );
        setInput(input + "!");
        setOutput(r);

        d == Infinity && setInfinity2(true);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Pie = () => {
    try {
      setDelState(false);
      setSideState(false);
      setPie(true);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      const i = "Math.PI";
      const y = eval(i);
      const w = Number(y).toPrecision(9).toString();
      const first = input1 + "3.14159";

      if (input === "") {
        const rep = input + bottomValue[9];
        setInput(rep);
        setInput1(input1 + "3.14159*");
        setOutput(w);
        setTotalNumber(totalNumber + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value1 = input + bottomValue[9];
        const replacingPie =
          input1.endsWith("-") ||
          input1.endsWith("+") ||
          input1.endsWith("%") ||
          input1.endsWith("/") ||
          input1.endsWith("*") ||
          input1.endsWith(",") ||
          input1.endsWith("(") ||
          input.endsWith("!")
            ? input1 + "3.14159"
            : input1 + "*3.14159";
        const z =
          Number.isInteger(Number(eval(replacingPie))) &&
          Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie))
                .toExponential(10)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(replacingPie))) &&
              Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie)).toPrecision(11).toString()
            : eval(replacingPie);
        setInput(input + bottomValue[9]);
        setInput1(replacingPie + "*");
        setOutput(z);

        input1.endsWith("3.14159*") && [
          setInput(input + bottomValue[9]),
          setInput1(replacingPie + "*"),
          setOutput(z),
        ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (clickButton === true) {
        const d = input1 + "3.14159" + "*";
        const y = first + ")".repeat(params);
        const c =
          Number.isInteger(Number(eval(y))) &&
          Number(eval(y)).toString().split("").length > 11
            ? Number(eval(y)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(y))) &&
              Number(eval(y)).toString().split("").length > 11
            ? Number(eval(y)).toPrecision(11).toString()
            : eval(y);

        const e =
          input1.endsWith("(") || input1.endsWith(",")
            ? input1 + "3.14159" + "*"
            : input1 + "*" + "3.14159" + "*";
        const f = y.slice(0, -params) + ")".repeat(params);

        const a =
          Number.isInteger(Number(eval(f))) &&
          Number(eval(f)).toString().split("").length > 11
            ? Number(eval(f)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(f))) &&
              Number(eval(f)).toString().split("").length > 11
            ? Number(eval(f)).toPrecision(11).toString()
            : eval(f);

        const returnValues1 = setOutput(c);
        setInput(input + bottomValue[9]);
        setInput1(d);

        const returnValues2 = setOutput(a);
        setInput(input + bottomValue[9]);
        setInput1(e);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("3.14159*") && [
          setInput(input + bottomValue[9]),
          setInput1(input1 + "3.14159*"),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];

        input.endsWith("sin(") &&
          input1 === "Math.sin(" && [
            setInput(input + bottomValue[9]),
            setInput1(input1 + "3.14159*"),
            setOutput("0"),
          ];

        input.endsWith("cos(") &&
          input1 === "Math.cos(" && [
            setInput(input + bottomValue[9]),
            setInput1(input1 + "3.14159*"),
            setOutput("-1"),
          ];

        input.endsWith("tan(") &&
          input1 === "Math.tan(" && [
            setInput(input + bottomValue[9]),
            setInput1(input1 + "3.14159*"),
            setOutput("0"),
          ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
        isNaN(Number(output)) === true && setOutput(Error11);
      } else if (pie === true) {
        setFactorial(false);
        const values = input + bottomValue[9];
        const replacingPie =
          input1.endsWith("-") ||
          input1.endsWith("+") ||
          input1.endsWith("%") ||
          input1.endsWith("/") ||
          input1.endsWith("*") ||
          input1.endsWith(",") ||
          input1.endsWith("(") ||
          input.endsWith("!")
            ? input1 + "3.14159"
            : input1 + "*3.14159";
        const z =
          Number.isInteger(Number(eval(replacingPie))) &&
          Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(replacingPie))) &&
              Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie)).toPrecision(11).toString()
            : eval(replacingPie);

        setInput(values);
        setInput1(replacingPie + "*");
        setOutput(z);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (factorial === true) {
        setPie(false);
        const values = input + bottomValue[9];
        const replacingPie =
          input1.endsWith("-") ||
          input1.endsWith("+") ||
          input1.endsWith("%") ||
          input1.endsWith("/") ||
          input1.endsWith("*") ||
          input1.endsWith(",") ||
          input1.endsWith("(") ||
          input.endsWith("!")
            ? input1 + "3.14159"
            : input1 + "*3.14159";
        const z =
          Number.isInteger(Number(eval(replacingPie))) &&
          Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(replacingPie))) &&
              Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie)).toPrecision(11).toString()
            : eval(replacingPie);

        setInput(values);
        setInput1(replacingPie + "*");
        setOutput(z);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setPie(true);
        setFactorial(false);
        const values = input + bottomValue[9];
        const replacingPie =
          input1.endsWith("-") ||
          input1.endsWith("+") ||
          input1.endsWith("%") ||
          input1.endsWith("/") ||
          input1.endsWith("*") ||
          input1.endsWith(",") ||
          input1.endsWith("(") ||
          input.endsWith("!")
            ? input1 + "3.14159"
            : input1 + "*3.14159";
        const z =
          Number.isInteger(Number(eval(replacingPie))) &&
          Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(replacingPie))) &&
              Number(eval(replacingPie)).toString().split("").length > 11
            ? Number(eval(replacingPie)).toPrecision(11).toString()
            : eval(replacingPie);

        setInput(input + bottomValue[9]);
        setInput1(replacingPie + "*");
        setOutput(z);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Infinity1 = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      const z = bottomValue1[10];
      const y = eval(z);
      if (input === "") {
        setInput(input + bottomValue[10]);
        setInput1(input1 + bottomValue1[10]);
        setOutput(y);
        setInfinity1(true);
      } else if (input1.endsWith("(") || input1.endsWith(",")) {
        setInfinity1(true);
        const first = input1 + bottomValue1[10];
        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        setInput(input + bottomValue[10]);
        setInput1(input1 + bottomValue1[10]);
        setOutput(c);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Log10 = () => {
    try {
      setClickButton(true);
      setOperator(false);
      setParams(params + 1);
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput(input + bottomValue[11]);
        setInput1(input1 + "Math.log10(");
        setOutput("");
        setTotalNumber(totalNumber + 4);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else if (input.endsWith("!")) {
        setInput(input + "");
        setInput1(input1 + "");
        setParams(params + 0);
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("*") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        input1.endsWith("(") ||
        input1.endsWith(",")
      ) {
        setInput(input + bottomValue[11]);
        setInput1(input1 + "Math.log10(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];
      } else {
        setInput(input + bottomValue[11]);
        setInput1(input1 + "*Math.log10(");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 4)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Percent = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      if (input === "") {
        setInput("");
        setInput1("");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        (input1.endsWith("*") && input.endsWith("x")) ||
        input1.endsWith("-") ||
        input1.endsWith("%")
      ) {
        setInput1(input1.slice(0, -1) + Value[2]);
        setInput(input.slice(0, -1) + Value[2]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input.endsWith(")") ||
        (input.endsWith("(") && input1.endsWith("*"))
      ) {
        setInput1(input1 + "");
        setInput(input + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input1.endsWith("3.14159*")) {
        setInput(input + Value[2]);
        setInput1(input1.slice(0, -1) + Value[2]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (clickButton === true) {
        input1.includes("(") || input1.includes(",")
          ? [
              setOperator(false),
              setFactorial(false),
              setPie(false),
              setClickButton(true),
              setInput(input + Value[2]),
              setInput1(input1 + Value[2]),
              setOutput(""),
            ]
          : [
              setOperator(true),
              setInput(input + Value[2]),
              setInput1(input1 + Value[2]),
              setOutput(""),
            ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input.endsWith("!") || input.endsWith(bottomValue[9])) {
        setInput1(input1.slice(0, -1) + Value[2]);
        setInput(input + Value[2]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setOperator(true);
        setInput(input + Value[2]);
        setInput1(input1 + Value[2]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Divide = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      const rep = input + Value[3];
      if (input === "") {
        setInput("");
        setInput1("");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        (input1.endsWith("*") && input.endsWith("x"))
      ) {
        setInput1(input1.slice(0, -1) + "/");
        setInput(input.slice(0, -1) + Value[3]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith(",") ||
        input1.endsWith("(") ||
        input.endsWith(")") ||
        (input.endsWith("(") && input1.endsWith("*"))
      ) {
        setInput1(input1 + "");
        setInput(input + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input1.endsWith("3.14159*")) {
        setInput(input + Value[3]);
        setInput1(input1.slice(0, -1) + "/");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(""),
              setInput1(""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (clickButton === true) {
        input1.includes("(") || input1.includes(",")
          ? [
              setOperator(false),
              setFactorial(false),
              setPie(false),
              setClickButton(true),
              setInput(input + Value[3]),
              setInput1(input1 + "/"),
              setOutput(""),
            ]
          : [
              setOperator(true),
              setInput(input + Value[3]),
              setInput1(input1 + "/"),
              setOutput(""),
            ];
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input.endsWith("!") || input.endsWith(bottomValue[9])) {
        setInput1(input1.slice(0, -1) + Value[3]);
        setInput(input + Value[3]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setOperator(true);
        setInput(rep);
        setInput1(input1 + "/");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  let dataLength = input1.split("").length;
  let Array20 = [];
  while (dataLength--) {
    let z = input1[dataLength];
    Array20.push(z);
    if (
      z.endsWith("*") ||
      z.endsWith(",") ||
      z.endsWith("+") ||
      z.endsWith("-") ||
      z.endsWith("/") ||
      z.endsWith("%") ||
      z.endsWith("(")
    )
      break;
  }

  let replace101 = Array20.join("")
    .replace("*", "")
    .replace(",", "")
    .replace("+", "")
    .replace("-", "")
    .replace("/", "")
    .replace("%", "")
    .replace("(", "");

  whileLoop && [setTen(ten + replace101.length - 1), setWhileLoop(false)];

  const seven = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "/" || "-" || "+" || "*" || "%";
      if (input === "") {
        setInput(input + Value[4]);
        setInput1(input1 + Value[4]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);

        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[4]
            : input + Value[4];
        const x =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[4]
            : input1 + Value[4];
        zero1 && input.endsWith("0") && setZero1(false);
        const z =
          Number.isInteger(Number(eval(x))) &&
          Number(eval(x)).toString().split("").length > 11
            ? Number(eval(x)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(x))) &&
              Number(eval(x)).toString().split("").length > 11
            ? Number(eval(x)).toPrecision(11).toString()
            : eval(x);

        setOutput(z);
        setInput1(x);
        setInput(value);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(x),
          setOutput(z),
        ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);

        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[4]
            : input + Value[4];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[4]
            : input1 + Value[4];
        zero1 && input.endsWith("0") && setZero1(false);

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];
        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[4]
            : input + Value[4];
        const x =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[4]
            : input1 + Value[4];
        zero1 && input.endsWith("0") && setZero1(false);

        const z =
          Number.isInteger(Number(eval(x))) &&
          Number(eval(x)).toString().split("").length > 11
            ? Number(eval(x)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(x))) &&
              Number(eval(x)).toString().split("").length > 11
            ? Number(eval(x)).toPrecision(11).toString()
            : eval(x);

        setOutput(z);
        setInput1(x);
        setInput(value);
        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[4]
            : input + Value[4];
        const x =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[4]
            : input1 + Value[4];
        zero1 && input.endsWith("0") && setZero1(false);

        const z =
          Number.isInteger(Number(eval(x))) &&
          Number(eval(x)).toString().split("").length > 11
            ? Number(eval(x)).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(eval(x))) &&
              Number(eval(x)).toString().split("").length > 11
            ? Number(eval(x)).toPrecision(11).toString()
            : eval(x);

        setOutput(z);
        setInput1(x);
        setInput(value);
        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[4]
            : input + Value[4]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[4]
            : input1 + Value[4]
        );
        setOutput("");

        zero1 && input.endsWith("0") && setZero1(false);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const eight = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "*" || "+" || "/" || "-" || "%";

      if (input === "") {
        setInput(input + Value[5]);
        setInput1(input1 + Value[5]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[5]
            : input + Value[5];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[5]
            : input1 + Value[5];

        const z =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(Number(eval(second)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(z);
        setInput1(second);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(z),
        ];

        zero1 && input.endsWith("0") && setZero1(false);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[5]
            : input + Value[5];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[5]
            : input1 + Value[5];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];
        zero1 && input.endsWith("0") && setZero1(false);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[5]
            : input + Value[5];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[5]
            : input1 + Value[5];

        const z =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(Number(eval(second)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(z);
        setInput1(second);

        zero1 && input.endsWith("0") && setZero1(false);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[5]
            : input + Value[5];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[5]
            : input1 + Value[5];

        const z =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(Number(eval(second)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(z);
        setInput1(second);

        zero1 && input.endsWith("0") && setZero1(false);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[5]
            : input + Value[5]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[5]
            : input1 + Value[5]
        );
        setOutput("");

        zero1 && input.endsWith("0") && setZero1(false);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const nine = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "*" || "-" || "/" || "+" || "%";

      if (input === "") {
        setInput(input + Value[6]);
        setInput1(input1 + Value[6]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setFactorial(false);
        setPie(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[6]
            : input + Value[6];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[6]
            : input1 + Value[6];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(x),
        ];

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[6]
            : input + Value[6];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[6]
            : input1 + Value[6];
        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(input + Value[6]);
        setInput1(input1 + Value[6]);

        const returnValues2 = setOutput(a);
        setInput(input + Value[6]);
        setInput1(input1 + Value[6]);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("3.14159*") && [
          setInput(input + Value[6]),
          setInput1(input1 + Value[6]),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[6]
            : input + Value[6];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[6]
            : input1 + Value[6];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[6]
            : input + Value[6];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[6]
            : input1 + Value[6];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[6]
            : input + Value[6]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[6]
            : input1 + Value[6]
        );
        setOutput("");

        zero1 && input.endsWith("0") && setZero1(false);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const multiply = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);

      const rep = input + Value[7];
      if (input == "") {
        setInput("");
        setInput1("");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        (input1.endsWith("*") && input.endsWith("x"))
      ) {
        setInput1(input1.slice(0, -1) + "*");
        setInput(input.slice(0, -1) + "x");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input.endsWith(")") ||
        (input.endsWith("(") && input1.endsWith("*"))
      ) {
        setInput1(input1 + "");
        setInput(input + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input1.endsWith("3.14159*")) {
        setInput(rep);
        setInput1(input1.slice(0, -1) + "*");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (clickButton === true) {
        input1.includes("(") || input1.includes(",")
          ? [
              setOperator(false),
              setFactorial(false),
              setPie(false),
              setClickButton(true),
              setInput(rep),
              setInput1(input1 + "*"),
              setOutput(""),
            ]
          : [
              setOperator(true),
              setInput(rep),
              setInput1(input1 + "*"),
              setOutput(""),
            ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input.endsWith("!") || input.endsWith(bottomValue[9])) {
        setInput(input + "x");
        setInput1(input1.slice(0, -1) + "*");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setOperator(true);
        setInput(rep);
        setInput1(input1 + "*");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const four = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "*" || "-" || "/" || "%" || "+";

      if (input === "") {
        setInput(input + Value[8]);
        setInput1(input1 + Value[8]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[8]
            : input + Value[8];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[8]
            : input1 + Value[8];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        input1.endsWith("3.14159*") && [
          setInput(input + Value[8]),
          setInput1(input1 + Value[8]),
          setOutput(x),
        ];

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[8]
            : input + Value[8];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[8]
            : input1 + Value[8];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];
        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[8]
            : input + Value[8];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[8]
            : input1 + Value[8];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[8]
            : input + Value[8];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[8]
            : input1 + Value[8];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[8]
            : input + Value[8]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[8]
            : input1 + Value[8]
        );
        setOutput("");

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const five = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "*" || "/" || "+" || "-" || "%";

      if (input === "") {
        setInput(input + Value[9]);
        setInput1(input1 + Value[9]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[9]
            : input + Value[9];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[9]
            : input1 + Value[9];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(input1 + Value[9]);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(z),
        ];

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[9]
            : input + Value[9];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[9]
            : input1 + Value[9];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("*3.14159*") && [
          setInput(input + Value[9]),
          setInput1(input1 + Value[9]),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[9]
            : input + Value[9];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[9]
            : input1 + Value[9];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[9]
            : input + Value[9];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[9]
            : input1 + Value[9];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[9]
            : input + Value[9]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[9]
            : input1 + Value[9]
        );
        setOutput("");

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const six = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "*" || "/" || "-" || "+" || "%";

      if (input === "") {
        setInput(input + Value[10]);
        setInput1(input1 + Value[10]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[10]
            : input + Value[10];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[10]
            : input1 + Value[10];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(x),
        ];

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[10]
            : input + Value[10];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[10]
            : input1 + Value[10];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("*3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[10]
            : input + Value[10];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[10]
            : input1 + Value[10];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[10]
            : input + Value[10];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[10]
            : input1 + Value[10];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[10]
            : input + Value[10]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[10]
            : input1 + Value[10]
        );
        setOutput("");

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const minus = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);
      if (input === "") {
        setInput("");
        setInput("");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        (input1.endsWith("*") && input.endsWith("x"))
      ) {
        setInput1(input1.slice(0, -1) + "-");
        setInput(input.slice(0, -1) + "-");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input.endsWith(")") ||
        (input.endsWith("(") && input1.endsWith("*"))
      ) {
        setInput1(input1 + "");
        setInput(input + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input1.endsWith("3.14159*")) {
        setInput(input + Value[11]);
        setInput1(input1.slice(0, -1) + Value[11]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (clickButton === true) {
        input1.includes("(") || input1.includes(",")
          ? [
              setOperator(false),
              setFactorial(false),
              setPie(false),
              setClickButton(true),
              setInput(input + Value[11]),
              setInput1(input1 + Value[11]),
              setOutput(""),
            ]
          : [
              setOperator(true),
              setInput(input + Value[11]),
              setInput1(input1 + Value[11]),
              setOutput(""),
            ];
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input.endsWith("!") || input.endsWith(bottomValue[9])) {
        setInput1(input1.slice(0, -1) + Value[11]);
        setInput(input + Value[11]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setInput(input + Value[11]);
        setInput1(input1 + Value[11]);
        setOperator(true);

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const one = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "*" || "-" || "+" || "%" || "/";
      if (input === "") {
        setInput(input + Value[12]);
        setInput1(input1 + Value[12]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[12]
            : input + Value[12];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[12]
            : input1 + Value[12];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(x),
        ];

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[12]
            : input + Value[12];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[12]
            : input1 + Value[12];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                eval(f.slice(0, -params) + ")".repeat(params))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("*3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];
        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[12]
            : input + Value[12];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[12]
            : input1 + Value[12];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[12]
            : input + Value[12];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[12]
            : input1 + Value[12];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[12]
            : input + Value[12]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[12]
            : input1 + Value[12]
        );
        setOutput("");

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const two = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "*" || "+" || "-" || "/" || "%";

      if (input === "") {
        setInput(input + Value[13]);
        setInput1(input1 + Value[13]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[13]
            : input + Value[13];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[13]
            : input1 + Value[13];
        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(input1 + Value[13]);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(x),
        ];

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[13]
            : input + Value[13];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[13]
            : input1 + Value[13];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("*3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];
        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[13]
            : input + Value[13];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[13]
            : input1 + Value[13];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[13]
            : input + Value[13];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[13]
            : input1 + Value[13];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[13]
            : input + Value[13]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[13]
            : input1 + Value[13]
        );
        setOutput("");

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const three = () => {
    try {
      setDelState(false);
      setSideState(false);

      const values = "-" || "*" || "/" || "+" || "%";

      if (input === "") {
        setInput(input + Value[14]);
        setInput1(input1 + Value[14]);
        setClickButton(false);
        setOperator(false);
        setOutput("");
        setTotalNumber(totalNumber + 1);
        setTen(ten + 1);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[14]
            : input + Value[14];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[14]
            : input1 + Value[14];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(x),
        ];

        zero1 && input.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[14]
            : input + Value[14];
        const first =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[14]
            : input1 + Value[14];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("*3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[14]
            : input + Value[14];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[14]
            : input1 + Value[14];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value =
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[14]
            : input + Value[14];
        const second =
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[14]
            : input1 + Value[14];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        setInput(value);
        setOutput(x);
        setInput1(second);

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(
          zero1 && input.endsWith("0")
            ? input.slice(0, -1) + Value[14]
            : input + Value[14]
        );
        setInput1(
          zero1 && input1.endsWith("0")
            ? input1.slice(0, -1) + Value[14]
            : input1 + Value[14]
        );
        setOutput("");

        zero1 && input1.endsWith("0") && setZero1(false);
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const add = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      setWhileLoop(false);
      if (input === "") {
        setInput("");
        setInput1("");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("+") ||
        input1.endsWith("/") ||
        input1.endsWith("-") ||
        input1.endsWith("%") ||
        (input1.endsWith("*") && input.endsWith("x"))
      ) {
        setInput1(input1.slice(0, -1) + "+");
        setInput(input.slice(0, -1) + "+");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (
        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input.endsWith(")") ||
        (input.endsWith("(") && input1.endsWith("*"))
      ) {
        setInput1(input1 + "");
        setInput(input + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input1.endsWith("3.14159*")) {
        setInput(input + Value[15]);
        setInput1(input1.slice(0, -1) + Value[15]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (clickButton === true) {
        input1.includes("(") || input1.includes(",")
          ? [
              setOperator(false),
              setFactorial(false),
              setPie(false),
              setClickButton(true),
              setInput(input + Value[15]),
              setInput1(input1 + Value[15]),
              setOutput(""),
            ]
          : [
              setOperator(true),
              setInput(input + Value[15]),
              setInput1(input1 + Value[15]),
              setOutput(""),
            ];
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (input.endsWith("!") || input.endsWith(bottomValue[9])) {
        setInput(input + Value[15]);
        setInput1(input1.slice(0, -1) + Value[15]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setInput(input + Value[15]);
        setInput1(input1 + Value[15]);
        setOperator(true);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const doubleMinus = () => {
    try {
      setValidNumber(false);
      setTen(0);
      setValidNumber2(false);
      if (input === "") {
        setTotalNumber(totalNumber + 1);
        var x = input + Value[16];
        setInput(x);
        setInput1(input1 + Value[16]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else {
        setInput(input + "");
        setInput(input1 + "");
        setOutput("");
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const zero = () => {
    try {
      const values = "*" || "-" || "+" || "%" || "/";
      if (input === "") {
        setInput(input + Value[17]);
        setInput1(input1 + Value[17]);
        setDelState(true);
        setZero1(true);
        setClickButton(false);
        setOperator(false);
        setOutput("");

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [setVisible2(false), setTen(ten + 1), setValidNumber(false)];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (infinity1 === true || zero1 === true || delState === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];
      } else if (operator === true) {
        setPie(false);
        setFactorial(false);
        const value = input + Value[17];
        const Join = input1.toString();
        const second = Join + Value[17];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        input1.endsWith("3.14159*") && [
          setInput(value),
          setInput1(second),
          setOutput(x),
        ];

        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input1.endsWith("*") ||
        input1.endsWith("+") ||
        input1.endsWith("-") ||
        input1.endsWith("/") ||
        input1.endsWith("%")
          ? [
              setInput(value),
              setOutput(x),
              setInput1(second),
              setZero1(true),
              setDelState(true),
            ]
          : [
              setInput(value),
              setOutput(x),
              setInput1(second),
              setZero1(false),
              setDelState(false),
            ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (clickButton === true) {
        setPie(false);
        setFactorial(false);
        const value = input + Value[17];
        const first = input1 + Value[17];

        const c =
          Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
          Number(eval(first + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(first + ")".repeat(params)))) &&
              Number(eval(first + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(first + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(first + ")".repeat(params));

        const f = first + ")".repeat(params);

        const a =
          Number.isInteger(
            Number(eval(f.slice(0, -params) + ")".repeat(params)))
          ) &&
          Number(eval(f.slice(0, -params) + ")".repeat(params)))
            .toString()
            .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(
                Number(eval(f.slice(0, -params) + ")".repeat(params)))
              ) &&
              Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toString()
                .split("").length > 11
            ? Number(eval(f.slice(0, -params) + ")".repeat(params)))
                .toPrecision(11)
                .toString()
            : eval(f.slice(0, -params) + ")".repeat(params));

        const returnValues1 = setOutput(c);
        setInput(value);
        setInput1(first);

        const returnValues2 = setOutput(a);
        setInput(value);
        setInput1(first);

        input1.endsWith("(") || input1.endsWith(",")
          ? returnValues1
          : returnValues2;

        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input1.endsWith("*") ||
        input1.endsWith("+") ||
        input1.endsWith("-") ||
        input1.endsWith("/") ||
        input1.endsWith("%")
          ? [setZero1(true), setDelState(true)]
          : [setZero1(false), setDelState(false)];

        input1.endsWith("*3.14159*") && [
          setInput(value),
          setInput1(first),
          setOutput(input1.endsWith("(") || input1.endsWith(",") ? c : a),
        ];
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (pie === true) {
        const value = input + Value[17];
        const Join = input1.toString();
        const second = Join + Value[17];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input1.endsWith("*") ||
        input1.endsWith("+") ||
        input1.endsWith("-") ||
        input1.endsWith("/") ||
        input1.endsWith("%")
          ? [
              setZero1(true),
              setDelState(true),
              setInput(value),
              setOutput(x),
              setInput1(second),
            ]
          : [
              setZero1(false),
              setDelState(false),
              setInput(value),
              setOutput(x),
              setInput1(second),
            ];
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else if (factorial === true) {
        const value = input + Value[17];
        const Join = input1.toString();
        const second = Join + Value[17];

        const x =
          Number.isInteger(Number(eval(second))) &&
          Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second))
                .toExponential(9)
                .toString()
                .replace("e+", "E")
            : !Number.isInteger(Number(eval(second))) &&
              Number(eval(second)).toString().split("").length > 11
            ? Number(eval(second)).toPrecision(11).toString()
            : eval(second);

        input1.endsWith("(") ||
        input1.endsWith(",") ||
        input1.endsWith("*") ||
        input1.endsWith("+") ||
        input1.endsWith("-") ||
        input1.endsWith("/") ||
        input1.endsWith("%")
          ? [
              setZero1(true),
              setDelState(true),
              setInput(value),
              setOutput(x),
              setInput1(second),
            ]
          : [
              setZero1(false),
              setDelState(false),
              setInput(value),
              setOutput(x),
              setInput1(second),
            ];

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setInput(input + Value[17]);
        setInput1(input1 + Value[17]);
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      }
      output == Infinity && setOutput(Error2);
    } catch (err) {
      console.log(err);
    }
  };

  const dot = () => {
    try {
      if (input === "") {
        var z = "0.";
        setInput(input + z);
        setInput1(input1 + z);
        setOutput("");
        setTotalNumber(totalNumber + 2);
        setTen(ten + 2);
        setDelState(true);
      } else if (infinity1 === true) {
        setInput(input + "");
        setInput1(input1 + "");
      } else if (delState === true) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (input1.endsWith("(") || input1.endsWith(",")) {
        setInput(input + "0.");
        setInput1(input1 + "0.");
        setOutput("");

        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [
              setVisible(false),
              setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
            ];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
      } else {
        setDelState(true);
        setInput(input + ".");
        setInput1(input1 + ".");
        setOutput("");
        totalNumber > 100
          ? [
              setVisible(true),
              setTotalNumber(totalNumber + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
            ]
          : [setVisible(false), setTotalNumber(totalNumber + 1)];

        ten >= 10
          ? [
              setVisible2(true),
              setTen(ten + 0),
              setInput(input + ""),
              setInput1(input1 + ""),
              setOutput(""),
              setValidNumber(true),
              setValidNumber2(true),
              Vibration.vibrate(250),
            ]
          : [
              setVisible2(false),
              setTen(totalNumber > 100 ? ten + 0 : ten + 1),
              setValidNumber(false),
            ];
        if (zero1 && input1.endsWith("0")) {
          setInput(input + ".");
          setInput1(input1 + ".");
          setOutput("");
          setZero1(false);
          totalNumber > 100
            ? [
                setVisible(true),
                setTotalNumber(totalNumber + 0),
                setInput(input + ""),
                setInput1(input1 + ""),
              ]
            : [
                setVisible(false),
                setTotalNumber(ten >= 10 ? totalNumber + 0 : totalNumber + 1),
              ];

          ten >= 10
            ? [
                setVisible2(true),
                setTen(ten + 0),
                setInput(input + ""),
                setInput1(input1 + ""),
                setOutput(""),
                setValidNumber(true),
                setValidNumber2(true),
                Vibration.vibrate(250),
              ]
            : [
                setVisible2(false),
                setTen(totalNumber > 100 ? ten + 0 : ten + 1),
                setValidNumber(false),
              ];
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const equal = () => {
    try {
      if (input === "" || output === "") {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
      } else if (operator || pie) {
        let s = output;
        let equalValue =
          Number.isInteger(Number(s)) &&
          Number(s).toString().split("").length > 9
            ? Number(s).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(s)) &&
              Number(s).toString().split("").length > 9
            ? Number(s).toPrecision(9).toString()
            : s;
        output == Infinity || NaN
          ? [setInput(input + ""), setInput1(input1 + ""), setOutput(Error1)]
          : [
              setInput("" + equalValue),
              setInput1("" + equalValue),
              setTotalNumber(output.split("").length),
              setTen(
                output.split("").length > 9 ? 10 : output.split("").length
              ),
              setOutput(""),
            ];
        if (totalNumber > 100) {
          setTotalNumber(0);
          setInput("" + output);
          setInput1("" + output);
          setOutput("");
          setVisible(false);
        }
      } else if (clickButton) {
        let s = output;
        let equalValue =
          Number.isInteger(Number(s)) &&
          Number(s).toString().split("").length > 9
            ? Number(s).toExponential(9).toString().replace("e+", "E")
            : !Number.isInteger(Number(s)) &&
              Number(s).toString().split("").length > 9
            ? Number(s).toPrecision(9).toString()
            : s;
        output == Infinity || NaN
          ? [setInput(input + ""), setInput1(input1 + ""), setOutput(Error1)]
          : [
              setInput("" + equalValue),
              setInput1("" + equalValue),
              setTotalNumber(output.split("").length),
              setTen(
                output.split("").length > 9 ? 10 : output.split("").length
              ),
              setOutput(""),
            ];
        if (totalNumber > 100) {
          setTotalNumber(0);
          setInput("" + output);
          setInput1("" + output);
          setOutput("");
          setVisible(false);
        }
      } else {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput("");
        if (totalNumber > 100) {
          setTotalNumber(0);
          setInput("" + output);
          setInput1("" + output);
          setOutput("");
          setVisible(false);
        }
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        setInput(input + "");
        setInput1(input1 + "");
        setOutput(Error1);
      }
    }
  };

  const Length1 = input.split("").length;
  console.log(
    {inputDisplay1: input1},
    {inputDisplay: input},
    {totalNumberDisplay: totalNumber},
    {visibleDisplay: visible},
    {tenDisplay: ten}
  );

  return (
    <GlobalContext.Provider
      value={{
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
        add,
        doubleMinus,
        zero,
        dot,
        equal,
        input,
        output,
        Length1,
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
        visible,
        setVisible,
        visible2,
        setVisible2,
        animaton1,
        setAnimation1,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
