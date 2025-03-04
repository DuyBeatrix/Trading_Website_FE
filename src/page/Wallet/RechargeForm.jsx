import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const RechargeForm = () => {
    const [amount, setAmount] = React.useState('')
    const [paymentMethod, setPaymentMethod] = React.useState("STRIPE")

    const handlePaymentMathodChange = (e) => {
        setPaymentMethod(e)
    }
    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSubmit = () => {
        console.log(amount, paymentMethod)
    }

    return (
        <div className="pt-10 space-y-5">
            <div>
                <h1 className="pb-1">Enter Amount</h1>
                <Input 
                    onChange = {handleChange}
                    value = {amount}
                    className="px-7 text-lg"
                    placeholder = "Enter your money"
                />
            </div>
            <div>
                <h1 className="pb-1">Select payment method</h1>
                <RadioGroup
                    onValueChange = {handlePaymentMathodChange}
                    className="flex"
                    defaultValue = "STRIPE"
                >
                    <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
                        <RadioGroupItem
                            icon = {DotFilledIcon}
                            className="h-6 w-6 bg-black"
                            value = "STRIPE"
                            id = "r1"
                        />
                        <Label htmlFor="r1" className="">
                            <div className="bg-white rounded-md px-5 py-2 w-32 h-12">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png"/>
                            </div>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
                        <RadioGroupItem
                            icon = {DotFilledIcon}
                            className="h-6 w-6 bg-black"
                            value = "QR"
                            id = "r2"
                        />
                        <div className="rounded-md px-5 py-2 w-32">
                            <Label htmlFor="r2">QR CODE</Label>
                        </div>
                    </div>
                </RadioGroup>
            </div>
            <Button onClick={handleSubmit} className="w-full py-7 bg-white text-black text-xl">
                Submit
            </Button>
        </div>
    )
}

export default RechargeForm