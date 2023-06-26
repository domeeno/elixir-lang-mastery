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
    id: string,
    text: string,
    correct: boolean
}

export const Questions = [
    {
        "id": "1",
        "category": ["Recursion", "Lists"],
        "difficulty": 1,
        "question": "How would you recurseviely get the size of a list in Elixir?",
        "questionType": QuestionType.ONE_CORRECT,
        "correctAnswers": [
            {
                "id": "1",
                "text": "1 + the length of the list's tail",
                "correct": true
            },
        ],
        "incorrectAnswers": [
            {
                "id": "2",
                "text": "The length of the list's tail",
                "correct": false
            },

            {
                "id": "3",
                "text": "The length of the list's head",
                "correct": false
            },
            {
                "id": "4",
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
        "correctAnswers": [
            {
                "id": "1",
                "text": "Map",
                "correct": true
            },
        ],
        "incorrectAnswers": [
            {
                "id": "2",
                "text": "List",
                "correct": false
            },
            {
                "id": "3",
                "text": "Regular Expression",
                "correct": false
            }
        ]
    }
]
