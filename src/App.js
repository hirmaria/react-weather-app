import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer className="mt-2">
          This project was coded by{" "}
          <a
            href="https://github.com/hirmaria"
            target="_blank"
            rel="noreferrer"
          >
            Maria Hirman
          </a>{" "}
          <span>and is open-source code on</span>{" "}
          <a
            href="https://github.com/hirmaria/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          <span>and hosted on</span>{" "}
          <a
            href="https://calm-dragon-6c2e6a.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
