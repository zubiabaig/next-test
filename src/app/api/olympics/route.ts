import { NextRequest, NextResponse } from "next/server";

export default function GET(request: NextRequest){
  return NextResponse.json(
    [
      {
        id: "1",
        name: "Golf",
        about: "Golf is a sport where the idea is to hit a ball with a club from the tee into the hole in as few strokes as possible.",
        rules: "The essential rule of golf is, for each stroke, the player to play the ball as it lies, and the course as they find it."
      },
    ],
    {
      headers: { "Content-Type": "application/json"}
    }
  )
}
