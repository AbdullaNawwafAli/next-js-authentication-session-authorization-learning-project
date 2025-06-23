"use server";
import { redirect } from "next/navigation";
import { deleteSession, createSession } from "@/lib/session/session";
import z from "zod";

const LoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

// type LoginSchemaType = z.infer<typeof LoginSchema>;

const testUser = {
  id: "1",
  email: "admin@gmail.com",
  password: "12345678",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {
  const emailInput = String(formData.get("email") || "").trim();
  const passwordInput = String(formData.get("password") || "").trim();

  const result = LoginSchema.safeParse({ email: emailInput, password: passwordInput });

  //const result2 = await fetch("https://nawwaftestapi.free.beeceptor.com/api/login/")
  console.log(result);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(testUser.id);

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
