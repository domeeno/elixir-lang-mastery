import { QuestionCategory, QuestionType, QuestionDifficulty, Question } from '../models';

export const Questions: Question[] = [
  {
    "id": "1",
    "category": [QuestionCategory.RECURSION, QuestionCategory.LISTS],
    "difficulty": QuestionDifficulty.EASY,
    "question": "How would you recurseviely get the size of a list in Elixir?",
    "tip": null,
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
    "category": [QuestionCategory.DATA_TYPES],
    "difficulty": QuestionDifficulty.EASY,
    "question": "Which Elixir data type is represented in the following code: ",
    "tip": null,
    "code": '%{ "AL" => "Alabama", "WI" => "Wisconsin" }',
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "In Elixir like in many programming languages a Map represents a key-value data structure. In Elixir, the syntax for a map is %{ key => value }.",
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
  },
  {
    "id": "3",
    "category": [QuestionCategory.GENERAL],
    "difficulty": QuestionDifficulty.EASY,
    "question": "Elixir is a __________ programming language.",
    "code": null,
    "tip": null,
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "Elixir is a purely functional programming language and it uses functions to transform data. Elixir has no concept of classes or objects.",
    "correctAnswers": [
      {
        "id": 1,
        "text": "Purely Functional",
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "Object Oriented",
        "correct": false
      },
      {
        "id": 3,
        "text": "Multi-Paradigm",
        "correct": false
      }
    ]
  },
  {
    "id": "4",
    "category": [QuestionCategory.OPERATORS],
    "difficulty": QuestionDifficulty.EASY,
    "question": "What happens when we write 'a = 1' in Elixir?",
    "tip": null,
    "code": "a = 1",
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "In Elixir, the = operator is used to match the left side with the right side. In this case, we are matching the value 1 with the variable a. This is not the same as the assignment operator in other languages.",
    "correctAnswers": [
      {
        "id": 1,
        "text": "The value 1 is matched with the variable a",
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "Elixir creates a variable a and assigns its value to 1",
        "correct": false
      },
      {
        "id": 3,
        "text": "The value 1 is compared to the variable a, and if they are equal, the expression evaluates to true",
        "correct": false
      }
    ]
  },
  {
    "id": "5",
    "category": [QuestionCategory.OPERATORS],
    "difficulty": QuestionDifficulty.EASY,
    "question": "What will the following Elixir code yeild?",
    "tip": null,
    "code": "iex> a = 1\niex> 1 = a",
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "In Elixir, the '=' operator is used to match values. Because a is already matched with 1, the second line will match 1 with a, and the code will run without errors and it will return the matched value which is 1",
    "correctAnswers": [
      {
        "id": 1,
        "text": "1",
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "** (MatchError) no match of right hand side value: 1",
        "correct": false
      },
      {
        "id": 3,
        "text": "The code will not compile, we can't match a variable to a value",
        "correct": false
      },
      {
        "id": 4,
        "text": "Nothing",
        "correct": false
      }
    ]
  },
  {
    "id": "6",
    "category": [QuestionCategory.OPERATORS],
    "difficulty": QuestionDifficulty.EASY,
    "question": "What will the following Elixir code yeild?",
    "tip": null,
    "code": "iex> a = 1\niex> 1 = a",
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "In Elixir, the '=' operator is used to match values. Because a is already matched with 1, the second line will match 1 with a, and the code will run without errors and it will return the matched value which is 1",
    "correctAnswers": [
      {
        "id": 1,
        "text": "1",
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "** (MatchError) no match of right hand side value: 1",
        "correct": false
      },
      {
        "id": 3,
        "text": "The code will not compile, we can't match a variable to a value",
        "correct": false
      },
      {
        "id": 4,
        "text": "Nothing",
        "correct": false
      }
    ]
  }
]


const QuestionTemplate =
{
  "id": "",
  "category": [],
  "difficulty": 0,
  "question": "",
  "code": "",
  "questionType": QuestionType.ONE_CORRECT,
  "explanation": "",
  "correctAnswers": [
    {
      "id": 0,
      "text": "",
      "correct": false
    }
  ],
  "incorrectAnswers": [
    {
      "id": 0,
      "text": "",
      "correct": false
    },
    {
      "id": 0,
      "text": "",
      "correct": false
    }
  ]
}
