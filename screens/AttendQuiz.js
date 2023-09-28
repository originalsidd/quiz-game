import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

const AttendQuiz = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.quizInfo}>
                <View style={styles.quizTitle}>
                    <Text style={styles.title}>Title</Text>
                </View>
                <View style={styles.quizDesc}>
                    <Text style={styles.Desc}>Description:</Text>
                    <Text style={styles.desc}>
                        lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor
                        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                        lorem ipsum dolor
                    </Text>
                </View>
                <View style={styles.quizDesc}>
                    <Text style={styles.Desc}>Number of Questions:</Text>
                    <Text style={styles.desc}>20</Text>
                </View>
            </View>
            <View style={styles.quizStart}>
                <Button
                    title='Start'
                    color={Colors.accent}
                    onPress={() => {}}
                />
            </View>
        </View>
    );
};

export const screenOptions = (navdata) => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName={
                        Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                    }
                    onPress={() => {
                        navdata.navigation.back();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

export default AttendQuiz;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    quizInfo: {
        flex: 3 / 4,
        width: '100%',
        // justifyContent: "center",
        alignItems: 'center',
        marginVertical: 20,
    },
    quizTitle: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    quizDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        paddingHorizontal: 10,
    },
    Desc: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    desc: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    quizStart: {
        width: 100,
    },
});
