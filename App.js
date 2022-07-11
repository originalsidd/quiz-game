import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import './config/firebase';

import quizReducer from './store/reducers/quiz';
import facReducer from './store/reducers/faculty';
import RootNavigator from './navigation/RootNavigator';

enableScreens();

const rootReducer = combineReducers({
    quiz: quizReducer,
    faculty: facReducer,
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
