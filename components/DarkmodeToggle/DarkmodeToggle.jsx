    "use client"
    import { Themecontext } from '@/Context/Themecontext'
    import React, { useContext } from 'react'
    import {MdLightMode, MdDarkMode} from 'react-icons/md'

    const DarkmodeToggle = () => {
    const {toggle, mode}  = useContext(Themecontext)
    return (
        <div>
        <div onClick={toggle} className='w-fit h-[52px] border-2 rounded-2xl relative border-green-950 grid items-center cursor-pointer'>
            <div><MdDarkMode size={20} style={{paddingLeft : "2px"}}/></div>
            <div><MdLightMode size={20} style={{paddingLeft : "2px"}}/></div>
            <div className={`${mode === "light" ? "top-0" : "bottom-0"} w-[22px] h-[22px] rounded-full bg-green-700  absolute bottom-0`}></div>
        </div>
        </div>
    )
    }

    export default DarkmodeToggle
