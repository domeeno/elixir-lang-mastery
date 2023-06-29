export enum QuestionType {
  ONE_CORRECT,
  MULTIPLE_CHOICE,
  TRUE_OR_FALSE
}

export interface Question {
  id: string,
  category: QuestionCategory[],
  question: string,
  difficulty: QuestionDifficulty,
  tip: string | null,
  explanation: string,
  questionType: QuestionType,
  code: string | null,
  correctAnswers: Answer[],
  incorrectAnswers: Answer[]
}

export enum QuestionCategory {
  OPERATORS = "Operators",
  GENERAL = "General",
  DATA_TYPES = "Data Types",
  RECURSION = "Recursion",
  LISTS = "Lists",
  FUNCTIONS = "Functions",
}

export enum QuestionDifficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3
}

export interface Answer {
  id: number,
  text: string,
  correct: boolean
}

export interface GameData {
  questionIds: string[];
  questionIndex: number;
  answered: boolean;
  score: number;
}


