import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  if (email === "admin@gmail.com" && password === "123456") {
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

  
    response.cookies.set("auth", "true", {
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, 
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}

