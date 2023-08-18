    "use client"
    import { Themecontext } from '@/Context/Themecontext'
    import React, { useContext } from 'react'

    const DarkmodeToggle = () => {
    const {toggle, mode}  = useContext(Themecontext)
    return (
        <div>
        <div onClick={toggle} className='w-fit h-[24px] border-2 rounded-2xl relative border-green-950 flex items-center cursor-pointer'>
            <div>🌙</div>
            <div>☀️</div>
            <div className={`${mode === "light" ? "right-0" : "left-0"} w-[19px] h-[20px] rounded-full bg-green-700  absolute bottom-0`}></div>
        </div>
        </div>
    )
    }

    export default DarkmodeToggle
