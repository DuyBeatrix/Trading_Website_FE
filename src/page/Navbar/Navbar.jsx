import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Ghost, icons } from "lucide-react";
import {DragHandleHorizontalIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import SideBar from "./SideBar";

const Navbar = () => {
    return (
        <div className='px-2 py-3 border-b z-50 sticky bg-gray-900 top-0 left-0 right-0 flex justify-between items-center'>
            <div className="flex items-center gap-3">
            <Sheet className=''>
                <SheetTrigger>
                    <Button variant={Ghost} size={icons} className="rounded-full h-11 w-11">
                        <DragHandleHorizontalIcon className="h-7 w-7"/>
                    </Button>
                </SheetTrigger>
                <SheetContent className='bg-black' side="left">
                    <SheetHeader>
                    <SheetTitle>
                        <div className="text-3xl mt-5 flex justify-center items-center gap-1">
                            <Avatar className="flex">
                                <AvatarImage className="w-8 h-8" src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_640.png"/>
                                <div>
                                    <span className="font-bold text-orange-700">Trading</span>
                                    <span>Platform</span>
                                </div>
                            </Avatar>
                        </div>
                    </SheetTitle>
                    </SheetHeader>
                    <SideBar/>
                </SheetContent>
            </Sheet>
            <p className="text-sm lg:text-base cursor-pointer">Trading Platform</p>
            <div className="p-0 ml-9">
                <Button variant="outline" className="flex items-center gap-3">
                    <MagnifyingGlassIcon/>
                    <span>Search</span>
                </Button>
            </div>
            </div>
            <div>
                <Avatar>
                    <AvatarFallback>Huu Duy</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar