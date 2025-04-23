import { Question } from "../types";

const questions: Question[] = [
    {
      id: "q1",
      type: "text",
      prompt: "What is the capital of France?",
      answer: ["Paris"],
      audioSrc: "src/data/1.mp3",
    },
    {
      id: "q2",
      type: "single-select",
      prompt: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: ["Mars"],
      audioSrc: "src/data/1.mp3",
    },
    {
      id: "q3",
      type: "multi-select",
      prompt: "Select all prime numbers:",
      options: ["2", "3", "4", "5"],
      answer: ["2", "3", "5"],
      audioSrc: "src/data/1.mp3",
    },
    {
      id: "q4",
      type: "text",
      prompt: "______ is the process by which plants make their food.",
      answer: ["Photosynthesis"],
      audioSrc: "src/data/1.mp3",
    },
    {
      id: "q5",
      type: "text",
      prompt: "What is the square root of 64?",
      answer: ["8"],
      audioSrc: "src/data/1.mp3",
    },
    {
      id: "q6",
      type: "single-select",
      prompt: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: ["Carbon Dioxide"],
    },
    {
      id: "q7",
      type: "multi-select",
      prompt: "Which of the following are programming languages?",
      options: ["Python", "HTML", "JavaScript", "CSS"],
      answer: ["Python", "JavaScript"],
    },
    {
      id: "q8",
      type: "text",
      prompt: "The chemical symbol for water is ____.",
      answer: ["H2O"],
    },
    {
      id: "q9",
      type: "text",
      prompt: "How many continents are there?",
      answer: ["7", "seven"],
    },
    {
      id: "q10",
      type: "single-select",
      prompt: "Which of these animals is a mammal?",
      options: ["Frog", "Shark", "Whale", "Eagle"],
      answer: ["Whale"],
    },  
];

export default questions;