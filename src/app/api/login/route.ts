// import { createSession } from '@/lib/session/session';
//import { LoginSchema } from '@/lib/validation/loginSchema';
import { NextResponse } from 'next/server';

const testUser = {
  id: "1",
  email: "admin@gmail.com",
  password: "12345678",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received body:', body);

    const { email, password} = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing credentials' }, { status: 400 });
    }

    if (email !== testUser.email || password !== testUser.password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    if (email == testUser.email && password == testUser.password) {
      return NextResponse.json({ id: testUser.id });
    }


    const res = NextResponse.json({ message: 'Login successful' });

    

    return res;
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }

}
