import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Activity = () => {
    return (
        <div className="p-5 lg:px-20 bg-gray-900">
            <h1 className="font-bold text-3xl pb-5">ACTIVITY</h1>
            <Table className="">
                <TableHeader>
                    <TableRow className="border-b border-gray-800">
                        <TableHead className="w-[100px] py-5">DATE TIME</TableHead>
                        <TableHead>TRENDING</TableHead>
                        <TableHead>BUY PRICE</TableHead>
                        <TableHead>SELL PRICE</TableHead>
                        <TableHead>ORDER TYPE</TableHead>
                        <TableHead className="text-right">VALUE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => 
                        <TableRow key={index} className="border-b border-gray-800">
                            <TableCell>
                                <p>04/04/2025</p>
                                <p>12:39:32</p>
                            </TableCell>
                            <TableCell className="font-medium">
                                <Avatar>
                                    <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"></AvatarImage>
                                    <span>Bitcoin</span>
                                </Avatar>
                            </TableCell>
                            <TableCell>BTC</TableCell>
                            <TableCell>1381651251183</TableCell>
                            <TableCell>20154184933</TableCell>
                            <TableCell className="text-right">-4.77063</TableCell>
                            
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Activity