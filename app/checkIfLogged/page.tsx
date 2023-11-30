import CustomButton from "@/components/CustomButton";
import { getServerSession } from "next-auth/next";

export default async function CheckIfLogged() {
    const session = await getServerSession();

    return (
        <div className="flex w-full justify-center bg-black text-white">
            <div className="h-screen flex flex-col justify-center gap-3 w-[60%] items-center ">
                hello
                {session ? "logged" : "not logged"}
                {JSON.stringify(session)}
                <CustomButton page="/" />
            </div>
        </div>
    );
}
