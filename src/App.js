import "./App.css";
import babyNamesData from "./babyNamesData.json";

function App() {
  return (
    <div className="App">
      {babyNamesData
        .sort((a, b) => a.name - b.name)
        .map((value, index) => {
          return (
            <p key={index} className={value.sex}>
              {value.name}
            </p>
          );
        })}
    </div>
  );
}

export default App;
