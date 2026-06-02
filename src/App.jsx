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
      className={`min-h-screen flex flex-col items-center justify-center gap-6 transition-all ${
        darkMode
          ? "bg-zinc-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold">
        DevQuote Generator
      </h1>

      <QuoteCard quote={quote} />

      <div className="flex gap-4">
        <button
          onClick={randomQuote}
          className="px-4 py-2 rounded-lg border"
        >
          New Quote
        </button>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="px-4 py-2 rounded-lg border"
        >
          {darkMode
            ? "Light Mode"
            : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;