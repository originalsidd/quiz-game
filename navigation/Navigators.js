import React from "react";
import { Text, Dimensions } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

import QuizList, {
  screenOptions as quizListOptions,
} from "../screens/QuizList";
import QuizCreate from "../screens/QuizCreate";
import ProfileView from "../screens/ProfileView";

import Colors from "../constants/Colors";
import DrawerContent from "../components/DrawerContent";
import AttendQuiz from "../screens/AttendQuiz";
import EditQuiz from "../screens/EditQuiz";
import QuizCategory from "../screens/QuizCategory";

const QuizStack = createMaterialTopTabNavigator();
const OptionStack = createDrawerNavigator();
const AttendQuizStack = createStackNavigator();
const AppStack = createStackNavigator();
const QuizCategoryStack = createStackNavigator();
const EditQuizStack = createStackNavigator();

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

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleAlign: "center",
};

const AppOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: "Quiz Game",
  headerTitleAlign: "center",
};

const quizOptions = {
  title: "Quizzes",
};

const profileOptions = {
  title: "Analytics",
};

const takeOptions = {
  title: "Take Quiz",
};

const createOptions = {
  title: "Create Quiz",
};

const attendQuizOptions = {
  headerTitle: "Play Quiz",
};

const editQuizOptions = {
  headerTitle: "Edit Quiz",
};

const QuizCategoryNavigatory = () => {
  return (
    <QuizCategoryStack.Navigator>
      <QuizCategoryStack.Screen
        name="category"
        component={QuizCategory}
        options={{ headerShown: false }}
      />
      <QuizCategoryStack.Screen
        name="list"
        component={QuizList}
        options={quizListOptions}
      />
    </QuizCategoryStack.Navigator>
  );
};

const QuizNavigator = () => {
  return (
    <QuizStack.Navigator screenOptions={defaultTabOptions}>
      <QuizStack.Screen
        name="quizList"
        component={QuizCategoryNavigatory}
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

const CreateQuizNavigator = () => {
  return (
    <QuizStack.Navigator screenOptions={defaultTabOptions}>
      <QuizStack.Screen
        name="quizList"
        component={QuizCreate}
        options={createOptions}
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
        options={takeOptions}
      />
      <OptionStack.Screen
        name="CreateQuiz"
        component={CreateQuizNavigator}
        options={createOptions}
      />
    </OptionStack.Navigator>
  );
};

const AttendQuizNavigator = () => {
  return (
    <AttendQuizStack.Navigator
      screenOptions={{ ...defaultOptions, ...attendQuizOptions }}
    >
      <AttendQuizStack.Screen name="AttendQuiz" component={AttendQuiz} />
    </AttendQuizStack.Navigator>
  );
};

const EditQuizNavigator = () => {
  return (
    <EditQuizStack.Navigator
      screenOptions={{ ...defaultOptions, ...editQuizOptions }}
    >
      <EditQuizStack.Screen name="edit" component={EditQuiz} />
    </EditQuizStack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={OptionNavigator} />
      <AppStack.Screen name="App" component={AttendQuizNavigator} />
      <AppStack.Screen name="Edit" component={EditQuizNavigator} />
    </AppStack.Navigator>
  );
};
