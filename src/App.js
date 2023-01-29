import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer className="mt-5">
          This project was coded by
          <a href="https://github.com/hirmaria"> Maria Hirman</a>{" "}
          <span>and is open-source code on</span>{" "}
          <a href="https://github.com/hirmaria/react-weather-app">GitHub</a>
          <span>and hosted on</span>
        </footer>
      </div>
    </div>
  );
}
