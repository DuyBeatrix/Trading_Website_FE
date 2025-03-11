import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const MoneyTransferForm = () => {
    const [formData, setFormData] = React.useState({ amount : '', walletId: '', purpose: ''})
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <div className="pt-10 space-y-5">
            <div>
                <h1 className="pb-1">Enter amount</h1>
                <Input name="amount" value={formData.amount} className="py-7"
                    placeholder="....." onChange={handleChange}
                />
            </div>
            <div>
                <h1 className="pb-1">Wallet Id</h1>
                <Input name="walletId" value={formData.walletId} className="py-7"
                    placeholder="#ASD453S" onChange={handleChange}
                />
            </div>
            <div>
                <h1 className="pb-1">Purpose</h1>
                <Input name="purpose" value={formData.purpose} className="py-7"
                    placeholder="Enter the reason" onChange={handleChange}
                />
            </div>
            <DialogClose>
                <Button
                    onClick={handleSubmit}
                    variant=""
                    className="w-full py-7 text-xl bg-white text-black"
                >
                    Send
                </Button>
            </DialogClose>
        </div>
    )
}

export default MoneyTransferForm