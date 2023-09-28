import React from 'react';
import { Text, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import QuizList, {
    screenOptions as quizListOptions,
} from '../screens/QuizList';
import QuizCreate from '../screens/QuizCreate';
import ProfileView from '../screens/ProfileView';

import Colors from '../constants/Colors';
import DrawerContent from '../components/DrawerContent';
import AttendQuiz, {
    screenOptions as attendQuizListOptions1,
} from '../screens/AttendQuiz';
import EditQuiz from '../screens/EditQuiz';
import QuizCategory from '../screens/QuizCategory';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Welcome from '../screens/Welcome';

const QuizStack = createMaterialTopTabNavigator();
const OptionStack = createDrawerNavigator();
const AttendQuizStack = createStackNavigator();
const AppStack = createDrawerNavigator();
const QuizCategoryStack = createStackNavigator();
const EditQuizStack = createStackNavigator();
const Stack = createStackNavigator();

const defaultTabOptions = {
    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
    tabBarStyle: { backgroundColor: Colors.primary },
    tabBarIndicatorStyle: {
        backgroundColor: Colors.accent,
        height: 4,
    },
    tabBarActiveTintColor: Colors.accent,
    tabBarInactiveTintColor: '#8fe0ff',
    tabBarPressColor: '#8fe0ff',
};

const defaultDrawerOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitle: 'Quiz Game',
    headerTitleAlign: 'center',
    headerTintColor: '#8fe0ff',
    drawerActiveTintColor: Colors.accent,
    drawerType: 'front',
    drawerStatusBarAnimation: 'slide',
    swipeEdgeWidth: Dimensions.get('window').width / 8,
};

const defaultOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitleAlign: 'center',
};

const AppOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitle: 'Quiz Game',
    headerTitleAlign: 'center',
};

const quizOptions = {
    title: 'Quizzes',
};

const profileOptions = {
    title: 'Analytics',
};

const takeOptions = {
    title: 'Take Quiz',
};

const createOptions = {
    title: 'Create Quiz',
};

const attendQuizOptions = {
    headerTitle: 'Play Quiz',
};

const editQuizOptions = {
    headerTitle: 'Edit Quiz',
};

const QuizCategoryNavigatory = () => {
    return (
        <QuizCategoryStack.Navigator>
            <QuizCategoryStack.Screen
                name='category'
                component={QuizCategory}
                options={{ headerShown: false }}
            />
            <QuizCategoryStack.Screen
                name='list'
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
                name='quizList'
                component={QuizCategoryNavigatory}
                options={quizOptions}
            />
        </QuizStack.Navigator>
    );
};

const CreateQuizNavigator = () => {
    return (
        <QuizStack.Navigator screenOptions={defaultTabOptions}>
            <QuizStack.Screen
                name='quizList'
                component={QuizCreate}
                options={createOptions}
            />
            <QuizStack.Screen
                name='profileView'
                component={ProfileView}
                options={profileOptions}
            />
        </QuizStack.Navigator>
    );
};

const OptionNavigator = () => {
    return (
        <OptionStack.Navigator screenOptions={{ headerShown: false }}>
            <OptionStack.Screen
                name='TakeQuiz'
                component={QuizCategoryNavigatory}
                options={takeOptions}
            />
            <OptionStack.Screen
                name='CreateQuiz'
                component={CreateQuizNavigator}
                options={createOptions}
            />
        </OptionStack.Navigator>
    );
};

const AttendQuizNavigator = () => {
    return (
        <AttendQuizStack.Navigator
            screenOptions={{
                ...defaultOptions,
                ...attendQuizOptions,
                ...attendQuizListOptions1,
            }}
        >
            <AttendQuizStack.Screen name='AttendQuiz' component={AttendQuiz} />
        </AttendQuizStack.Navigator>
    );
};

const EditQuizNavigator = () => {
    return (
        <EditQuizStack.Navigator
            screenOptions={{ ...defaultOptions, ...editQuizOptions }}
        >
            <EditQuizStack.Screen name='edit' component={EditQuiz} />
        </EditQuizStack.Navigator>
    );
};

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                drawerContent={DrawerContent}
                screenOptions={defaultDrawerOptions}
            >
                <AppStack.Screen
                    name='Home'
                    component={QuizCategoryNavigatory}
                />
                <AppStack.Screen name='App' component={AttendQuizNavigator} />
                <AppStack.Screen name='Edit' component={EditQuizNavigator} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='Sign In' component={SignInScreen} />
                <Stack.Screen name='Sign Up' component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
