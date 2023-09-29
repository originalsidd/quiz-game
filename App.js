import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import './config/firebase';

import { setQuiz } from './store/reducers/reducer';
import RootNavigator from './navigation/RootNavigator';

enableScreens();

const logger = createLogger();
const rootReducer = combineReducers({ setQuiz });
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar
                backgroundColor='#202c36'
                animated={true}
                style='light'
            />
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
