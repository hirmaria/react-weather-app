import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="mt-5">
          <a href="https://github.com/hirmaria/react-weather-app">
            Open-source code
          </a>
          , by
          <a href="https://github.com/hirmaria"> Maria Hirman</a>
        </footer>
      </div>
    </div>
  );
}
