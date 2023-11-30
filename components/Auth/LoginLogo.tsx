"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserAltSlash } from "react-icons/fa";
import { TbUserHexagon } from "react-icons/tb";

export default function LoginLogo() {
    const { data: session } = useSession();
    return (
        <>
            <button
                onClick={() => (session ? signOut() : signIn())}
                className="bg-secondary hover:bg-accent text-white p-3 rounded-lg shadow-lg text-xl "
            >
                {session ? <TbUserHexagon /> : <FaUserAltSlash />}
            </button>
        </>
    );
}
