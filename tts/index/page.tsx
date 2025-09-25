import AuthLayout from "@/libs/core/components/Layout/Credential";
import Link from "next/link"

export default function IndexPage() {
    return (
        <AuthLayout title="" imgSrc="/assets/candidate-banner.png">
            <div className="flex flex-col justify-center items-center">
                <Link
                    href="/login"
                    className="w-full text-center bg-[#2962FF] text-white rounded-md py-2 my-2 block hover:bg-blue-700 transition"
                >
                    Đăng Nhập
                </Link>
                <Link
                    href="/Signup"
                    className="w-full text-center border-1 border-[#2962FF] text-[#2962FF] rounded-md py-2 block hover:bg-gray-200 transition"
                >
                    Đăng ký
                </Link>
            </div>

        </AuthLayout>
    )
}