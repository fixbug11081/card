import ConfettiCard from "./ConfettiCard";

export default function App() {
  return (
    <div className="container">
      <ConfettiCard
        frontContent={<h3>Click to reveal</h3>}
        backContent={<p>Surprise!</p>}
      />
    </div>
  );
}
