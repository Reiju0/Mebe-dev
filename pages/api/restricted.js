import autoprefixer from "autoprefixer";
import { unstable_getServerSession } from "next-auth/react";
import { AuthOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content: "Sign in completed!",
    });
  } else {
    res.send({
      error: "You must signed in",
    });
  }
};
