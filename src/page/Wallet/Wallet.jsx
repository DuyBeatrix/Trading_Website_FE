import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import { CopyIcon, DollarSign, UploadIcon, WalletIcon } from "lucide-react";
import React from "react";
import RechargeForm from "./RechargeForm";
import { Input } from "@/components/ui/input"
import WithdrawalForm from "./WithdrawalForm";
import MoneyTransferForm from "./MoneyTransferForm";

const Wallet = () => {
    return (
        <div className="flex flex-col items-center bg-gray-900 min-h-screen">
            <div className="pt-10 w-full lg:w-[60%]">
                <Card>
                    <CardHeader className="pb-9">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-5"> 
                                <WalletIcon size={30}/>
                                <div>
                                    <CardTitle className="text-2xl">My Wallet</CardTitle>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">#4754E</p>
                                        <CopyIcon size={10} className="cursor-pointer hover:text-slate-300"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-gray-400"/>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <DollarSign/>
                            <span className="text-2xl font-semibold">
                                20000
                            </span>
                        </div>
                        <div className="flex gap-7 mt-5">
                            <Dialog>
                                <DialogTrigger>
                                    <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md border">
                                        <UploadIcon/>
                                        <span className="text-sm mt-2">Add money</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-black">
                                    <DialogHeader>
                                    
                                    </DialogHeader>
                                    <RechargeForm/>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger>
                                    <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md border">
                                        <UploadIcon/>
                                        <span className="text-sm mt-2">Withdrawal</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    
                                    </DialogHeader>
                                    <WithdrawalForm/>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger>
                                    <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md border">
                                        <UploadIcon/>
                                        <span className="text-sm mt-2">Transfer</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    
                                    </DialogHeader>
                                    <MoneyTransferForm/>
                                </DialogContent>
                            </Dialog>
                        </div>  
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Wallet