import { Question } from "../types";

const questions: Question[] = [
  {
    type: "multiple-choice",
    prompt: "She ____ to the gym every day.",
    options: ["go", "goes", "going"],
    answer: "goes",
  },
  {
    type: "reading",
    passage: "Alice wakes up at 6 a.m. every morning. She eats breakfast and takes the bus to school.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What time does Alice wake up?",
        options: ["7 a.m.", "6 a.m.", "8 a.m."],
        answer: "6 a.m."
      }
    ]
  },
  {
    type: "reading",
    passage: "Tom plays football on the weekends with his friends in the park.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Where does Tom play football?",
        options: ["At school", "In the park", "In the street"],
        answer: "In the park"
      }
    ]
  },
  {
    type: "reading",
    passage: "Maria reads a book every night before going to bed.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does Maria do before bed?",
        options: ["Watches TV", "Reads a book", "Plays games"],
        answer: "Reads a book"
      }
    ]
  },
  {
    type: "reading",
    passage: "John eats lunch at 12:30 p.m. in the cafeteria with his coworkers.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Where does John eat lunch?",
        options: ["At home", "In the cafeteria", "At a restaurant"],
        answer: "In the cafeteria"
      }
    ]
  },
  {
    type: "reading",
    passage: "Lena walks to school every day because she lives nearby.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why does Lena walk to school?",
        options: ["She enjoys it", "She lives nearby", "She misses the bus"],
        answer: "She lives nearby"
      }
    ]
  },
  {
    type: "reading",
    passage: "Mark drinks coffee every morning to feel more awake.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why does Mark drink coffee?",
        options: ["To sleep", "To stay warm", "To feel more awake"],
        answer: "To feel more awake"
      }
    ]
  },
  {
    type: "reading",
    passage: "Sophie goes to the gym three times a week to stay healthy.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "How often does Sophie go to the gym?",
        options: ["Every day", "Three times a week", "Once a month"],
        answer: "Three times a week"
      }
    ]
  },
  {
    type: "reading",
    passage: "They watch a movie every Friday night as a family tradition.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "When do they watch a movie?",
        options: ["Saturday", "Friday night", "Sunday morning"],
        answer: "Friday night"
      }
    ]
  },
  {
    type: "reading",
    passage: "James cleans his room every Saturday morning.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does James do on Saturday morning?",
        options: ["Plays games", "Cleans his room", "Goes to school"],
        answer: "Cleans his room"
      }
    ]
  },
  {
    type: "reading",
    passage: "Linda and her sister visit their grandparents every Sunday.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Who do Linda and her sister visit?",
        options: ["Friends", "Cousins", "Grandparents"],
        answer: "Grandparents"
      }
    ]
  },
  {
    type: "reading",
    passage: "The teacher explains the lesson clearly every day.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "How often does the teacher explain the lesson?",
        options: ["Sometimes", "Every day", "Only on Monday"],
        answer: "Every day"
      }
    ]
  },
  {
    type: "reading",
    passage: "My dad works in an office from Monday to Friday.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Where does my dad work?",
        options: ["At home", "In an office", "In a hospital"],
        answer: "In an office"
      }
    ]
  },
  {
    type: "reading",
    passage: "The cat sleeps on the sofa in the afternoon.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Where does the cat sleep?",
        options: ["On the bed", "On the sofa", "On the floor"],
        answer: "On the sofa"
      }
    ]
  },
  {
    type: "reading",
    passage: "Paul goes jogging every morning in the park.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "When does Paul go jogging?",
        options: ["At night", "Every morning", "In the afternoon"],
        answer: "Every morning"
      }
    ]
  },
  {
    type: "reading",
    passage: "Emma studies English at the library after school.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Where does Emma study English?",
        options: ["At school", "At home", "At the library"],
        answer: "At the library"
      }
    ]
  },
  {
    type: "reading",
    passage: "Liam cooks dinner for his family every night.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does Liam cook?",
        options: ["Lunch", "Snacks", "Dinner"],
        answer: "Dinner"
      }
    ]
  },
  {
    type: "reading",
    passage: "Julie calls her best friend every evening.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Who does Julie call?",
        options: ["Her sister", "Her best friend", "Her teacher"],
        answer: "Her best friend"
      }
    ]
  },
  {
    type: "reading",
    passage: "We visit the museum on the first Saturday of every month.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "When do we visit the museum?",
        options: ["Every week", "On Saturdays", "Once a month"],
        answer: "Once a month"
      }
    ]
  },
  {
    type: "reading",
    passage: "Henry practices the piano every afternoon after school.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What instrument does Henry practice?",
        options: ["Guitar", "Drums", "Piano"],
        answer: "Piano"
      }
    ]
  },
  {
    type: "reading",
    passage: "Nina takes her dog for a walk in the park every evening.",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does Nina do every evening?",
        options: ["Cooks dinner", "Walks her dog", "Watches TV"],
        answer: "Walks her dog"
      }
    ]
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