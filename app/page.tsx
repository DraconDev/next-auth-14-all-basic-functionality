import LoginButton from "@/components/Auth/LoginButton";
import LoginLogo from "@/components/Auth/LoginLogo";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-2 bg-primary text-white">
            <div className="text-3xl w-full border-b-2 border-red-700 border border-0 flex justify-center">
                Test Routes
            </div>
            <Link
                href="/checkIfLogged"
                className="text-3xl p-3 rounded bg-secondary"
            >
                show login info
            </Link>
            <Link
                href="/showLoginIfNotLogged"
                className="text-3xl p-3 rounded bg-secondary"
            >
                page: show login if not logged
            </Link>
            <div className="text-3xl w-full border-b-2 border-red-700 border border-0 flex justify-center">
                Test Components
            </div>
            <LoginLogo />
            <LoginButton />
        </main>
    );
}
