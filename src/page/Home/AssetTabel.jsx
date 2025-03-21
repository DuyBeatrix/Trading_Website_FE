import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
  

const AssetTable = () => {
    const navigate = useNavigate()

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">COIN</TableHead>
                    <TableHead>SYMBOL</TableHead>
                    <TableHead>VOLUME</TableHead>
                    <TableHead>MARKET CAP</TableHead>
                    <TableHead>24H</TableHead>
                    <TableHead className="text-right">PRICE</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody> 
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => 
                    <TableRow key={index}>
                        <TableCell onClick={() =>navigate(`/market/bitcoin`)} className="font-medium">
                            <Avatar>
                                <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"></AvatarImage>
                                <span>Bitcoin</span>
                            </Avatar>
                        </TableCell>
                        <TableCell>BTC</TableCell>
                        <TableCell>1381651251183</TableCell>
                        <TableCell>20154184933</TableCell>
                        <TableCell>-4.77063</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default AssetTable