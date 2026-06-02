function QuoteCard({ quote }) {
  return (
    <div className="max-w-xl text-center px-4">
      <h2 className="text-2xl font-semibold">
        {quote.text}
      </h2>

      <p className="mt-3 text-lg">
        — {quote.author}
      </p>
    </div>
  );
}

export default QuoteCard;