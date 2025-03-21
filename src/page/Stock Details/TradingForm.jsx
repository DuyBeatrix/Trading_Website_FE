import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import React, { useState } from "react";

const TradingForm = () => {
    const [orderType, setOrderType] = useState("BUY")
    const handeChange = () => {
    }

    return (
        <div className="space-y-10 p-5">
            <div>
                <div className="flex gap-4 items-center justify-between">
                    <Input className="py-7 focus:outline-none" placeholder = "Enter amount" onChange={handeChange}
                    type = "number" name = "amount"/>
                    <div>
                        <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">4563</p>
                    </div>
                </div>
                {true && <h1 className="text-red-600 text-center pt-4">Insufficient wallet balance to buy</h1>}
            </div>
            <div className="flex gap-5 items-center">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"/>
                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p>BTC</p>
                            <DotIcon className="text-gray-400"/>
                            <p className="text-gray-400">Bitcoin</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-bold">$6554</p>
                            <p className="text-red-600">
                            <span>-1319049822</span>
                            <span>(-0.29803%)</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p>Order Type</p>
                <p>Market Order</p>
            </div>
            <div className="flex items-center justify-between">
                <p>{ orderType == "BUY" ? "Available Caqse" : "Available quantity"}</p>
                <p>{orderType == "BUY" ? 9000 : 23.8}</p>
            </div>
            <div>
                <Button className="bg-white text-black w-full py-6">{orderType}</Button>
                <Button onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")} className="w-full mt-5">
                    {orderType == "BUY" ? "OR SELL" : "OR BUY"}
                </Button>
            </div>
        </div>
    )
}

export default TradingForm