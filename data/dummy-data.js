import Quiz from "../models/quiz";
import FacQuiz from "../models/facQuiz";
import Question from "../models/question";

export const QUIZES = [
  Quiz("1", "English", "Monuments", "Different Monuments Quiz", 20),
  Quiz("2", "English", "Cities", "Various Cities Quiz", 10),
  Quiz("3", "English", "Monuments", "Different Monuments Quiz", 50),
  Quiz("4", "English", "Monuments", "Different Monuments Quiz", 50),
  Quiz("5", "English", "Monuments", "Different Monuments Quiz", 50),
  Quiz("6", "English", "Monuments", "Different Monuments Quiz", 50),
  Quiz("7", "English", "Monuments", "Different Monuments Quiz", 50),
  Quiz("8", "English", "Monuments", "Different Monuments Quiz", 50),
];

export const QUIZES2 = [
  Quiz("1", "Maths", "as", "Different Monuments Quiz", 20),
  Quiz("2", "Maths", "cs", "Various Cities Quiz", 10),
  Quiz("3", "Maths", "Msnts", "Different Monuments Quiz", 50),
  Quiz("4", "Maths", "Mondts", "Different Monuments Quiz", 50),
  Quiz("5", "Maths", "Monss", "Different Monuments Quiz", 50),
  Quiz("6", "Maths", "Monuments", "Different Monuments Quiz", 50),
  Quiz("7", "Maths", "Monuments", "Different Monuments Quiz", 50),
  Quiz("8", "Maths", "Monuments", "Different Monuments Quiz", 50),
];

export const COLORS = [
  "#ff8080",
  "#80b9ff",
  "#85ff9d",
  "#f5ff85",
  "#d685ff",
  "#ff85c8",
  "#85e7ff",
  "#ffd485",
];

export const SUBJECTS = [
  {
    id: "Eng",
    sub: "English",
  },
  {
    id: "CS",
    sub: "Computer Science",
  },
  {
    id: "Hin",
    sub: "Hindi",
  },
  {
    id: "Maths",
    sub: "Maths",
  },
  {
    id: "Sci",
    sub: "Science",
  },
  {
    id: "SST",
    sub: "Social Science",
  },
  {
    id: "Music",
    sub: "Music",
  },
  {
    id: "PhysEd",
    sub: "Physical Education",
  },
];

const QUES = [
  {
    id: "Eng",
    title: "",
  },
];

export const FAC = [
  FacQuiz("1", "Maths quiz", "Geometry Term 1 Quiz", [
    Question(1, "2x2=", "4", ["1", "2", "3", "4", "5", "6", "7", "8"]),
    Question(2, "2x1=", "2", ["1", "2", "3", "4"]),
    Question(3, "2x3=", "6", ["1", "6", "3", "4"]),
    Question(4, "2x4=", "4", ["8", "2", "3", "4"]),
  ]),
];
