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
    reflection: "In honor of your birthday, I really am so happy you were created and that you exist in this world. They should honestly make this a national holiday fr.",
  },
  {
    id: 2,
    song: "u + me",
    prompt:
      "But I got a feeling wounds are healing, talking on the phone \nI know everybody changes but I hope ____ __ _____",
    answer: ["that we dont", "that we don't"],
    reflection: "This one is pretty self explanatory but is perhaps the first lyric I had on the list. Our lives changed a lot during the past 4 years and so did our friendship. We had our good and bad moments but we always made it through. I hope that no matter what that change is, it always affects us in the best way.",
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
    reflection: "One of the things I admire most about you is your 'eternal optimism'. No matter how hard things get, you always manage to -eventually- find the light and make the best out of it. This lyric specifically reminnds me of you because it's a perfect example of  girl rage mixed with optimism.",
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
    reflection: "This one is more about me than it is you. You know I sometimes get too lost in my own world that I make my own bed and my friends suffer with me. Thanks for all the times I was avoidant and you were there for me. Thanks for always being there and always reaching out.",
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
