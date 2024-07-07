import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-800 text-white">
            <div className="myContainer flex justify-between items-center px-4 py-7 h-14">
                <div className="logo font-bold text-2xl">
                    <span className="text-green-500">&lt;</span>
                     pass<span>OP</span>
                    <span className="text-green-500">&gt;</span>
                </div>
                <ul>
                    <li className="flex gap-4">
                        <a className="hover:font-bold" href="#">Home</a>
                        <a className="hover:font-bold" href="#">About</a>
                        <a className="hover:font-bold" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar