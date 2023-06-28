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
    "question": "What would be the right match for the following code?",
    "tip": null,
    "code": 'HttpResponse = [200, "OK", "Hi"]',
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": 'Elixir will match 200 with the first element of the list, and will bind status_text and body to the second and third elements, returning [200, "OK", "Hi"]. The other options will result in a MatchError.',
    "correctAnswers": [
      {
        "id": 1,
        "text": '[200, status_text, body] = HttpResponse',
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "[status_text, body] = HttpResponse",
        "correct": false
      },
      {
        "id": 3,
        "text": '[400, "Ok", "Hi"] = HttpResponse',
        "correct": false
      },
      {
        "id": 4,
        "text": '[200, "Hi", "Ok"] = HttpResponse',
        "correct": false
      }
    ]
  },
  {
    "id": "7",
    "category": [QuestionCategory.OPERATORS],
    "difficulty": QuestionDifficulty.EASY,
    "question": "",
    "tip": null,
    "code": '# What will the following code yeild? \n[a, a] = [2, 1]\n# But the following? \n[a, a] = [1, 1]',
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "Elixir will match 'a' to 2, and then try to match 'a' to 1. Since 'a' is already matched to 2, the code will raise a MatchError. The second one will return the matched values - [1, 1].",
    "correctAnswers": [
      {
        "id": 1,
        "text": 'MatchError and [1, 1]',
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "MatchError and MatchError",
        "correct": false
      },
      {
        "id": 3,
        "text": 'MatchError and 1',
        "correct": false
      },
      {
        "id": 4,
        "text": '[2, 1] and [1, 1]',
        "correct": false
      }
    ]
  },
  {
    "id": "8",
    "category": [QuestionCategory.DATA_TYPES, QuestionCategory.LISTS],
    "difficulty": QuestionDifficulty.EASY,
    "question": "What is the correct syntax for creating an empty list in Elixir?",
    "tip": null,
    "code": null,
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "To create an empty list in Elixir, you can use the square brackets with no elements inside '[]'.",
    "correctAnswers": [
      {
        "id": 1,
        "text": "[]",
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "{}",
        "correct": false
      },
      {
        "id": 3,
        "text": "()",
        "correct": false
      },
      {
        "id": 4,
        "text": "[nil]",
        "correct": false
      }
    ]
  },
  {
    "id": "9",
    "category": [QuestionCategory.GENERAL],
    "difficulty": QuestionDifficulty.EASY,
    "question": "Which of the following is true about Elixir?",
    "tip": null,
    "code": null,
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "Elixir is a dynamically-typed language, which means that variable types are determined at runtime.",
    "correctAnswers": [
      {
        "id": 1,
        "text": "Elixir is a dynamically-typed language.",
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "Elixir is a statically-typed language.",
        "correct": false
      },
      {
        "id": 3,
        "text": "Elixir is a compiled language.",
        "correct": false
      }
    ]
  },
  {
    "id": "10",
    "category": [QuestionCategory.OPERATORS],
    "difficulty": QuestionDifficulty.EASY,
    "question": "What will be the output of the following Elixir code?",
    "tip": null,
    "code": "case {1, 2} do\n  {1, x} -> IO.puts(x)\n  {x, 2} -> IO.puts(x)\n  _ -> IO.puts(\"No match\")\nend",
    "questionType": QuestionType.ONE_CORRECT,
    "explanation": "The code uses pattern matching in a `case` expression to match the provided tuple. The first pattern `{1, x}` will match the tuple, and the value of `x` will be printed, resulting in the output `2`.",
    "correctAnswers": [
      {
        "id": 1,
        "text": "2",
        "correct": true
      }
    ],
    "incorrectAnswers": [
      {
        "id": 2,
        "text": "1",
        "correct": false
      },
      {
        "id": 3,
        "text": "{1, 2}",
        "correct": false
      },
      {
        "id": 4,
        "text": "No match",
        "correct": false
      }
    ]
  }
]


const QuestionTemplate: Question =
{
  "id": "",
  "category": [],
  "difficulty": QuestionDifficulty.EASY,
  "question": "",
  "tip": "",
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
