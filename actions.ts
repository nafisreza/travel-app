"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "john";
let isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

//   if (!session.isLoggedIn) {
//     session.isLoggedIn = defaultSession.isLoggedIn;
//   }

  // CHECK THE USER IN THE DB
  session.isBlocked = isBlocked;

  return session;
};

export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  // CHECK USER IN THE DB
  // const user = await db.getUser({username,password})

  if (formUsername !== username) {
    return { error: "Wrong Credentials!" };
  }

  session.userId = "1";
  session.username = formUsername;
//   session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

