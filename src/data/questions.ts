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
    passage: "Tom enjoys reading books in the library every weekend. His favorite genre is mystery.",
    questions: [
      {
        prompt: "What is Tom's favorite genre?",
        options: ["Mystery", "Fantasy", "Sci-Fi"],
        answer: "Mystery",
      },
    ],
  },
  {
    type: "reading",
    passage: "Mary loves to play the piano. She practices for one hour every day after school.",
    questions: [
      {
        prompt: "How long does Mary practice the piano each day?",
        options: ["30 minutes", "One hour", "Two hours"],
        answer: "One hour",
      },
    ],
  },
  {
    type: "reading",
    passage: "John and his family go to the beach every summer. They enjoy swimming and playing volleyball.",
    questions: [
      {
        prompt: "What do John and his family enjoy doing at the beach?",
        options: ["Swimming and playing volleyball", "Surfing and sunbathing", "Reading and eating"],
        answer: "Swimming and playing volleyball",
      },
    ],
  },
  {
    type: "reading",
    passage: "Samantha visits her grandparents every Sunday. She loves spending time with them and listening to their stories.",
    questions: [
      {
        prompt: "What does Samantha like to do with her grandparents?",
        options: ["Spend time and listen to their stories", "Go shopping with them", "Cook meals with them"],
        answer: "Spend time and listen to their stories",
      },
    ],
  },
  {
    type: "reading",
    passage: "Mark works in a restaurant. He enjoys cooking and serving food to customers.",
    questions: [
      {
        prompt: "Where does Mark work?",
        options: ["In a restaurant", "In an office", "In a school"],
        answer: "In a restaurant",
      },
    ],
  },
  {
    type: "reading",
    passage: "Sarah loves to travel. She has visited many countries, including Japan, France, and Italy.",
    questions: [
      {
        prompt: "Which countries has Sarah visited?",
        options: ["Japan, France, and Italy", "Germany, Spain, and Portugal", "USA, Canada, and Mexico"],
        answer: "Japan, France, and Italy",
      },
    ],
  },
  {
    type: "reading",
    passage: "Lucas enjoys playing video games. He often plays with his friends online.",
    questions: [
      {
        prompt: "What does Lucas enjoy doing?",
        options: ["Playing video games", "Reading books", "Watching movies"],
        answer: "Playing video games",
      },
    ],
  },
  {
    type: "reading",
    passage: "Anna loves painting. She spends hours in her studio creating beautiful landscapes and portraits.",
    questions: [
      {
        prompt: "What does Anna love to do?",
        options: ["Painting", "Swimming", "Dancing"],
        answer: "Painting",
      },
    ],
  },
  {
    type: "reading",
    passage: "David is a soccer player. He practices every day to improve his skills.",
    questions: [
      {
        prompt: "What sport does David play?",
        options: ["Soccer", "Basketball", "Tennis"],
        answer: "Soccer",
      },
    ],
  },
  {
    type: "reading",
    passage: "Emma enjoys hiking in the mountains. She goes on long hikes with her friends during the weekends.",
    questions: [
      {
        prompt: "What does Emma enjoy doing?",
        options: ["Hiking in the mountains", "Shopping", "Cycling"],
        answer: "Hiking in the mountains",
      },
    ],
  },
  {
    type: "reading",
    passage: "Carlos is a teacher. He loves his job because he enjoys helping students learn new things.",
    questions: [
      {
        prompt: "What is Carlos's job?",
        options: ["Teacher", "Doctor", "Engineer"],
        answer: "Teacher",
      },
    ],
  },
  {
    type: "reading",
    passage: "Olivia plays tennis every afternoon. She is part of her school's tennis team.",
    questions: [
      {
        prompt: "What sport does Olivia play?",
        options: ["Tennis", "Basketball", "Football"],
        answer: "Tennis",
      },
    ],
  },
  {
    type: "reading",
    passage: "Jack enjoys watching movies. He goes to the cinema with his friends once a month.",
    questions: [
      {
        prompt: "How often does Jack go to the cinema?",
        options: ["Once a month", "Every week", "Every day"],
        answer: "Once a month",
      },
    ],
  },
  {
    type: "reading",
    passage: "Lily enjoys reading novels. She reads for at least one hour every evening before bed.",
    questions: [
      {
        prompt: "How long does Lily read each evening?",
        options: ["One hour", "30 minutes", "Two hours"],
        answer: "One hour",
      },
    ],
  },
  {
    type: "reading",
    passage: "Ethan loves animals. He has a dog, a cat, and a rabbit at home.",
    questions: [
      {
        prompt: "What pets does Ethan have?",
        options: ["A dog, a cat, and a rabbit", "A dog and a bird", "A cat and a hamster"],
        answer: "A dog, a cat, and a rabbit",
      },
    ],
  },
  {
    type: "reading",
    passage: "Sophia likes to cook. She often prepares dinner for her family and friends.",
    questions: [
      {
        prompt: "What does Sophia like to do?",
        options: ["Cook", "Dance", "Play sports"],
        answer: "Cook",
      },
    ],
  },
  {
    type: "reading",
    passage: "Nina enjoys playing the violin. She practices every day for an hour to improve her skills.",
    questions: [
      {
        prompt: "How long does Nina practice the violin each day?",
        options: ["One hour", "30 minutes", "Two hours"],
        answer: "One hour",
      },
    ],
  },
  {
    type: "reading",
    passage: "Alex loves going to the gym. He works out every morning before work.",
    questions: [
      {
        prompt: "When does Alex go to the gym?",
        options: ["Every morning before work", "Every evening", "On weekends"],
        answer: "Every morning before work",
      },
    ],
  },
  {
    type: "reading",
    passage: "Bella enjoys photography. She often takes pictures of nature and landscapes during her hikes.",
    questions: [
      {
        prompt: "What does Bella enjoy doing?",
        options: ["Photography", "Reading", "Dancing"],
        answer: "Photography",
      },
    ],
  },
  {
    type: "reading",
    passage: "Oliver loves playing chess. He often plays with his grandfather on weekends.",
    questions: [
      {
        prompt: "Who does Oliver play chess with?",
        options: ["His grandfather", "His friends", "His sister"],
        answer: "His grandfather",
      },
    ],
  },
  {
    type: "reading",
    passage: "Chloe enjoys baking. She often makes cakes and cookies for her family.",
    questions: [
      {
        prompt: "What does Chloe enjoy doing?",
        options: ["Baking", "Painting", "Swimming"],
        answer: "Baking",
      },
    ],
  },
  {
    type: "reading",
    passage: "George loves cycling. He rides his bike every morning to stay fit.",
    questions: [
      {
        prompt: "Why does George cycle every morning?",
        options: ["To stay fit", "For fun", "To go to work"],
        answer: "To stay fit",
      },
    ],
  },
  {
    type: "reading",
    passage: "Ella is passionate about fashion. She spends a lot of time designing clothes in her free time.",
    questions: [
      {
        prompt: "What is Ella passionate about?",
        options: ["Fashion", "Music", "Cooking"],
        answer: "Fashion",
      },
    ],
  },
  {
    type: "reading",
    passage: "Nathan enjoys fishing. He goes to the lake every weekend with his friends.",
    questions: [
      {
        prompt: "Where does Nathan go every weekend?",
        options: ["To the lake", "To the beach", "To the park"],
        answer: "To the lake",
      },
    ],
  },
  {
    type: "reading",
    passage: "Isabella loves gardening. She plants flowers and vegetables in her backyard.",
    questions: [
      {
        prompt: "What does Isabella do in her backyard?",
        options: ["Plant flowers and vegetables", "Play sports", "Read books"],
        answer: "Plant flowers and vegetables",
      },
    ],
  },
  {
    type: "reading",
    passage: "Mason enjoys running. He participates in 5k races every month.",
    questions: [
      {
        prompt: "What does Mason do every month?",
        options: ["Participates in 5k races", "Plays football", "Goes to the gym"],
        answer: "Participates in 5k races",
      },
    ],
  },
  {
    type: "reading",
    passage: "Zoe loves spending time at the beach. She enjoys swimming and building sandcastles.",
    questions: [
      {
        prompt: "What does Zoe enjoy doing at the beach?",
        options: ["Swimming and building sandcastles", "Surfing", "Reading books"],
        answer: "Swimming and building sandcastles",
      },
    ],
  },
  {
    type: "reading",
    passage: "Henry is learning to play the guitar. He practices every day for 30 minutes.",
    questions: [
      {
        prompt: "How long does Henry practice the guitar each day?",
        options: ["30 minutes", "One hour", "Two hours"],
        answer: "30 minutes",
      },
    ],
  },
  {
    type: "reading",
    passage: "Ava enjoys traveling by train. She finds it relaxing and scenic.",
    questions: [
      {
        prompt: "How does Ava enjoy traveling?",
        options: ["By train", "By car", "By plane"],
        answer: "By train",
      },
    ],
  },
  {
    type: "reading",
    passage: "Daniel enjoys playing basketball with his friends at the park every Saturday.",
    questions: [
      {
        prompt: "Where does Daniel play basketball?",
        options: ["At the park", "At school", "At home"],
        answer: "At the park",
      },
    ],
  },
  {type: "reading",
  passage: `Sarah wakes up at 6 a.m. every day. She eats breakfast and then walks to school. After school, she plays soccer with her friends.`,
  questions: [
    {
      prompt: "What time does Sarah wake up?",
      options: ["6 a.m.", "7 a.m.", "8 a.m."],
      answer: "6 a.m."
    }
  ]},
  {    type: "reading",
    passage: `Sarah wakes up at 6 a.m. every day. She eats breakfast and then walks to school. After school, she plays soccer with her friends.`,
    questions: [
    {
      prompt: "What does Sarah do after school?",
      options: ["She studies", "She goes home", "She plays soccer"],
      answer: "She plays soccer"
    }
  ]},
  {    type: "reading",
    passage: `Sarah wakes up at 6 a.m. every day. She eats breakfast and then walks to school. After school, she plays soccer with her friends.`,
    questions: [
    {
      prompt: "What does Sarah do after school?",
      options: ["She studies", "She goes home", "She plays soccer"],
      answer: "She plays soccer"
    }
  ]},
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