import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const Watchlist = () => {
    const handleRemoveWatchlist = (value) => {
        console.log(value)
    }
    return (
        <div className="p-5 lg:px-20 bg-gray-900">
            <h1 className="font-bold text-3xl pb-5">WATCHLIST</h1>
            <Table className="">
                <TableHeader>
                    <TableRow className="border-b border-gray-800">
                        <TableHead className="w-[100px]">COIN</TableHead>
                        <TableHead>PRICE</TableHead>
                        <TableHead>UNIT</TableHead>
                        <TableHead>CHANGE</TableHead>
                        <TableHead>CHANGE %</TableHead>
                        <TableHead className="text-right text-red-500">REMOVE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => 
                        <TableRow key={index} className="border-b border-gray-800">
                            <TableCell className="font-medium">
                                <Avatar>
                                    <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"></AvatarImage>
                                    <span>Bitcoin</span>
                                </Avatar>
                            </TableCell>
                            <TableCell>BTC</TableCell>
                            <TableCell>1381651251183</TableCell>
                            <TableCell>20154184933</TableCell>
                            <TableCell>-4.77063</TableCell>
                            <TableCell className="text-right">
                                <Button size="icon" className="h-10 w-10" onClick={() => handleRemoveWatchlist(item.id)}>
                                    <BookmarkFilledIcon/>
                                </Button>
                            </TableCell>
                            
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Watchlist