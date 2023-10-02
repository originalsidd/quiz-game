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
    Alert,
    BackHandler,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import QCard from '../components/QCard';
import Colors from '../constants/Colors';
import { useEffect, useContext } from 'react';
import { setQuiz, unsetQuiz } from '../store/actions/action';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../navigation/RootNavigator';
// import useAuthentication from '../utils/hooks/useAuthentication';

const EditQuiz = (props) => {
    const [quizArr, setQuizArr] = useState([]);
    const [quizObj, setQuizObj] = useState(null);
    const [marked, setMarked] = useState([]);
    const flatlistRef = useRef();
    // const { user } = useAuthentication();
    const user = useContext(AuthContext);
    console.log('bruh' + user);
    const dispatch = useDispatch();
    const quizId = props.route.params.quizId;
    const QUIZ = useSelector((state) => state.setQuiz.Quiz);
    useEffect(() => {
        if (QUIZ.results) {
            const QUIZobj = {
                category: QUIZ?.results[0]?.category,
                type: QUIZ?.results[0].type,
                difficulty: QUIZ?.results[0].difficulty,
                ques_arr: QUIZ?.results,
            };
            const arr = Array(QUIZobj.ques_arr.length).fill(0);
            setMarked(arr);
            console.log(marked);
            setQuizObj(QUIZobj);
            console.log('ABC: ' + QUIZ.results);
            setQuizArr(QUIZobj.ques_arr);
        } else {
            setQuizObj(null);
            setQuizArr(null);
        }
    }, [QUIZ.results]);

    const skipHandler = (id) => {
        flatlistRef.current.scrollToIndex({
            animated: true,
            index: id - 1,
        });
    };

    const storeQuizResult = async (quizDetails) => {
        try {
            // let value = await AsyncStorage.getItem('q');
            // value = JSON.parse(value);
            // // console.log(value);
            // if (value != null) value.push(quizDetails);
            // else value = [quizDetails];
            // await AsyncStorage.setItem('q', JSON.stringify(value));
            await AsyncStorage.setItem(
                'quiz#' + user.email,
                // 'q',
                JSON.stringify([quizDetails])
            );
        } catch (error) {
            console.log(error);
        }
    };

    const markQuiz = (quiz) => {
        console.log('quiz.marked: ' + quiz.marked);
        let correct = quiz.marked;
        console.log(quiz.quizObj.ques_arr);
        correct = correct.map(
            (item, index) =>
                quiz.quizObj.ques_arr[index].correct_answer === item
        );
        const Sum = correct.reduce((accumulator, curr) => accumulator + curr);
        Alert.alert(
            'Quiz Submitted',
            `Your Total Score: ${Sum}/${quiz.marked.length}`,
            [{ text: 'OK' }]
        );
    };

    const submitHandler = () => {
        if (quizObj === null) {
            props.navigation.pop(2);
            dispatch(unsetQuiz());
            return;
        }
        console.log('marked: ' + marked);
        const quizDetail = {
            quizObj,
            marked,
        };
        markQuiz(quizDetail);
        storeQuizResult(quizDetail);
        dispatch(unsetQuiz());
        props.navigation.pop(2);
    };

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                let flag = true;
                Alert.alert(
                    'Submit Quiz',
                    'Sure you want to submit the quiz?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => (flag = true),
                            style: 'cancel',
                        },
                        {
                            text: 'OK',
                            onPress: () => {
                                submitHandler();
                                flag = false;
                            },
                        },
                    ]
                );
                return flag;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress
                );
        }, [])
    );

    return (
        <View style={styles.screen}>
            {quizObj === null ? (
                <View style={styles.load}>
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
                        <Text style={styles.title}>{quizObj.category}</Text>
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
                                    isReview={false}
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

export default EditQuiz;

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
    load: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
