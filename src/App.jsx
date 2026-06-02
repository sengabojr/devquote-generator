import { useState } from "react";
import quotes from "./data/quotes";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * quotes.length
    );

    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <h1>DevQuote Generator</h1>

      <QuoteCard quote={quote} />

      <button onClick={randomQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;