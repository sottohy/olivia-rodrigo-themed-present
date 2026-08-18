import { useState, useEffect } from "react";
type Props = {
  trackNumber: number;
  song: string;
  prompt: string;
  answer: string[];
  reflection: string;
  onNext?: () => void;
  isFinal?: boolean;
  onFinal?: () => void;
};
export default function LyricCard({
  trackNumber,
  song,
  prompt,
  answer,
  reflection,
  onNext,
  isFinal,
  onFinal,
}: Props) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [songRevealed, setSongRevealed] = useState(false);
  const sarcasmMessages = [
    "ummm... no.",
    "close, but not really.",
    "not even close.",
    "maybe in another life.",
    "and you call yourself a fan?",
    "if only olivia was that good.",
  ];
  const getRandomSarcasm = () =>
    sarcasmMessages[Math.floor(Math.random() * sarcasmMessages.length)];
  useEffect(() => {
    setValue("");
    setStatus("idle");
    setSongRevealed(false);
  }, [trackNumber]);
  const check = () =>
    setStatus(
      answer.some((a) => value.trim().toLowerCase() === a.trim().toLowerCase())
        ? "success"
        : "error",
    );
  const encryptedSong = song.replace(/./g, "*");
  return (
    <article className="lyric-card">
      <div className="lyric-card-top">
        <span>TRACK {String(trackNumber).padStart(2, "0")} out of 5</span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>{songRevealed ? song : encryptedSong}</span>
          <button
            onClick={() => setSongRevealed(!songRevealed)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              padding: "0 4px",
            }}
            title="reveal song name"
          >
            💡
          </button>
        </div>
      </div>
      <p className="lyric-prompt">{prompt}</p>
      <input
        className="lyric-input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setStatus("idle");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") check();
        }}
        placeholder="fill in the blank..."
      />
      <button className="primary-button" onClick={check}>
        CHECK
      </button>
      {status === "success" && (
        <div className="answer-feedback success">
          <p className="feedback-title">
            {isFinal ? "yes, but with a slight modification." : "you got it!"}
          </p>
          <p>{reflection}</p>
          <button
            className="primary-button"
            onClick={isFinal ? onFinal : onNext}
            style={{ marginTop: "16px" }}
          >
            {isFinal ? "click to see why" : "NEXT"}
          </button>
        </div>
      )}
      {status === "error" && (
        <div className="answer-feedback error">
          <p>{getRandomSarcasm()}</p>
        </div>
      )}
    </article>
  );
}
