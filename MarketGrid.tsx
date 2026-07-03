export default function MarketGrid() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold">
        Trending Prediction Markets
      </h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6">
          BTC above $250K
        </div>

        <div className="border rounded-xl p-6">
          Solana ETF Approval
        </div>

        <div className="border rounded-xl p-6">
          US Election
        </div>
      </div>
    </section>
  );
}
