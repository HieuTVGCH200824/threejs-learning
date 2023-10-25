import Potion from "./components/Potion";
import Shiba from "./components/Shiba";
import "./App.css";

export default function App() {
  return (
    <div className="overflow-hidden max-w-screen ">
      <div className="flex flex-col items-center gap-6">
        <Potion />
        <Shiba />
      </div>
    </div>
  );
}
