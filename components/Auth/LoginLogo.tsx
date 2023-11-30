"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { TbUserHexagon } from "react-icons/tb";
import { FaUserAltSlash } from "react-icons/fa";

export default function LoginLogo() {
    const { data: session } = useSession();
    return (
        <>
            <button
                onClick={() => (session ? signOut() : signIn())}
                className="bg-secondary hover:bg-accent text-white p-3 rounded-lg shadow-lg text-xl w-[110px]"
            >
                {session ? <FaUserAltSlash /> : <TbUserHexagon />}
            </button>
        </>
    );
}
