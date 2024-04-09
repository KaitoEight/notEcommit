import { Button } from "@/components/ui/button";
import { Crown, Key, Medal, Skull } from "lucide-react";
import Link from "next/link";

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col"> 
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Skull className="h-6 w-6 mr-2"/>
                    No 1 innovation
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutural-800 mb-6">
                    Notecommit for all
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-red-600 to-pink-500 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    corrupted work.
                </div>
            </div>
            <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-sx md:max-w-2xl text-center mx-auto">
                Collaborate, manage project and read new productivity peaks. From high rise to the home office, the way your team works is unique - accomplish it all with NotECommit   
            </div>
            <Button className=  'mt-4'>
                <Link href="/sign-in">
                Get started now!
                </Link>
            </Button>
                
        </div>
    );
};

export default MarketingPage;   