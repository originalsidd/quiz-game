import Quiz from '../models/quiz';
import FacQuiz from '../models/facQuiz';
import Question from '../models/question';

export const QUIZES = [
    Quiz('1', 'English', 'Monuments', 'Different Monuments Quiz', 20),
];

export const QUIZES2 = [
    Quiz('1', 'Maths', 'as', 'Different Monuments Quiz', 20),
];

export const COLORS = [
    '#ff8080',
    '#80b9ff',
    '#85ff9d',
    '#f5ff85',
    '#d685ff',
    '#ff85c8',
    '#85e7ff',
    '#ffd485',
];

export const SUBJECTS = [
    {
        id: 'Eng',
        sub: 'English',
    },
    {
        id: 'CS',
        sub: 'Computer Science',
    },
    {
        id: 'Hin',
        sub: 'Hindi',
    },
    {
        id: 'Maths',
        sub: 'Maths',
    },
    {
        id: 'Sci',
        sub: 'Science',
    },
    {
        id: 'SST',
        sub: 'Social Science',
    },
    {
        id: 'Music',
        sub: 'Music',
    },
    {
        id: 'PhysEd',
        sub: 'Physical Education',
    },
];

const QUES = [
    {
        id: 'Eng',
        title: '',
    },
];

export const FAC = [
    FacQuiz('Maths', 'Maths quiz', 'Geometry Term 1 Quiz', [
        Question(1, '2x2=', '4', ['1', '2', '3', '4', '5', '6', '7', '8']),
        Question(2, '2x1=', '2', ['1', '2', '3', '4']),
        Question(3, '2x3=', '6', ['1', '6', '3', '4']),
        Question(4, '2x4=', '4', ['8', '2', '3', '4']),
    ]),
];
