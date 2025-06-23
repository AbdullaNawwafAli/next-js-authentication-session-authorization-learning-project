import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username === 'admin' && password === 'password123') {
    return NextResponse.json({ message: 'Login successful' });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
