import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Withdrawal = () => {
    return (
        <div className="p-5 lg:px-20 bg-gray-900">
            <h1 className="font-bold text-3xl pb-5">WITHDRAWAL</h1>
            <Table className="">
                <TableHeader>
                    <TableRow className="border-b border-gray-800">
                        <TableHead className="w-[100px] py-5">DATE </TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => 
                        <TableRow key={index} className="border-b border-gray-800">
                            <TableCell>
                                <p>June 2. 2025 at 11:11</p>
                            </TableCell>
                            <TableCell>$54368</TableCell>
                            <TableCell>$54368</TableCell>
                            <TableCell className="text-right">345</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Withdrawal