import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot, } from "@/components/ui/input-otp"

const AccountVerificationForm = () => 
{
    const [value, setValue] = useState("")    
    const handleSubmit = () => {
        console.log("Submit clicked " + value)
    }

    return (
        <div className="flex justify-center">
            <div className="space-y-5 mt-10 w-full">
                <div className="flex justify-between items-center">
                    <p>Email : </p>
                    <p>huuduy@gmail.com</p>
                    <Dialog>
                        <DialogTrigger>
                            <Button className="bg-white text-black">Send OTP</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="px-10 pt-5 text-center">Enter OTP</DialogTitle>
                            </DialogHeader>
                            <div className="py-5 flex gap-10 justify-center items-center">
                                <InputOTP value={value} onChange={(value) => setValue(value)} maxLength={6}> 
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                            <DialogClose>
                                <Button onClick={()=>handleSubmit(value)} className="w-[10rem]">Submit</Button>
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default AccountVerificationForm