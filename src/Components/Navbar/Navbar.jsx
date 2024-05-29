import { useContext, useState } from 'react'
import { UserContext } from '../../Context/Context'
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const { liked, setLiked, count, setCount } = useContext(UserContext);

    const likedHandler = () => {

    }

    return (
        <>
            <div className='w-[100%] h-[60px] fixed flex justify-around items-center bg-slate-200'>

                <NavLink to={'/'}>
                    <div className='text-3xl text-green-600'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="mb-1 text-success" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                        </svg>
                    </div>
                </NavLink>

                <h1 className='text-3xl text-gray-500 font-semibold'>Search properties to rent</h1>

                <NavLink to={'/like'}>
                    <div className='relative flex justify-center items-center gap-2 text-xl'>
                        <span>Liked</span>
                        <span onClick={() => likedHandler} className='text-red-600 text-2xl cursor-pointer'><FaHeart />
                            <span className='flex justify-center items-center absolute top-[-5px] right-[-12px] rounded-full h-[25px] w-[25px] bg-emerald-100 text-sm text-black'>{count}</span>
                        </span>
                    </div>
                </NavLink>

            </div>
        </>
    )
}
