// import { createSession } from '@/lib/session/session';
//import { LoginSchema } from '@/lib/validation/loginSchema';
import { LoginSchema } from '@/lib/validation/loginSchema';
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

    const result = LoginSchema.safeParse(body)

    if (!result.success) {
     return NextResponse.json({
      errors: result.error.flatten().fieldErrors,
    }, { status: 400 });
    }

    const { email, password} = body;
    
    if (email == testUser.email && password == testUser.password) {
      return NextResponse.json({ id: testUser.id });
    }
    else {
      return NextResponse.json({errors: {
        email: ["Invalid email or password"],
      }}, {status: 401})
    }

  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }

}
