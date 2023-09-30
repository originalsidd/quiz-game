import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';

const QCard = (props) => {
    const [selected, setSelected] = useState(-1);
    let op_arr = [...props.item.incorrect_answers, props.item.correct_answer];
    useEffect(() => {
        op_arr = op_arr
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        if (props.isReview) {
            setSelected(props.marked[props.id - 1]);
        }
    }, []);

    const selectHandler = (op) => {
        if (props.isReview) return;
        if (selected == op) {
            const arr = props.marked;
            arr[props.id - 1] = null;
            props.setMarked(arr);
            setSelected(-1);
        } else {
            const arr = props.marked;
            arr[props.id - 1] = op;
            props.setMarked(arr);
            setSelected(op);
        }
        console.log(props.marked);
    };

    const solve = (input) => {
        const result = input.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
        return result;
    };

    const question = solve(props.item.question);

    return (
        <Card style={styles.screen}>
            <View style={styles.quesTitle}>
                <Text style={styles.title}>
                    Q.{props.id} {question}
                </Text>
            </View>
            <ScrollView style={styles.options}>
                {op_arr.map((op, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            ...styles.optionStyle,
                            borderColor: op == selected ? '#88dd77' : '#ccc',
                            backgroundColor:
                                op == selected ? '#aaeeaa70' : '#eee',
                        }}
                        onPress={() => selectHandler(op)}
                    >
                        <Text style={styles.opText}>
                            {String.fromCharCode(index + 97)}
                            {')  '}
                            {op}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </Card>
    );
};

export default QCard;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: Dimensions.get('window').width - 40,
        maxHeight: Dimensions.get('window').width - 40,
        margin: 20,
        padding: 20,
    },
    quesTitle: {
        width: '100%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    options: {
        marginVertical: 10,
    },
    optionStyle: {
        backgroundColor: '#eee',
        marginTop: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    opText: {
        fontSize: 16,
        margin: 10,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    dd: {
        width: 100,
    },
});
