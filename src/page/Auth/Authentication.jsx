import React from "react";
import "./Authentication.css"
import ForgotPasswordForm from "./ForgotPasswordForm"
import RegisterForm from "./RegisterForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";

const Authentication = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className="h-screen relative authContainer">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[030712] bg-opacity-50">
                <div className="bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 box flex flex-col justify-center items-center h-[35rem] w-[30rem] z-50 bg-opacity-30 shadow-xl  backdrop-blur-xl border border-white/20 bg-black/85 px-10">
                    <h1 className="text-4xl font-bold pb-9">Wellcom to CoinVerse</h1>
                    { 
                        location.pathname == "/register" ? 
                            <section className="w-full">
                                <RegisterForm/>
                                <div className="flex items-center justify-center">
                                    <span>Have already account ?</span>
                                    <Button onClick={() => navigate("/login")} variant="ghost">
                                        Log In
                                    </Button>
                                </div>
                            </section> : 
                        location.pathname == "/forgot-password" ? 
                            <section className="w-full">
                                <ForgotPasswordForm/>
                                <div className="flex items-center justify-center">
                                    <span>Back to login ?</span>
                                    <Button onClick={() => navigate("/login")} variant="ghost">
                                        Login
                                    </Button>
                                </div>
                            </section> : 
                        <section className="w-full">
                            <LoginForm/>
                            <div className="flex items-center justify-center">
                                <span>Don't already account ?</span>
                                <Button onClick={() => navigate("/register")} variant="ghost">
                                    Register
                                </Button>
                            </div>
                            <div className="mt-10">
                                <Button onClick={() => navigate("/forgot-password")} variant="outline" className="w-full py-5">
                                    Forgot Password
                                </Button>
                            </div>
                        </section>    
                    }
                </div>
            </div>
        </div>
    )
}

export default Authentication