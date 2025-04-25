import React from 'react'
import Tabs from './MiniCOP/nav'
import ActionSearchBar from './MiniCOP/searchbar'
import { LogOut  } from 'lucide-react';
import { Button } from "@/components/ui/button"
const Header = () => {
    return (
        <div className='flex  items-center justify-between  fixed w-screen h-20 p-10 bg-black'>
            <div className=" h-12   text-white font-extrabold">
                <h1 className='text-3xl ' >WEBAGE</h1>
            </div>
            <div className=" flex justify-center items-center ">
                <Tabs /> 
           
                </div>
                <div className=" flex justify-center items-center ">
                
                <ActionSearchBar/>
                </div>
            <div className="text-white ">
            <Button variant='ghost' > <LogOut /></Button>
            </div>


        </div>
    )
}

export default Header