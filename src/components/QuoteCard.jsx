function QuoteCard({ quote }) {
  return (
    <div className="max-w-xl text-center px-6">
      <h2 className="text-2xl font-semibold leading-relaxed">
        "{quote.text}"
      </h2>

      <p className="mt-4 text-lg opacity-80">
        — {quote.author}
      </p>
    </div>
  );
}

export default QuoteCard;