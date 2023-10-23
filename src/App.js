import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonLabel="Cliccami!" />
        <ImageComponent imgSource="https://placedog.net/500" imgAlt="dogs" />
        <ButtonComponent buttonLabel="Clicca anche me!" />
        <ImageComponent imgSource="https://placedog.net/540" imgAlt="dogs" />
      </header>
    </div>
  );
}

export default App;
