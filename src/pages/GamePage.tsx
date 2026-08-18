import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LyricCard from "../components/LyricCard";
import { songs } from "../data/songs";
import "../styles/game.css";
export default function GamePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const track = songs[currentIndex];
  const handleNext = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleFinal = () => {
    navigate("/ending");
  };
  return (
    <main className="game-page">
      <header className="game-header">
        <h1>finish the lyric.</h1>
        <p className="game-intro">
          Complete the missing words, then find out why I picked this lyric for
          you.
        </p>
      </header>
      <LyricCard
        trackNumber={track.id}
        song={track.song}
        prompt={track.prompt}
        answer={track.answer}
        reflection={track.reflection}
        onNext={handleNext}
        isFinal={currentIndex === songs.length - 1}
        onFinal={handleFinal}
      />
    </main>
  );
}
