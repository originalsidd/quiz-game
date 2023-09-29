import React, { useState, useRef } from 'react';
import {
    Button,
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import QCard from '../components/QCard';
import Colors from '../constants/Colors';
import { useEffect } from 'react';
import { setQuiz, unsetQuiz } from '../store/actions/action';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuizResult = (props) => {
    const flatlistRef = useRef();
    const [quizData, setQuizData] = useState(null);

    const skipHandler = (id) => {
        flatlistRef.current.scrollToIndex({
            animated: true,
            index: id - 1,
        });
    };

    const getQuizResult = async () => {
        try {
            let data = await AsyncStorage.getItem('q');
            console.log(data);
            data = JSON.parse(data);
            console.log(data);
            setQuizData(data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const markQuiz = (quiz) => {
        const correct = quiz.marked;
        correct = correct.map(
            (item, index) => quiz.quizObj.results[index].correct_answer === item
        );
        console.log(correct);
    };

    const submitHandler = () => {
        console.log('marked: ' + marked);
        const quizDetail = {
            quizObj,
            marked,
        };
        markQuiz(quizDetail);
        dispatch(unsetQuiz());
    };

    useEffect(() => {
        getQuizResult();
    }, []);

    return (
        <View style={styles.screen}>
            {quizData === null ? (
                <View>
                    <Text>Loading</Text>
                </View>
            ) : (
                <>
                    <View style={styles.header}>
                        <View style={styles.headerBox}>
                            <Text style={styles.time}>Time:</Text>
                            <TouchableOpacity
                                style={styles.submit}
                                onPress={submitHandler}
                            >
                                <Text style={styles.submitText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.quizTitle}>
                        <Text style={styles.title}>{quizData.category}</Text>
                    </View>
                    <View style={styles.quizInfo}>
                        <FlatList
                            ref={flatlistRef}
                            data={quizArr}
                            renderItem={(itemData) => (
                                <QCard
                                    item={itemData.item}
                                    id={itemData.index + 1}
                                    marked={marked}
                                    setMarked={setMarked}
                                />
                            )}
                            horizontal
                            pagingEnabled={true}
                            snapToInterval={Dimensions.get('window').width}
                            decelerationRate={'normal'}
                            snapToAlignment={'center'}
                            overScrollMode={'never'}
                        />
                        <View style={styles.dd}>
                            <Text>Skip to question</Text>
                            <FlatList
                                persistentScrollbar
                                data={quizArr}
                                renderItem={(itemData) => (
                                    <TouchableOpacity
                                        style={styles.btns}
                                        onPress={() =>
                                            skipHandler(itemData.index + 1)
                                        }
                                    >
                                        <Text style={styles.btnText}>
                                            {itemData.index + 1}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                                horizontal
                            />
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default QuizResult;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
    },
    quizInfo: {
        flex: 1,
        width: '100%',
        // justifyContent: "center",
        alignItems: 'center',
        marginVertical: 20,
    },
    quizTitle: {
        width: '90%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
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
    button: {
        width: 100,
        margin: 20,
    },
    dd: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    btns: {
        justifyContent: 'center',
        height: 40,
        width: 40,
        margin: 5,
        zIndex: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
    },
    btnText: {
        textAlign: 'center',
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    time: {
        color: '#8fe0ff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    submitText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    submit: {
        justifyContent: 'center',
        width: 85,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#8fe0ff',
        color: Colors.primary,
    },
});
