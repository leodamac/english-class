import { Question } from "../types";

const questions: Question[]= [
    {
        "id": "q1",
        "type": "single-select",
        "prompt": "Complete: I am ____ my holidays at the beach.",
        "audioSrc": "/data/1.mp3",
        "options": ["spending", "spent", "spend"],
        "answer": ["spending"]
      },
      {
        "id": "q2",
        "type": "single-select",
        "prompt": "She is ____ her grandparents this Christmas.",
        "audioSrc": "/data/2.mp3",
        "options": ["visiting", "visit", "visited"],
        "answer": ["visiting"]
      },
      {
        "id": "q3",
        "type": "single-select",
        "prompt": "We are going to the ____ this winter.",
        "audioSrc": "/data/3.mp3",
        "options": ["mountain", "mountains", "mountains'"],
        "answer": ["mountains"]
      },
      {
        "id": "q4",
        "type": "single-select",
        "prompt": "They are staying at a hotel in ____ right now.",
        "audioSrc": "/data/4.mp3",
        "options": ["Paris", "Cancun", "London"],
        "answer": ["Cancun"]
      },
      {
        "id": "q5",
        "type": "single-select",
        "prompt": "He is ____ to New York for Thanksgiving.",
        "audioSrc": "/data/5.mp3",
        "options": ["fly", "flying", "flown"],
        "answer": ["flying"]
      },
      {
        "id": "q6",
        "type": "text",
        "prompt": "Complete: My family is traveling around ______ this summer.",
        "audioSrc": "/data/6.mp3",
        "answer": ["Europe"]
      },
      {
        "id": "q7",
        "type": "text",
        "prompt": "Complete: We are celebrating New Year’s Eve with ______ tonight.",
        "audioSrc": "/data/7.mp3",
        "answer": ["fireworks"]
      },
      {
        "id": "q8",
        "type": "text",
        "prompt": "Complete: He isn’t enjoying the ______ weather.",
        "audioSrc": "/data/8.mp3",
        "answer": ["cold"]
      },
      {
        "id": "q9",
        "type": "text",
        "prompt": "Complete the question: Are you ______ during Easter?",
        "audioSrc": "/data/9.mp3",
        "answer": ["traveling"]
      },
      {
        "id": "q10",
        "type": "text",
        "prompt": "Complete: She is going ______ this weekend.",
        "audioSrc": "/data/10.mp3",
        "answer": ["camping"]
      },
      {
        "id": "q_text_11",
        "type": "text",
        "prompt": "Complete: They are ____ a road trip across the country.",
        "audioSrc": "/data/11.mp3",
        "answer": ["enjoying"]
    },
    {
        "id": "q_text_12",
        "type": "text",
        "prompt": "Complete: I’m ____ my suitcase for the trip.",
        "audioSrc": "/data/12.mp3",
        "answer": ["packing"]
    },
    {
        "id": "q_text_13",
        "type": "text",
        "prompt": "Complete: He is ____ his flights online.",
        "audioSrc": "/data/13.mp3",
        "answer": ["booking"]
    },
    {
        "id": "q_text_14",
        "type": "text",
        "prompt": "Complete: My parents are ____ for a peaceful destination.",
        "audioSrc": "/data/14.mp3",
        "answer": ["looking"]
    },
    {
        "id": "q_text_15",
        "type": "text",
        "prompt": "Complete: We are ____ museums this afternoon.",
        "audioSrc": "/data/15.mp3",
        "answer": ["visiting"]
    },
    {
        "id": "q_text_16",
        "type": "text",
        "prompt": "Complete: She is ____ her passport again.",
        "audioSrc": "/data/16.mp3",
        "answer": ["checking"]
    },
    {
        "id": "q_text_17",
        "type": "text",
        "prompt": "Complete: I’m ____ lots of pictures of the scenery.",
        "audioSrc": "/data/17.mp3",
        "answer": ["taking"]
    },
    {
        "id": "q_text_18",
        "type": "text",
        "prompt": "Complete the question: Are they ____ a car for their vacation?",
        "audioSrc": "/data/18.mp3",
        "answer": ["renting"]
    },
    {
        "id": "q_text_19",
        "type": "text",
        "prompt": "Complete: He is ____ postcards from Italy.",
        "audioSrc": "/data/19.mp3",
        "answer": ["sending"]
    },
    {
        "id": "q_text_20",
        "type": "text",
        "prompt": "Complete: They are ____ two weeks in Spain.",
        "audioSrc": "/data/20.mp3",
        "answer": ["spending"]
    },
    {
        "id": "q_text_21",
        "type": "text",
        "prompt": "Complete: I am ____ new local dishes.",
        "audioSrc": "/data/21.mp3",
        "answer": ["trying"]
    },
    {
        "id": "q_text_22",
        "type": "text",
        "prompt": "Complete: We are ____ in a cabin near the lake this week.",
        "audioSrc": "/data/22.mp3",
        "answer": ["staying"]
    },
    {
        "id": "q_text_23",
        "type": "text",
        "prompt": "Complete: She is ____ a new country.",
        "audioSrc": "/data/23.mp3",
        "answer": ["exploring"]
    },
    {
        "id": "q_text_24",
        "type": "single-select",
        "prompt": "Choose the correct option: He is ____ an adventure holiday.",
        "audioSrc": "/data/24.mp3",
        "options": ["choosing", "chose", "chooses"],
        "answer": ["choosing"]
    },
    {
        "id": "q_text_25",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: My friends are ____ in the mountains.",
        "audioSrc": "/data/25.mp3",
        "options": [
            "hiking",
            "riding",
            "sleeping",
            "walking"
        ],
        "answer": ["hiking", "walking"]
    },
    {
        "id": "q_text_26",
        "type": "text",
        "prompt": "Complete: We are ____ a train to Paris tomorrow.",
        "audioSrc": "/data/26.mp3",
        "answer": ["taking"]
    },
    {
        "id": "q_text_27",
        "type": "single-select",
        "prompt": "Choose the correct option: She is ____ souvenirs at the market.",
        "audioSrc": "/data/27.mp3",
        "options": ["buying", "bought", "buy"],
        "answer": ["buying"]
    },
    {
        "id": "q_text_28",
        "type": "text",
        "prompt": "Complete the question: Are you ____ on a cruise this year?",
        "audioSrc": "/data/28.mp3",
        "answer": ["going"]
    },
    {
        "id": "q_text_29",
        "type": "single-select",
        "prompt": "Choose the correct option: They aren’t ____ in December.",
        "audioSrc": "/data/29.mp3",
        "options": ["traveling", "traveled", "travels"],
        "answer": ["traveling"]
    },
    {
        "id": "q_text_30",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: I’m ____ my birthday abroad.",
        "audioSrc": "/data/30.mp3",
        "options": [
            "celebrating",
            "celebrate",
            "celebrates",
            "celebrated"
        ],
        "answer": ["celebrating"]
    },    
    {
        "id": "q_text_31",
        "type": "text",
        "prompt": "Complete: We are ____ traditional food at a local restaurant.",
        "audioSrc": "/data/31.mp3",
        "answer": ["eating"]
    },
    {
        "id": "q_text_32",
        "type": "single-select",
        "prompt": "Choose the correct option: He is ____ in the ocean right now.",
        "audioSrc": "/data/32.mp3",
        "options": ["swimming", "swinging", "walking"],
        "answer": ["swimming"]
    },
    {
        "id": "q_text_33",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: They are ____ around the city center.",
        "audioSrc": "/data/33.mp3",
        "options": ["walking", "driving", "biking"],
        "answer": ["walking"]
    },
    {
        "id": "q_text_34",
        "type": "text",
        "prompt": "Complete: She is ____ a travel blog.",
        "audioSrc": "/data/34.mp3",
        "answer": ["reading"]
    },
    {
        "id": "q_text_35",
        "type": "text",
        "prompt": "Complete: I’m ____ our daily activities.",
        "audioSrc": "/data/35.mp3",
        "answer": ["planning"]
    },
    {
        "id": "q_text_36",
        "type": "single-select",
        "prompt": "Choose the correct option: He is ____ the weather before we leave.",
        "audioSrc": "/data/36.mp3",
        "options": ["checking", "checking out", "checked"],
        "answer": ["checking"]
    },
    {
        "id": "q_text_37",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: Are they ____ a travel guide app?",
        "audioSrc": "/data/37.mp3",
        "options": ["using", "developing", "downloading"],
        "answer": ["using"]
    },
    {
        "id": "q_text_38",
        "type": "text",
        "prompt": "Complete: We are ____ at the airport soon.",
        "audioSrc": "/data/38.mp3",
        "answer": ["arriving"]
    },
    {
        "id": "q_text_39",
        "type": "text",
        "prompt": "Complete: She is ____ ancient ruins.",
        "audioSrc": "/data/39.mp3",
        "answer": ["visiting"]
    },
    {
        "id": "q_text_40",
        "type": "single-select",
        "prompt": "Choose the correct option: They are ____ to music during the ride.",
        "audioSrc": "/data/40.mp3",
        "options": ["listening", "hearing", "watching"],
        "answer": ["listening"]
    },    
    {
        "id": "q_text_41",
        "type": "text",
        "prompt": "Complete: He is ____ travel vlogs on YouTube.",
        "audioSrc": "/data/41.mp3",
        "answer": ["watching"]
    },
    {
        "id": "q_text_42",
        "type": "single-select",
        "prompt": "Choose the correct option: I’m ____ for cheap flights.",
        "audioSrc": "/data/42.mp3",
        "options": ["searching", "search", "searched"],
        "answer": ["searching"]
    },
    {
        "id": "q_text_43",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: Are you ____ Google Maps?",
        "audioSrc": "/data/43.mp3",
        "options": ["using", "searching", "looking at"],
        "answer": ["using"]
    },
    {
        "id": "q_text_44",
        "type": "text",
        "prompt": "Complete: She is ____ snacks for the road trip.",
        "audioSrc": "/data/44.mp3",
        "answer": ["buying"]
    },
    {
        "id": "q_text_45",
        "type": "text",
        "prompt": "Complete: They are ____ about their vacation in a blog.",
        "audioSrc": "/data/45.mp3",
        "answer": ["writing"]
    },
    {
        "id": "q_text_46",
        "type": "single-select",
        "prompt": "Choose the correct option: We are ____ selfies at every stop.",
        "audioSrc": "/data/46.mp3",
        "options": ["taking", "taking a", "take"],
        "answer": ["taking"]
    },
    {
        "id": "q_text_47",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: He is ____ coffee at a beach café.",
        "audioSrc": "/data/47.mp3",
        "options": ["drinking", "ordering", "having"],
        "answer": ["drinking"]
    },
    {
        "id": "q_text_48",
        "type": "text",
        "prompt": "Complete: I’m ____ a walking tour of the city.",
        "audioSrc": "/data/48.mp3",
        "answer": ["enjoying"]
    },
    {
        "id": "q_text_49",
        "type": "text",
        "prompt": "Complete: She is ____ a group trip for her friends.",
        "audioSrc": "/data/49.mp3",
        "answer": ["organizing"]
    },
    {
        "id": "q_text_50",
        "type": "single-select",
        "prompt": "Choose the correct option: They are ____ famous landmarks in Rome.",
        "audioSrc": "/data/50.mp3",
        "options": ["visiting", "looking at", "touring"],
        "answer": ["visiting"]
    },    
    {
        "id": "q_text_51",
        "type": "text",
        "prompt": "Complete: I like ____ music.",
        "audioSrc": "/data/51.mp3",
        "answer": ["classical"]
    },
    {
        "id": "q_text_52",
        "type": "single-select",
        "prompt": "Choose the correct option: She listens to ____ every evening.",
        "audioSrc": "/data/52.mp3",
        "options": ["jazz", "pop", "classical"],
        "answer": ["jazz"]
    },
    {
        "id": "q_text_53",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: We enjoy ____ songs on the radio.",
        "audioSrc": "/data/53.mp3",
        "options": ["pop", "rock", "jazz"],
        "answer": ["pop"]
    },
    {
        "id": "q_text_54",
        "type": "text",
        "prompt": "Complete: They prefer ____ over electronic music.",
        "audioSrc": "/data/54.mp3",
        "answer": ["rock"]
    },
    {
        "id": "q_text_55",
        "type": "text",
        "prompt": "Complete: He plays ____ on his guitar.",
        "audioSrc": "/data/55.mp3",
        "answer": ["blues"]
    },
    {
        "id": "q_text_56",
        "type": "single-select",
        "prompt": "Choose the correct option: I don't understand ____ metal.",
        "audioSrc": "/data/56.mp3",
        "options": ["heavy", "light", "classic"],
        "answer": ["heavy"]
    },
    {
        "id": "q_text_57",
        "type": "text",
        "prompt": "Complete: Do you like ____ music?",
        "audioSrc": "/data/57.mp3",
        "answer": ["country"]
    },
    {
        "id": "q_text_58",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: She always sings along with ____ tracks.",
        "audioSrc": "/data/58.mp3",
        "options": ["hip-hop", "pop", "classical"],
        "answer": ["hip-hop"]
    },
    {
        "id": "q_text_59",
        "type": "text",
        "prompt": "Complete: We attend ____ festivals in the summer.",
        "audioSrc": "/data/59.mp3",
        "answer": ["reggae"]
    },
    {
        "id": "q_text_60",
        "type": "text",
        "prompt": "Complete: He practices ____ songs daily.",
        "audioSrc": "/data/60.mp3",
        "answer": ["folk"]
    },    
    {
        "id": "q_text_61",
        "type": "text",
        "prompt": "Complete: They play ____ music at parties.",
        "audioSrc": "/data/61.mp3",
        "answer": ["Latin"]
    },
    {
        "id": "q_text_62",
        "type": "single-select",
        "prompt": "Choose the correct option: I listen to ____ while studying.",
        "audioSrc": "/data/62.mp3",
        "options": ["lo-fi", "pop", "rock"],
        "answer": ["lo-fi"]
    },
    {
        "id": "q_text_63",
        "type": "text",
        "prompt": "Complete: She downloads ____ songs often.",
        "audioSrc": "/data/63.mp3",
        "answer": ["indie"]
    },
    {
        "id": "q_text_64",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: We love ____ music.",
        "audioSrc": "/data/64.mp3",
        "options": ["80s synth-pop", "classical", "jazz"],
        "answer": ["80s synth-pop"]
    },
    {
        "id": "q_text_65",
        "type": "text",
        "prompt": "Complete: He collects ____ records of old jazz.",
        "audioSrc": "/data/65.mp3",
        "answer": ["vinyl"]
    },
    {
        "id": "q_text_66",
        "type": "single-select",
        "prompt": "Choose the correct option: Do they enjoy ____?",
        "audioSrc": "/data/66.mp3",
        "options": ["opera", "rock", "pop"],
        "answer": ["opera"]
    },
    {
        "id": "q_text_67",
        "type": "text",
        "prompt": "Complete: She hates ____ music.",
        "audioSrc": "/data/67.mp3",
        "answer": ["techno"]
    },
    {
        "id": "q_text_68",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: We stream ____ playlists at work.",
        "audioSrc": "/data/68.mp3",
        "options": ["chill-out", "rock", "pop"],
        "answer": ["chill-out"]
    },
    {
        "id": "q_text_69",
        "type": "text",
        "prompt": "Complete: He explores different ____ genres.",
        "audioSrc": "/data/69.mp3",
        "answer": ["music"]
    },
    {
        "id": "q_text_70",
        "type": "single-select",
        "prompt": "Choose the correct option: They dance to ____ every weekend.",
        "audioSrc": "/data/70.mp3",
        "options": ["Afrobeat", "pop", "classical"],
        "answer": ["Afrobeat"]
    },    
    {
        "id": "q_text_71",
        "type": "single-select",
        "prompt": "Choose the correct option: I follow ____ rock bands.",
        "audioSrc": "/data/71.mp3",
        "options": ["local", "international", "famous"],
        "answer": ["local"]
    },
    {
        "id": "q_text_72",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: She creates ____ beats.",
        "audioSrc": "/data/72.mp3",
        "options": ["electronic", "acoustic", "pop"],
        "answer": ["electronic"]
    },
    {
        "id": "q_text_73",
        "type": "text",
        "prompt": "Complete: We play ____ songs at gatherings.",
        "audioSrc": "/data/73.mp3",
        "answer": ["acoustic"]
    },
    {
        "id": "q_text_74",
        "type": "text",
        "prompt": "Complete: He knows every ____ band in town.",
        "audioSrc": "/data/74.mp3",
        "answer": ["punk"]
    },
    {
        "id": "q_text_75",
        "type": "single-select",
        "prompt": "Choose the correct option: Do you sing ____ at church?",
        "audioSrc": "/data/75.mp3",
        "options": ["gospel", "classical", "jazz"],
        "answer": ["gospel"]
    },
    {
        "id": "q_text_76",
        "type": "text",
        "prompt": "Complete: She teaches children about ____ composers.",
        "audioSrc": "/data/76.mp3",
        "answer": ["classical"]
    },
    {
        "id": "q_text_77",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: We join ____ music communities.",
        "audioSrc": "/data/77.mp3",
        "options": ["online", "local", "radio"],
        "answer": ["online"]
    },
    {
        "id": "q_text_78",
        "type": "text",
        "prompt": "Complete: He avoids ____ pop.",
        "audioSrc": "/data/78.mp3",
        "answer": ["mainstream"]
    },
    {
        "id": "q_text_79",
        "type": "single-select",
        "prompt": "Choose the correct option: They admire ____ musicians.",
        "audioSrc": "/data/79.mp3",
        "options": ["jazz", "rock", "hip-hop"],
        "answer": ["jazz"]
    },
    {
        "id": "q_text_80",
        "type": "multi-select",
        "prompt": "Choose all the correct answers: I watch ____ documentaries.",
        "audioSrc": "/data/80.mp3",
        "options": ["music", "science", "history"],
        "answer": ["music"]
    },
    {
        "id": "q_text_81",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["She reviews new albums weekly."],
        "audioSrc": "/data/81.mp3"
    },
    {
        "id": "q_text_82",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["We share playlists with friends."],
        "audioSrc": "/data/82.mp3"
    },
    {
        "id": "q_text_83",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["He plays in a reggae band."],
        "audioSrc": "/data/83.mp3"
    },
    {
        "id": "q_text_84",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["Do they make trap beats?"],
        "audioSrc": "/data/84.mp3"
    },
    {
        "id": "q_text_85",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["She learns new instruments."],
        "audioSrc": "/data/85.mp3"
    },
    {
        "id": "q_text_86",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["We hear soul music at family events."],
        "audioSrc": "/data/86.mp3"
    },
    {
        "id": "q_text_87",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["He writes country lyrics."],
        "audioSrc": "/data/87.mp3"
    },
    {
        "id": "q_text_88",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["They record garage rock demos."],
        "audioSrc": "/data/88.mp3"
    },
    {
        "id": "q_text_89",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["I appreciate instrumental music."],
        "audioSrc": "/data/89.mp3"
    },    
    {
        "id": "q_text_90",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["She mixes techno and house."],
        "audioSrc": "/data/90.mp3",
    },
    {
        "id": "q_text_91",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["We sing karaoke on Fridays."],
        "audioSrc": "/data/91.mp3",
    },
    {
        "id": "q_text_92",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["He listens to funk in his car."],
        "audioSrc": "/data/92.mp3",
    },
    {
        "id": "q_text_93",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["Do you enjoy ska music?"],
        "audioSrc": "/data/93.mp3",
    },
    {
        "id": "q_text_94",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["She choreographs to R&B tracks."],
        "audioSrc": "/data/94.mp3",
    },
    {
        "id": "q_text_95",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["We clap to the rhythm."],
        "audioSrc": "/data/95.mp3",
    },
    {
        "id": "q_text_96",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["He hums show tunes."],
        "audioSrc": "/data/96.mp3",
    },
    {
        "id": "q_text_97",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["They rap in freestyle battles."],
        "audioSrc": "/data/97.mp3",
    },
    {
        "id": "q_text_98",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["I explore ancient music traditions."],
        "audioSrc": "/data/98.mp3",
    },
    {
        "id": "q_text_99",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["She reads about music history."],
        "audioSrc": "/data/99.mp3",
    },
    {
        "id": "q_text_100",
        "type": "text",
        "prompt": "Write what you hear.",
        "answer": ["We critique music videos."],
        "audioSrc": "/data/100.mp3",
    },
  ];

export default questions;