import { useState } from "react";
import quotes from "./data/quotes";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const randomQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * quotes.length
    );

    setQuote(quotes[randomIndex]);
  };

  const copyQuote = async () => {
    const text = `"${quote.text}" - ${quote.author}`;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
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

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={randomQuote}
          className="px-4 py-2 rounded-lg border hover:scale-105 transition"
        >
          New Quote
        </button>

        <button
          onClick={copyQuote}
          className="px-4 py-2 rounded-lg border hover:scale-105 transition"
        >
          Copy Quote
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg border hover:scale-105 transition"
        >
          {darkMode
            ? "Light Mode"
            : "Dark Mode"}
        </button>
      </div>

      {copied && (
        <p className="text-green-500 font-medium">
          Quote copied to clipboard!
        </p>
      )}
    </div>
  );
}

export default App;