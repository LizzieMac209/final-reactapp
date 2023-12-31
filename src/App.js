import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Diego" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://lizziemacfarlane-frntenddvlprprtflio.netlify.app/"
            target="_blank"
          >
            Lizzie Macfarlane
          </a>{" "}
          & is 🪷{" "}
          <a
            href="https://github.com/LizzieMac209/final-reactapp"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
