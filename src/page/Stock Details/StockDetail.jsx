import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { DotIcon } from "lucide-react";
import React from "react";
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";

const StockDetail = () => {
    return  (
        <div className="p-5 mt-5">
            <div className="flex justify-between">
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
                <div className="items-center gap-4 flex">
                    <Button className="bg-white text-black">
                        { true ? (<BookmarkFilledIcon className="h-6 w-6"/>) : (<BookmarkIcon className="h-6 w-6"/>) }
                    </Button>
                    <Dialog>
                        <DialogTrigger>
                        <Button size="lg" className="bg-white text-black">Trade</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>How much do you want to spend?</DialogTitle>
                            </DialogHeader>
                            <TradingForm/>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="mt-14">
                <StockChart/>
            </div>
        </div>
    )
}

export default StockDetail