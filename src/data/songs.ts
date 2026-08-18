export type SongQuestion = {
  id: number;
  song: string;
  prompt: string;
  answer: string[];
  reflection: string;
};
export const songs: SongQuestion[] = [
  {
    id: 1,
    song: "hope you're ok",
    prompt:
      "She was tired 'cause she was brought into a world \nWhere family was merely blood \nDoes she know ___ _____ _ __ ___ ___ _______",
    answer: [
      "how proud i am she was created",
      "how proud I am she was created",
      "how proud i am she was created?",
      "how proud I am she was created?",
    ],
    reflection: "kalam kbeer haktebo ba3den",
  },
  {
    id: 2,
    song: "u + me",
    prompt:
      "But I got a feeling wounds are healing, talking on the phone \nI know everybody changes but I hope ____ __ _____",
    answer: ["that we dont", "that we don't"],
    reflection: "kalam kbeer haktebo ba3den",
  },
  {
    id: 3,
    song: "all-american bitch",
    prompt:
      "I feel for your every little issue, I know just what you mean \nAnd I make light of the darkness \nI've got ___ __ __ _____________ ______",
    answer: [
      "sun in my motherfuckin pocket",
      "sun in my motherfucking pocket",
      "sun in my mother fucking pocket",
    ],
    reflection: "kalam kbeer haktebo ba3den",
  },
  {
    id: 4,
    song: "making the bed",
    prompt:
      "Gettin' drunk at a club with my fair-weather friends \n____ ____ ___ ___ ______ ___ ____ ___ ____",
    answer: [
      "Push away all the people who know me the best",
      "push away all the people who know me the best",
    ],
    reflection: "kalam kbeer haktebo ba3den",
  },
  {
    id: 5,
    song: "stupid song",
    prompt: "______ _ _____ __ ___ ____ and my clothes all caught aflame",
    answer: [
      "You're a spark in the dark",
      "you're a spark in the dark",
      "youre a spark in the dark",
    ],
    reflection: "",
  },
];
