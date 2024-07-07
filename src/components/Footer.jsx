import React from 'react'

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white flex flex-col items-center justify-center fixed bottom-0 w-full">
            <div className="logo font-bold text-2xl">
                <span className="text-green-500">&lt;</span>
                pass<span>OP</span>
                <span className="text-green-500">&gt;</span>
            </div>
            <div className="font-bold">
                Created By Sahil Parashar
            </div>
        </div>
    )
}

export default Footer