import React from "react";
import { Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import QuizList from "../screens/QuizList";
import ProfileView from "../screens/ProfileView";

import Colors from "../constants/Colors";
import DrawerContent from "../components/DrawerContent";

const QuizStack = createMaterialTopTabNavigator();
const OptionStack = createDrawerNavigator();

const defaultTabOptions = {
  tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
  tabBarStyle: { backgroundColor: Colors.primary },
  tabBarIndicatorStyle: {
    backgroundColor: Colors.accent,
    height: 4,
  },
  tabBarActiveTintColor: Colors.accent,
  tabBarInactiveTintColor: "rgba(0,0,0,0.5)",
  tabBarPressColor: "rgba(173,2,73,0.2)",
};

const defaultDrawerOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: "Quiz Game",
  headerTitleAlign: "center",
  drawerActiveTintColor: Colors.accent,
  drawerType: "front",
  drawerStatusBarAnimation: "slide",
  swipeEdgeWidth: Dimensions.get("window").width / 8,
};

const quizOptions = {
  title: "Quizzes",
};

const profileOptions = {
  title: "Profile",
};

const appOptions = {
  title: "Take Quiz",
};

const QuizNavigator = () => {
  return (
    <QuizStack.Navigator screenOptions={defaultTabOptions}>
      <QuizStack.Screen
        name="quizList"
        component={QuizList}
        options={quizOptions}
      />
      <QuizStack.Screen
        name="profileView"
        component={ProfileView}
        options={profileOptions}
      />
    </QuizStack.Navigator>
  );
};

export const OptionNavigator = () => {
  return (
    <OptionStack.Navigator
      drawerContent={DrawerContent}
      screenOptions={defaultDrawerOptions}
    >
      <OptionStack.Screen
        name="TakeQuiz"
        component={QuizNavigator}
        options={appOptions}
      />
    </OptionStack.Navigator>
  );
};
