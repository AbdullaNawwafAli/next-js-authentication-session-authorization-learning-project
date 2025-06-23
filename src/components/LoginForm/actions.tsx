"use server";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session/session";
import  { LoginSchema} from "@/lib/validation/loginSchema"

// type LoginSchemaType = z.infer<typeof LoginSchema>;

// const testUser = {
//   id: "1",
//   email: "admin@gmail.com",
//   password: "12345678",
// };


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {

  const emailInput = String(formData.get("email") || "").trim();
  const passwordInput = String(formData.get("password") || "").trim();

  const result = LoginSchema.safeParse({ email: emailInput, password: passwordInput });

  //const result2 = await fetch("https://nawwaftestapi.free.beeceptor.com/api/login/")
  //console.log(result);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: emailInput, password: passwordInput }),
    credentials: 'include',
  });

  

 // console.log('Sending:', { email: emailInput, password: passwordInput });

  if (res.ok) {
    const data = await res.json();
    await createSession(data.id);
    redirect('/dashboard');
  }
  if (res.status === 401) {
    return {errors: {
        email: ["Invalid email or password"],
        password: [" "],
      },
    }
  }

  if (!res.ok) {
    return {
      ok: false,
      errors: {
        email: 'Something went wrong',
        password: 'Something went wrong',
      },
    };
  }


  // 
  // return {
  //   ok: false,
  //   message: data.message || 'Login failed',
// }
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
