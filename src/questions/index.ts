enum QuestionType {
  ONE_CORRECT,
  MULTIPLE_CHOICE,
  TRUE_OR_FALSE
}

export interface Question {
  id: string,
  category: string[],
  question: string,
  difficulty: number,
  questionType: QuestionType,
  code: string | null | undefined,
  correctAnswers: Answer[],
  incorrectAnswers: Answer[]
}

export interface Answer {
  id: number,
  text: string,
  correct: boolean
}

export const Questions = [
  {
    "id": "1",
    "category": ["Recursion", "Lists"],
    "difficulty": 1,
    "question": "How would you recurseviely get the size of a list in Elixir?",
    "code": null,
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "The tail represents the list without the first element. So recursion can be used, adding 1 (the head) for each element in the list until the tail is empty.",
    "correctAnswers": [
      {
        "id": 1,
        "text": "1 + the length of the list's tail",
        "correct": true
      },
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "The length of the list's tail",
        "correct": false
      },

      {
        "id": 3,
        "text": "The length of the list's head",
        "correct": false
      },
      {
        "id": 4,
        "text": "1 + the length of the list's head",
        "correct": false

      }
    ]
  },
  {
    "id": "2",
    "category": ["Data Types"],
    "difficulty": 1,
    "question": "Which Elixir data type is represented in the following code: ",
    "code": '%{ "AL" => "Alabama", "WI" => "Wisconsin" }',
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "In elixir like in many programming languages a Map represents a key-value data structure. In Elixir, the syntax for a map is %{ key => value }.",
    "correctAnswers": [
      {
        "id": 1,
        "text": "Map",
        "correct": true
      },
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "List",
        "correct": false
      },
      {
        "id": 3,
        "text": "Regular Expression",
        "correct": false
      }
    ]
  }
]
