import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome screen!</Text>

            <View style={styles.buttons}>
                <Button
                    title='Sign in'
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('Sign In')}
                />
                <Button
                    title='Sign up'
                    type='outline'
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('Sign Up')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#fff',
    },

    buttons: {
        width: 200,
        height: 200,
        margin: 20,
    },

    button: {
        marginTop: 50,
        height: 40,
    },
});

export default WelcomeScreen;
