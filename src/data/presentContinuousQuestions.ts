import { Question } from "../types";

const questions: Question[]= [
  {
    id: "q1",
    type: "single-select",
    prompt: "She ____ her homework right now.",
    options: ["is doing", "does", "doing"],
    answer: ["is doing"],
  },
  {
    id: "q2",
    type: "single-select",
    prompt: "We ____ for the bus.",
    options: ["waiting", "are waiting", "wait"],
    answer: ["are waiting"],
  },
  {
    id: "q3",
    type: "single-select",
    prompt: "I ____ my keys!",
    options: ["am losing", "lose", "loses"],
    answer: ["am losing"],
  },
  {
    id: "q4",
    type: "single-select",
    prompt: "They ____ TV at the moment.",
    options: ["watching", "are watching", "watch"],
    answer: ["are watching"],
  },
  {
    id: "q5",
    type: "single-select",
    prompt: "He ____ coffee with his friend.",
    options: ["drinks", "is drinking", "drink"],
    answer: ["is drinking"],
  },
  {
    id: "q6",
    type: "single-select",
    prompt: "Look! The baby ____!",
    options: ["is crying", "cried", "cries"],
    answer: ["is crying"],
  },
  {
    id: "q7",
    type: "single-select",
    prompt: "You ____ very well today.",
    options: ["are singing", "sing", "sings"],
    answer: ["are singing"],
  },
  {
    id: "q8",
    type: "single-select",
    prompt: "Right now, the sun ____.",
    options: ["is shining", "shines", "shine"],
    answer: ["is shining"],
  },
  {
    id: "q9",
    type: "single-select",
    prompt: "I ____ a great time!",
    options: ["am having", "have", "has"],
    answer: ["am having"],
  },
  {
    id: "q10",
    type: "single-select",
    prompt: "She ____ at the moment.",
    options: ["is sleep", "is sleeping", "sleeps"],
    answer: ["is sleeping"],
  },

  {
    id: "q11",
    type: "text",
    prompt: "I ____ (read) a new book.",
    answer: ["am reading"],
  },
  {
    id: "q12",
    type: "text",
    prompt: "She ____ (cook) dinner.",
    answer: ["is cooking"],
  },
  {
    id: "q13",
    type: "text",
    prompt: "We ____ (paint) the room.",
    answer: ["are painting"],
  },
  {
    id: "q14",
    type: "text",
    prompt: "He ____ (not/study) for the test.",
    answer: ["is not studying"],
  },
  {
    id: "q15",
    type: "text",
    prompt: "They ____ (dance) at the party.",
    answer: ["are dancing"],
  },
  {
    id: "q16",
    type: "text",
    prompt: "You ____ (write) very fast!",
    answer: ["are writing"],
  },
  {
    id: "q17",
    type: "text",
    prompt: "I ____ (watch) a movie.",
    answer: ["am watching"],
  },
  {
    id: "q18",
    type: "text",
    prompt: "He ____ (not/sleep) now.",
    answer: ["is not sleeping"],
  },
  {
    id: "q19",
    type: "text",
    prompt: "She ____ (swim) in the pool.",
    answer: ["is swimming"],
  },
  {
    id: "q20",
    type: "text",
    prompt: "We ____ (talk) on the phone.",
    answer: ["are talking"],
  },

  {
    id: "q21",
    type: "single-select",
    prompt: "What is she doing?",
    options: ["She reads", "She reading", "She is reading"],
    answer: ["She is reading"],
  },
  {
    id: "q22",
    type: "single-select",
    prompt: "What are they doing?",
    options: ["They are playing", "They play", "They playing"],
    answer: ["They are playing"],
  },
  {
    id: "q23",
    type: "single-select",
    prompt: "Listen and choose the correct sentence.",
    options: ["I cooking", "I am cooking", "I'm cook"],
    answer: ["I am cooking"],
  },
  {
    id: "q24",
    type: "single-select",
    prompt: "What is he doing right now?",
    options: ["He sleeps", "He sleeping", "He is sleeping"],
    answer: ["He is sleeping"],
  },
  {
    id: "q25",
    type: "single-select",
    prompt: "What is the dog doing?",
    options: ["The dog is barking", "The dog bark", "Dog barking"],
    answer: ["The dog is barking"],
  },

];

export default questions;
