import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import { COLORS } from '../data/dummy-data';
import { setQuiz } from '../store/actions/action';
import { connect } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

const AttendQuiz = (props) => {
    const [amtOpen, setamtOpen] = useState(false);
    const [amtValue, setamtValue] = useState(5);
    const [amt, setamt] = useState([
        { label: '5', value: '5' },
        { label: '10', value: '10' },
        { label: '15', value: '15' },
    ]);
    const id = props.route.params.id;
    const subject = props.route.params.sub;
    const index = props.route.params.index;
    const dispatch = useDispatch();

    const attendQuizHandler = () => {
        const options = {
            amt: amtValue,
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
                <View style={styles.drop}>
                    <Text style={styles.textPad}>Set No. of Questions</Text>
                    <DropDownPicker
                        style={styles.dropdown}
                        open={amtOpen}
                        value={amtValue}
                        items={amt}
                        setOpen={setamtOpen}
                        setValue={setamtValue}
                        setItems={setamt}
                        placeholder='5'
                        zIndex={3000}
                        zIndexInverse={1000}
                    />
                </View>
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
        height: 240,
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
    drop: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        height: 80,
    },
    dropdown: {
        height: 20,
        width: 100,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    textPad: {
        paddingRight: 10,
    },
});
