"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function LoginButton() {
    const { data: session } = useSession();
    return (
        <>
            <button
                onClick={() => (session ? signOut() : signIn())}
                className="bg-secondary p-3 text-white "
            >
                {session ? "Sign out" : "Sign in"}
            </button>
        </>
    );
}
