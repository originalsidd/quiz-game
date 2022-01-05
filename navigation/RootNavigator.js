import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { OptionNavigator } from "./Navigators";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <OptionNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
