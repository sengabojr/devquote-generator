import { useState } from "react";
import quotes from "./data/quotes";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [darkMode, setDarkMode] = useState(false);

  const randomQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * quotes.length
    );

    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      className={`app ${darkMode ? "dark" : ""}`}
    >
      <h1>DevQuote Generator</h1>

      <QuoteCard quote={quote} />

      <div className="buttons">
        <button onClick={randomQuote}>
          New Quote
        </button>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;