import { FETCH_QUIZ } from '../../constants/Constants';
import axios from 'axios';

export const setQuiz = (props) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `https://opentdb.com/api.php?amount=${props.amt}&category=${props.category}&difficulty=${props.difficulty}&type=multiple`
            );
            const data = response.data;
            dispatch({ type: FETCH_QUIZ, payload: data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const unsetQuiz = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_QUIZ, payload: [] });
    };
};
