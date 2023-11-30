import CustomButton from "@/components/CustomButton";
import { getServerSession } from "next-auth/next";

export default async function CheckIfLogged() {
    const session = await getServerSession();

    return (
        <div className="h-screen">
            hello
            {session ? "logged" : "not logged"}
            {JSON.stringify(session)}
            <CustomButton page="/"/>
        </div>
    );
}
