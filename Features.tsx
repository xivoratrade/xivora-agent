const features = [
  "Real-Time Token Scanner",
  "AI Trading Bots",
  "No-Code Strategy Builder",
  "Portfolio Dashboard",
  "Risk Management",
  "Solana Native"
];

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-bold mb-12">
        Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item) => (
          <div
            key={item}
            className="border rounded-xl p-6"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
