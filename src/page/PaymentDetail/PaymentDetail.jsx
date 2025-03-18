import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import PaymentDetailForm from "./PaymentDetailForm";

const PaymentDetail = () => {
    return (
        <div className="px-20">
            <h1 className="text-3xl font-bold py-10">Payment Details</h1>
            {false ? 
                <Card>
                <CardHeader>
                    <CardTitle>
                        MB BANK
                    </CardTitle>
                    <CardDescription>
                        A/C No :
                        ***********4634
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center">
                        <p className="w-32">A/C Holder</p>
                        <p className="text-gray-400">Huu Duy</p>
                    </div>
                    <div className="flex items-center">
                        <p className="w-32">IFSC</p>
                        <p className="text-gray-400">YES000001</p>
                    </div>
                </CardContent>
                </Card> 
            :   <Dialog>
            <DialogTrigger>
                <Button className="py-6 bg-white text-black">Add payment detail</Button>
            </DialogTrigger>
            <DialogContent className="bg-black">
                <DialogHeader>
                    <DialogTitle>Payment Detail</DialogTitle>
                </DialogHeader>
                <PaymentDetailForm/>
            </DialogContent>
                </Dialog> 
            }
        </div>
    )
}

export default PaymentDetail