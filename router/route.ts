import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    route: "Best Execution",
    executionTime: "145ms",
    liquiditySource: "Optimal"
  });
}
