import { useNavigate } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import "../styles/home.css";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="home-page">
      <div className="home-content">
        <p className="eyebrow">
          Welcome to a very personalized olivia rodrigo experience!
        </p>
        <p className="eyebrow">
          Over the next few minutes (or hours, depending on how well you know
          Olivia), you will be asked to complete a series of lyrics, handpicked
          by me specifically for you.
        </p>
        <p className="eyebrow">
          Complete each track, and once you get it right, you'll find out
          exactly why I chose it.
        </p>
        <h1>ready for it?</h1>
        <button className="primary-button" onClick={() => navigate("/game")}>
          LET'S GO
        </button>
      </div>
      <HeroImage />
    </main>
  );
}
