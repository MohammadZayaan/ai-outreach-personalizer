import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { lead } = body;

    const fakeMessage = `
Hi ${lead.name},

I came across your work at ${lead.company} and was impressed by your experience as a ${lead.role}.

I’d love to connect and explore potential opportunities to collaborate.

Best,
Zayaan
`;

    return NextResponse.json({
      message: fakeMessage,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate message",
      },
      {
        status: 500,
      }
    );
  }
}