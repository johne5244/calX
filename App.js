import React from "react";
import {NativeRouter as Router, Switch, Route} from "react-router-native";
import {GlobalProvider} from "./code/GlobalProvider";
import EntryCode from "./code/EntryCode.js";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={EntryCode} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
