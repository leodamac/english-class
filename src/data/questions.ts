import { Question } from "../types";

const questions: Question[] = [
  {
    type: "multiple-choice",
    prompt: "She ____ to the gym every day.",
    options: ["go", "goes", "going"],
    answer: "goes",
  },
  {
    type: "fill-in-the-blank",
    prompt: "I ____ (drink) coffee in the morning.",
    answer: "drink",
  },
  {
    type: "audio",
    prompt: "What does he do every Sunday?",
    audioSrc: "/audio/he_plays.mp3",
    options: ["He play football", "He plays football", "He playing football"],
    answer: "He plays football",
  },
    // Multiple-choice questions
  {
    type: "multiple-choice",
    prompt: "She ____ to the gym every day.",
    options: ["go", "goes", "going"],
    answer: "goes",
  },
  {
    type: "multiple-choice",
    prompt: "They ____ in the park on weekends.",
    options: ["play", "plays", "playing"],
    answer: "play",
  },
  {
    type: "multiple-choice",
    prompt: "He ____ coffee in the morning.",
    options: ["drink", "drinks", "drinking"],
    answer: "drinks",
  },
  {
    type: "multiple-choice",
    prompt: "I ____ my homework after school.",
    options: ["do", "does", "doing"],
    answer: "do",
  },
  {
    type: "multiple-choice",
    prompt: "You ____ very hard every day.",
    options: ["work", "works", "working"],
    answer: "work",
  },
  {
    type: "multiple-choice",
    prompt: "She ____ to school by bus.",
    options: ["go", "goes", "going"],
    answer: "goes",
  },
  {
    type: "multiple-choice",
    prompt: "We ____ our parents every Sunday.",
    options: ["visit", "visits", "visiting"],
    answer: "visit",
  },
  {
    type: "multiple-choice",
    prompt: "He ____ to the gym every Monday.",
    options: ["go", "goes", "going"],
    answer: "goes",
  },
  {
    type: "multiple-choice",
    prompt: "They ____ their friends on Friday nights.",
    options: ["meet", "meets", "meeting"],
    answer: "meet",
  },
  {
    type: "multiple-choice",
    prompt: "It ____ in the morning.",
    options: ["rain", "rains", "raining"],
    answer: "rains",
  },
  {
    type: "multiple-choice",
    prompt: "I ____ to the market every Saturday.",
    options: ["go", "goes", "going"],
    answer: "go",
  },
  {
    type: "multiple-choice",
    prompt: "He ____ to bed at 10 p.m.",
    options: ["go", "goes", "going"],
    answer: "goes",
  },
  {
    type: "multiple-choice",
    prompt: "They ____ their homework in the evening.",
    options: ["do", "does", "doing"],
    answer: "do",
  },
  {
    type: "multiple-choice",
    prompt: "She ____ at 7 a.m. every day.",
    options: ["wakes", "wake", "waking"],
    answer: "wakes",
  },
  {
    type: "multiple-choice",
    prompt: "We ____ lunch at 1 p.m.",
    options: ["eat", "eats", "eating"],
    answer: "eat",
  },
  {
    type: "multiple-choice",
    prompt: "You ____ very well.",
    options: ["speak", "speaks", "speaking"],
    answer: "speak",
  },
  {
    type: "multiple-choice",
    prompt: "They ____ football every Saturday.",
    options: ["play", "plays", "playing"],
    answer: "play",
  },
  {
    type: "multiple-choice",
    prompt: "I ____ to the gym after work.",
    options: ["go", "goes", "going"],
    answer: "go",
  },
  {
    type: "multiple-choice",
    prompt: "He ____ his dog every morning.",
    options: ["walk", "walks", "walking"],
    answer: "walks",
  },
  {
    type: "multiple-choice",
    prompt: "You ____ the bus to work.",
    options: ["take", "takes", "taking"],
    answer: "take",
  },
  {
    type: "multiple-choice",
    prompt: "She ____ books in the evening.",
    options: ["read", "reads", "reading"],
    answer: "reads",
  },
  {
    type: "multiple-choice",
    prompt: "We ____ at the restaurant every Friday night.",
    options: ["eat", "eats", "eating"],
    answer: "eat",
  },
  {
    type: "multiple-choice",
    prompt: "He ____ the guitar on weekends.",
    options: ["plays", "play", "playing"],
    answer: "plays",
  },

  // Fill-in-the-blank questions
  {
    type: "fill-in-the-blank",
    prompt: "I ____ (drink) coffee in the morning.",
    answer: "drink",
  },
  {
    type: "fill-in-the-blank",
    prompt: "She ____ (walk) to work every day.",
    answer: "walks",
  },
  {
    type: "fill-in-the-blank",
    prompt: "They ____ (play) soccer after school.",
    answer: "play",
  },
  {
    type: "fill-in-the-blank",
    prompt: "He ____ (do) his homework at night.",
    answer: "does",
  },
  {
    type: "fill-in-the-blank",
    prompt: "We ____ (go) to the library every Friday.",
    answer: "go",
  },
  {
    type: "fill-in-the-blank",
    prompt: "You ____ (eat) lunch at 1 p.m.",
    answer: "eat",
  },
  {
    type: "fill-in-the-blank",
    prompt: "She ____ (listen) to music in the evening.",
    answer: "listens",
  },
  {
    type: "fill-in-the-blank",
    prompt: "I ____ (ride) my bike to school.",
    answer: "ride",
  },
  {
    type: "fill-in-the-blank",
    prompt: "They ____ (clean) the house every weekend.",
    answer: "clean",
  },
  {
    type: "fill-in-the-blank",
    prompt: "He ____ (meet) his friends every weekend.",
    answer: "meets",
  },
  {
    type: "fill-in-the-blank",
    prompt: "She ____ (read) a book every night before bed.",
    answer: "reads",
  },
  {
    type: "fill-in-the-blank",
    prompt: "I ____ (listen) to music on my way to work.",
    answer: "listen",
  },
  {
    type: "fill-in-the-blank",
    prompt: "They ____ (play) tennis on weekends.",
    answer: "play",
  },
  {
    type: "fill-in-the-blank",
    prompt: "We ____ (eat) dinner at 8 p.m.",
    answer: "eat",
  },
  {
    type: "fill-in-the-blank",
    prompt: "You ____ (meet) your friends every Friday night.",
    answer: "meet",
  },
  {
    type: "fill-in-the-blank",
    prompt: "She ____ (run) in the park every morning.",
    answer: "runs",
  },
  {
    type: "fill-in-the-blank",
    prompt: "I ____ (visit) my parents every Sunday.",
    answer: "visit",
  },
  {
    type: "fill-in-the-blank",
    prompt: "He ____ (wash) his car every weekend.",
    answer: "washes",
  },
  {
    type: "fill-in-the-blank",
    prompt: "We ____ (go) to the movies every month.",
    answer: "go",
  },

  // Audio questions
  {
    type: "audio",
    prompt: "What does she do every day?",
    audioSrc: "/audio/she_runs.mp3",
    options: ["She run every day", "She runs every day", "She running every day"],
    answer: "She runs every day",
  },
  {
    type: "audio",
    prompt: "What does he like to do on weekends?",
    audioSrc: "/audio/he_likes.mp3",
    options: ["He like to play", "He likes to play", "He liking to play"],
    answer: "He likes to play",
  },
  {
    type: "audio",
    prompt: "What do they do every summer?",
    audioSrc: "/audio/they_travel.mp3",
    options: ["They travel every summer", "They travels every summer", "They traveling every summer"],
    answer: "They travel every summer",
  },
  {
    type: "audio",
    prompt: "What do you do every morning?",
    audioSrc: "/audio/you_wake_up.mp3",
    options: ["You wake up early", "You wakes up early", "You waking up early"],
    answer: "You wake up early",
  },
  {
    type: "audio",
    prompt: "What does she do after work?",
    audioSrc: "/audio/she_relaxes.mp3",
    options: ["She relax after work", "She relaxes after work", "She relaxing after work"],
    answer: "She relaxes after work",
  },
  {
    type: "audio",
    prompt: "What do they do on holidays?",
    audioSrc: "/audio/they_travel.mp3",
    options: ["They travel on holidays", "They travels on holidays", "They traveling on holidays"],
    answer: "They travel on holidays",
  },
  {
    type: "audio",
    prompt: "What does he do every evening?",
    audioSrc: "/audio/he_runs.mp3",
    options: ["He run every evening", "He runs every evening", "He running every evening"],
    answer: "He runs every evening",
  },
  {
    type: "audio",
    prompt: "What does she eat for breakfast?",
    audioSrc: "/audio/she_eats.mp3",
    options: ["She eat breakfast", "She eats breakfast", "She eating breakfast"],
    answer: "She eats breakfast",
  },
  {
    type: "audio",
    prompt: "What do you do every weekend?",
    audioSrc: "/audio/you_watch.mp3",
    options: ["You watch movies", "You watches movies", "You watching movies"],
    answer: "You watch movies",
  },
  {
    type: "audio",
    prompt: "What does he do every Sunday?",
    audioSrc: "/audio/he_plays.mp3",
    options: ["He play football", "He plays football", "He playing football"],
    answer: "He plays football",
  },  
];

export default questions;