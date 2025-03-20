import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import AccountVerificationForm from "./AccountVerificationForm";

const Profile = () => {
    return (
        <div className="flex flex-col items-center mb-5 bg-gray-900 min-h-screen">
            <div className="pt-10 w-full lg:w-[60%]">
                <Card>
                    <CardHeader className="pb-9">
                        <CardTitle>Your information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="lg:flex gap-32">
                            <div className="space-y-7">
                                <div className="flex">
                                    <p className="w-[9rem]">Email : </p>
                                    <p className="text-gray-500">huuduy@gmail.com</p>
                                </div>
                                <div className="flex">
                                    <p className="w-[9rem]">Full name : </p>
                                    <p className="text-gray-500">Huu Duy</p>
                                </div>
                                <div className="flex">
                                    <p className="w-[9rem]">Date of birth : </p>
                                    <p className="text-gray-500">16/12/2003</p>
                                </div>
                                <div className="flex">
                                    <p className="w-[9rem]">Nationality : </p>
                                    <p className="text-gray-500">16/12/2003</p>
                                </div>
                            </div>
                            <div className="space-y-7">
                                <div className="flex">
                                    <p className="w-[9rem]">Email : </p>
                                    <p className="text-gray-500">huuduy@gmail.com</p>
                                </div>
                                <div className="flex">
                                    <p className="w-[9rem]">Full name : </p>
                                    <p className="text-gray-500">Huu Duy</p>
                                </div>
                                <div className="flex">
                                    <p className="w-[9rem]">Date of birth : </p>
                                    <p className="text-gray-500">16/12/2003</p>
                                </div>
                                <div className="flex">
                                    <p className="w-[9rem]">Nationality : </p>
                                    <p className="text-gray-500">16/12/2003</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="mt-6">
                    <Card className="w-full">
                        <CardHeader className="pb-7">
                            <div className="flex items-center gap-3">
                                <CardTitle>Second Step Verification</CardTitle>
                                { true ? <Badge className="space-x-2 text-white bg-green-600">
                                    <VerifiedIcon /> <span>{"Enabled"}</span>
                                </Badge> : <Badge className="bg-orange-500">Disabled</Badge>}
                            </div>
                        </CardHeader>
                        <CardContent>
                        <div>
                            <Dialog>
                                <DialogTrigger>
                                    <Button className="bg-white text-gray-900">Enabled Two Step Verification</Button>
                                </DialogTrigger>
                                <DialogContent className="bg-black text-white">
                                    <DialogHeader className="">
                                        <DialogTitle className="px-10 pt-5 text-center">
                                            Verify  your account
                                        </DialogTitle>
                                    </DialogHeader>
                                    <AccountVerificationForm />
                                </DialogContent>
                            </Dialog>
                        </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Profile