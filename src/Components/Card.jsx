import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { UserContext } from '../Context/Context';


export const Card = ({ item }) => {
    // console.log(item);
    const { data, setData, liked, setLiked, count, setCount } = useContext(UserContext);
    const { id, name, image, price, address, city, type } = item;
    const { bed, bathrooms, area, date } = item.info;

    const [flag, setFlag] = useState(() => {
        const savedFlag = localStorage.getItem(`flag-${id}`);
        return savedFlag !== null ? JSON.parse(savedFlag) : liked.some((likedItem) => likedItem.id === id);
    });


    const handleWishList = (id) => {

        if (liked.some((item) => item.id === id)) {
            setLiked((prev) => prev.filter(item => item.id !== id));
            setCount((prev) => prev - 1);
            setFlag(false)

        } else {
            const likedData = data.find((item) => item.id === id);
            setLiked((prev) => [likedData, ...prev]);
            setCount((prev) => prev + 1);
            setFlag(true)
        }
    }



    useEffect(() => {
        localStorage.setItem(`flag-${id}`, JSON.stringify(flag))
    }, [flag, id])

    return (
        <>
            <div className='w-[350px] min-h-[400px] border rounded-md mb-10'>

                {/*image  */}
                <div className='w-full'>
                    <img src={image} alt={name} className='w-[100%] h-[250px] bg-center bg-cover rounded-t-md' />
                </div>

                {/* price and like */}
                <div className='flex justify-between items-center px-4 py-1 mt-2 text-xl'>
                    <h1 className='flex items-center justify-center text-blue-500 font-semibold'>
                        {<MdCurrencyRupee className='text-lg' />}
                        {`${price}/day`}
                    </h1>
                    <p className={`${flag ? "text-red-500" : 'text-slate-600'} cursor-pointer`} onClick={() => handleWishList(id)}><FaHeart /></p>
                </div>


                {/*house name and city  */}
                <div className='flex justify-between items-center px-4 py-1'>
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                    <h1 className='border px-1 py-1 rounded-md text-sm'>{city}</h1>
                </div>

                {/* address */}
                <div className='flex flex-col justify-center px-4 mt-2'>
                    <p className='mt-1 mb-1 text-slate-500'>{address}</p>
                    <p className='border w-[100%] '></p>
                </div>

                {/* room details like beds bathrooms and areas */}
                <div className='flex justify-between items-center px-4 text-slate-500'>

                    <p className='flex justify-center items-center mt-2 mb-4'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path></svg>

                        <span>{`${bed}Beds`}</span>
                    </p>

                    <p className='flex justify-center items-center mt-2 mb-4'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"></path></svg>

                        <span>{`${bathrooms}Bath`}</span>
                    </p>

                    <p className='flex justify-center items-center mt-2 mb-4'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"></path></svg>

                        <span>{area}</span>
                    </p>
                </div>
            </div>

        </>
    )
}
