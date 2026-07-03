import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      market: "BTC > $250K",
      probability: "64%",
      volume: "$18.2M"
    },
    {
      market: "SOL ETF",
      probability: "57%",
      volume: "$6.8M"
    }
  ]);
}
