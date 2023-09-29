import { FETCH_QUIZ } from '../../constants/Constants';
import { FAC } from '../../data/dummy-data';

const initialState = {
    Quiz: [],
};

export const setQuiz = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_QUIZ:
            return Object.assign({}, state, {
                Quiz: action.payload,
            });
        default:
            return state;
    }
};
