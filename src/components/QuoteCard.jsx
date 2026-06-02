function QuoteCard({ quote }) {
  return (
    <div
      style={{
        maxWidth: "600px",
        textAlign: "center",
      }}
    >
      <h2>{quote.text}</h2>

      <p
        style={{
          marginTop: "10px",
        }}
      >
        - {quote.author}
      </p>
    </div>
  );
}

export default QuoteCard;