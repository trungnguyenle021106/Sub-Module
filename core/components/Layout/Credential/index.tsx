import React from "react";
import Image from "next/image"
import { Typography } from "@mui/material";
import '@fontsource/roboto/400.css';

interface AuthLayoutProps {
    title: string;
    imgSrc: string;
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, imgSrc, children }) => {
    return (
        <div className="min-h-screen grid grid-cols-10">

            {/* Left side: Content */}
            <div className="hidden xl:flex col-span-6 flex items-center justify-center">
                <Image src={imgSrc} width={1096} height={1032} alt="Ảnh nền" />
            </div>

            {/* Right side: Content */}
            <div className="col-span-10 xl:col-span-4 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 space-y-6 shadow-lg">

                    {/* Logo */}
                    <div className="flex justify-center space-y-6">
                        <Image src="/assets/logo.png" width={148} height={148} alt="Logo ĐCSVN" />
                    </div>

                    {/* Tiêu đề của website */}
                    <h1 className="text-xl font-bold text-center">Phần Mềm Quản lý - Tạo Lập Cơ Sở Dữ&nbsp;Liệu An Toàn Vệ Sinh Lao Động</h1>
                    {/* <Typography variant="h6" className="font-extra-bold text-center">Phần Mềm Quản lý - Tạo Lập Cơ Sở Dữ Liệu An Toàn Vệ Sinh Lao Động</Typography> */}

                    {/* Tên chức của chức năng */}
                    <h2 className="mx-2 my-0 font-bold text-[#2962FF]">{title}</h2>

                    {/* FromData: nhập thông tin dữ liệu */}
                    <div>{children}</div>

                </div>
            </div>
        </div>
    )
}

export default AuthLayout;