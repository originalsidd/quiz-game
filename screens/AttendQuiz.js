import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import { COLORS } from '../data/dummy-data';
import { setQuiz } from '../store/actions/action';
import { connect } from 'react-redux';

const AttendQuiz = (props) => {
    const id = props.route.params.id;
    const subject = props.route.params.sub;
    const index = props.route.params.index;
    const dispatch = useDispatch();

    const attendQuizHandler = () => {
        const options = {
            amt: 10,
            category: 18,
            difficulty: 'medium',
        };
        dispatch(setQuiz(options));
        props.navigation.navigate('Edit', {
            screen: 'edit',
            params: { quizId: id },
        });
    };

    return (
        <View style={{ ...styles.screen, backgroundColor: COLORS[index] }}>
            <View style={styles.quizInfo}>
                <View style={styles.quizTitle}>
                    <Text style={styles.title}>{subject}</Text>
                </View>
                <Text style={styles.desc}>
                    The quiz consists of 5 questions.
                </Text>
                <View style={styles.quizStart}>
                    <Button
                        title='Start'
                        color='#222'
                        onPress={attendQuizHandler}
                    />
                </View>
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
        justifyContent: 'center',
    },
    quizInfo: {
        height: 200,
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderColor: '#222',
        borderWidth: 3,
        borderStyle: 'dashed',
        borderRadius: 20,
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
