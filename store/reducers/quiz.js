import { QUIZES, QUIZES2 } from "../../data/dummy-data";

const initialState = {
  Eng: QUIZES,
  CS: QUIZES2,
  Hin: [],
  Maths: [],
  Sci: [],
  SST: [],
  PhyEd: [],
};

const quizReducer = (state = initialState, action) => {
  return state;
};

export default quizReducer;
