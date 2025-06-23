'use server'
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
    const result2 = await fetch("https://nawwaftestapi.free.beeceptor.com/api/login")
    

    if (!result.success) {
     return NextResponse.json({
      errors: result.error.flatten().fieldErrors,
    }, { status: 400 });
    }

    const { email, password} = body;
    
    if ((email == testUser.email && password == testUser.password) || result2.status == 200)  {
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
