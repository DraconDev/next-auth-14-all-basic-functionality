import Link from "next/link";

type Props = {
    page: string;
};

const CustomButton = ({ page }: Props) => {
    return (
        <Link
            href={page}
            className="text-3xl p-1 bg-slate-600"
        >
            Back
        </Link>
    );
};

export default CustomButton;
