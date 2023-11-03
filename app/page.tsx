import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-2">
            <Link href="/api/auth/signin"> Sign in</Link>
            <Link href="/checkiflogged" className="text-3xl p-1 bg-slate-600">
                checkiflogged
            </Link>
        </main>
    );
}
