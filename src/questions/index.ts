enum QuestionType {
    ONE_CORRECT,
    MULTIPLE_CHOICE,
    TRUE_OR_FALSE
}

export interface Question {
    id: string,
    category: string[],
    question: string,
    questionType: QuestionType,
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
        "question": "How would you recurseviely get the size of a list in Elixir?",
        "questionType": QuestionType.ONE_CORRECT,
        "correctAnswers": [
            {
                "id": "2",
                "text": "1 + the length of the list's tail",
                "correct": true
            },
        ],
        "incorrectAnswers": [
            {
                "id": "1",
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
    }
]
