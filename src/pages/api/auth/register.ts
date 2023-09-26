import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);

  /* Get form data */
  const requestBody = await request.text();
  const res = JSON.parse(requestBody);
  const email = res.data.email;
  const password = res.data.password;

  if (!email || !password) {
    return new Response(JSON.stringify({
      error: "Missing form data"
    }));
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password,
    });
    return new Response(JSON.stringify({
      message: "User Created!",
    }));
  } catch (error: any) {
    console.log("error is:", error)
    return new Response(JSON.stringify({
      error: "Something went wrong : " + error.errorInfo.message
    }));
  }
};