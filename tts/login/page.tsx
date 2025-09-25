'use client';

import AuthLayout from "@/libs/core/components/Layout/Credential/index";
import React from "react";
import Form from "next/form";
import Link from "next/link";
import { Checkbox, FormControl, FormHelperText, FormControlLabel, InputAdornment } from "@mui/material";
import { InputLabel, Input, OutlinedInput } from "@mui/material";
import { Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { userAgent } from "next/server";

export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <AuthLayout title="Đăng nhập" imgSrc="/assets/candidate-banner.png">
            <Form action="/">
                <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel htmlFor="username">Tên đăng nhập</InputLabel>
                    <OutlinedInput
                        id="username"
                        label="Tên đăng nhập"
                        placeholder="Nhập tên đăng nhập"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >

                    </OutlinedInput>
                </FormControl>

                <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel htmlFor="password">Mật Khẩu</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >

                    </OutlinedInput>
                </FormControl>

                <div className="flex justify-between items-center my-2">
                    {/* Ghi nhớ đăng nhập */}
                    <div className="">
                        <FormControlLabel control={<Checkbox />} label="Ghi nhớ đăng nhập" className="font-bold"></FormControlLabel>
                    </div>

                    {/* Quên mật khẩu */}
                    <div className="">
                        <Link href="/forget" className="font-bold text-[#2962FF] hover:underline">
                            Quên mật khẩu?
                        </Link>
                    </div>
                </div>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#2962FF",
                        paddingY: 1,
                        mt: 2,
                        "&:hover": {
                            backgroundColor: "#0039CB",
                        },
                    }}
                >
                    Đăng nhập
                </Button>
            </Form>
            <Link href="/" className="mt-2 flex justify-center text-[#2962FF] hover:underline shadow-2xl">
                Trở về trang chủ
            </Link>

        </AuthLayout>
    )
}