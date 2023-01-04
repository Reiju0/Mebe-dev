import { useState, signIn, signOut, useSession } from "next-auth/react";

export default function Components() {
    const {data : session } = useSession()
    if (session) {
        return (
            <>
                Sign in as {session.user.email} <br />
                <button onClick={()=> signOut()}> Sign Out </button>
            </>
        )
    }
  return (
    <>
        Not sign in <br />
        <button onClick={() => signIn()}> Sign In </button>
    </>
  )
}
