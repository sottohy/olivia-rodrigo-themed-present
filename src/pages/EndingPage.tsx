import { useNavigate } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import "../styles/home.css";
export default function EndingPage() {
  const navigate = useNavigate();
  return (
    <main className="home-page">
      <div className="home-content">
        <h1>
          *YOU* are the spark in the dark
          <area shape="rect" coords="" href="" alt="" />
        </h1>
        <p className="eyebrow">
          have the happiest birthday love!! Thanks for always being amazing
          &lt;3
        </p>
        <button className="primary-button" onClick={() => navigate("/")}>
          START OVER
        </button>
      </div>
      <HeroImage />
    </main>
  );
}
