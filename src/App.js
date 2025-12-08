import Slider from "./components/Slider";
import "./App.css"
function App() {
  const items = [ "Task","3D Slider", "Video Style","Task","3D Slider", "Video Style"];

  return (
    <div>
      <Slider items={items} />
    </div>
  );
}

export default App;