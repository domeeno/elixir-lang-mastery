# Elixir Lang Mastery

Elixir is a functional programming language and if used right you get highly concurrent, fault tolerant, scalable applications.
This project collects questions to integrate them in a QUIZ type website for Elixir developers, or people who are learning Elixir, to practice and master the language.

## You can find the website here:

https://domeeno.github.io/elixir-lang-mastery

## The current state of the project:

Right now the project is at a stage of an MVP.

There are 11 questions, 1 working type of question (Only one correct answer).

You answer correctly - you get a point, you answer wrong - you get no points.

Once you answered all 11 questions you get redirected to the landing page.

## Changes that follow:

- Add more questions
- Add more types of questions
    - Multiple choice - there could be more than one correct answer
    - Interview questions - you get an interview question with no answer options. You have to think of an answer, and then you can check with a button for an answer template to compare with your answer.
- Add a question limit - 10 questions per quiz
- Add some life by adding animations, effects to the website
- Add more details to the mobile view of the app. Currently it is very simple.

## Longer term goals:

- Add categories configuration. You can choose which categories to include in your quiz.
- Add difficulty configuration. You can choose which difficulty to include in your quiz.
- Add question.json auto-generation. Questions will be written in a simpler format, and a script will generate the necessary json file based on the file.

## How to contribute:

- To be determined
- For now, you can open an issue with a question, or a feature request

## How to run the project locally:

- Clone the project
- Run `npm install`
- Run `npm start dev`
