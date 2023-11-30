import LoginButton from "@/components/Auth/LoginButton";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-2">
            <div className="text-3xl">Test Routes</div>
            <Link
                href="/checkIfLogged"
                className="text-3xl p-1 bg-slate-600"
            >
                checkIfLogged
            </Link>
            <div className="text-3xl">Test Components</div>
            {/* <Link
                href="/api/auth/signin"
                className="text-3xl p-1 bg-slate-600"
            >
                {" "}
                Sign in
            </Link> */}

            <Link
                href="/showLoginIfNotLogged"
                className="text-3xl p-1 bg-slate-600"
            >
                showLoginIfNotLogged
            </Link>
            <LoginButton />
        </main>
    );
}
