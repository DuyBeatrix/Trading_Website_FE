import { Button } from "@/components/ui/button";
import React from "react";
import AssetTable from "./AssetTabel";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
    const [category, setCategory] = React.useState("all")
    const [inputValue, setInputValue] = React.useState("")
    const [isBotRealease, setIsBotRealease] = React.useState(false)

    const handleBotRealease = () => setIsBotRealease(!isBotRealease)
    const handleCategory = (value) => {
        setCategory(value)
    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleKeyPress = (event) => {
        if(event.key == "Enter") {
            console.log(inputValue)
        }
        setInputValue("")
    }
    
    return (
        <div className="relative bg-gray-900 min-h-screen">
            <div className="lg:flex">
                <div className="lg:w-[50%] lg:border-r">
                    <div className="p-3 flex items-center gap-4">
                        <Button variant={category == "all" ? "default" : "outline"} 
                            className="rounded-full" onClick={() => handleCategory("all")}>
                            All
                        </Button>
                        <Button variant={category == "top50" ? "default" : "outline"} 
                            className="rounded-full" onClick={() => handleCategory("top50")}>
                            TOP 50
                        </Button>
                        <Button variant={category == "topGainer" ? "default" : "outline"} 
                            className="rounded-full" onClick={() => handleCategory("topGainer")}>
                            TOP Gainer
                        </Button>
                        <Button variant={category == "topLoser" ? "default" : "outline"} 
                            className="rounded-full" onClick={() => handleCategory("topLoser")}>
                            TOP Loser
                        </Button>
                    </div>
                    <AssetTable/>
                </div>
                <div className='hidden lg:block lg:w-[50%] p-5'>
                    <StockChart/>
                    <div className="flex gap-5 items-center]">
                        <div>
                            <Avatar>
                                <AvatarImage className="w-10 h-10" src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"/>
                            </Avatar>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p>ETH</p>
                                <DotIcon className="text-gray-400"/>
                                <p className="text-gray-400">Ethereum</p>
                            </div>
                            <div className="flex items-end gap-2">
                                <p className="text-xl font-bold">5464</p>
                                <p className="text-red-600">
                                    <span>-1314546865.567</span>
                                    <span>(-0.324646%)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="fixed bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
                { isBotRealease && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-black">
                    <div className="flex justify-between items-center border-b px-6 h-[10%]">
                        <p>Chat Bot</p>
                        <Button onClick={handleBotRealease}>
                            <Cross1Icon/>
                        </Button>
                    </div>
                    <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
                        <div className="self-start pb-5 w-auto">
                            <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                <p>Hi Huu Duy</p>
                                <p>You can ask crypto related any question</p>
                                <p>Like price, market cap extra ...</p>
                            </div>
                        </div>

                        {
                            [1, 1, 1, 1].map((item, index) => (
                                <div key={index} className={`${index % 2 == 0 ? "self-start" : "self-end"} pb-5 w-auto`}>
                                    {
                                        index % 2 == 0 ? <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                            <p>Prompt who are you</p>
                                        </div> :
                                        <div className="justify-start self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                            <p>Ans hi, Raam Arora</p>
                                    </div>
                                    }
                                </div>
                            ))
                        }

                    </div>
                    <div className="h-[12%] border-t">
                        <Input 
                            className="w-full h-full order-none outline-none"
                            placeholder="Chat here"
                        />
                    </div>
                </div> }
                <div className="relative w-[10rem] cursor-pointer group">
                    <Button onClick={handleBotRealease} className="w-full h-[3rem] gap-2 items-center bg-white">
                        <MessageCircle size={30} className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"/>
                        <span className="text-2xl text-gray-900">Chat Bot</span>
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Home