import { getServerSession } from "next-auth/next";
import { useRouter } from "next/navigation";

export default async function CheckIfLogged() {
    const session = await getServerSession();

    return (
        <div className="h-screen">
            hello
            {session ? "logged" : "not logged"}
            {JSON.stringify(session)}
        </div>
    );
}
