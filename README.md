# Olivia Rodrigo Themed Present

Interactive Olivia Rodrigo-themed present with a personalized lyric completion game.

## Features

- **Lyric Completion Game**: Players complete missing lyrics from personalized song selections
- **Encrypted Song Names**: Song titles are hidden by default with a hint button (💡) to reveal them
- **Multiple Correct Answers**: Support for variant answers (e.g., "we don't" and "we dont")
- **Sarcastic Feedback**: Random sarcastic error messages when answers are incorrect
- **Personal Reflections**: Each song includes a custom reflection message
- **Special Ending Page**: The final song has a unique message and routes to a birthday message page
- **Responsive UI**: Clean, modern interface with smooth transitions

## Project Structure

```
src/
├── pages/
│   ├── HomePage.tsx        # Landing/start page
│   ├── GamePage.tsx        # Main game interface
│   └── EndingPage.tsx      # Birthday message page
├── components/
│   ├── LyricCard.tsx       # Individual song question component
│   └── HeroImage.tsx       # Hero image display
├── data/
│   └── songs.ts            # Song data and questions
└── styles/
    ├── global.css
    ├── home.css
    └── game.css
```

## Setup & Run

```bash
npm install
npm run dev
```

## Adding Questions

Edit `src/data/songs.ts` to add or modify song questions:

```typescript
export const songs: SongQuestion[] = [
  {
    id: 1,
    song: "song name",
    prompt: "First line\nSecond line\nThird line",
    answer: ["correct answer 1", "correct answer 2"],
    reflection: "Personal message about why this song was chosen",
  },
];
```

### Song Question Format

- `id`: Unique track number
- `song`: Song title (will be encrypted in game)
- `prompt`: Lyric prompt (supports multi-line with `\n`)
- `answer`: Array of acceptable answers (case-insensitive)
- `reflection`: Personal message revealed on correct answer

## Notes

- Maximum of 5 songs supported (configurable in GamePage)
- The final song (track 5) triggers a special ending page
- Song names are encrypted as asterisks by default
- Players can reveal song names using the hint button
