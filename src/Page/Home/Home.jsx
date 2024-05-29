import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'
import { Card } from '../../Components/Card';

export const Home = () => {

    const { data } = useContext(UserContext);

    return (
        <div className='w-full'>
            <div className='w-[100%] min-h-screen flex flex-wrap justify-center items-center gap-10'>
                {data.length > 0 ? data.map((item) => (<Card key={item.id} item={item} />)) : <div className='h-[400px] text-3xl font-bold'>Data not Found</div>}
            </div>
        </div>
    )
}
