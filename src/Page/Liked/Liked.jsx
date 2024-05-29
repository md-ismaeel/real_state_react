import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'
import { Card } from '../../Components/Card'

export const Liked = () => {

    const { liked } = useContext(UserContext);

    return (
        <div className='w-full'>

            <div className='w-full flex justify-center'>
                {liked.length === 0 ? (
                    <div className='text-3xl font-bold'>NO Data Available</div>
                ) : (
                    <div className='w-[100%] min-h-screen flex flex-wrap justify-center items-center gap-10'>
                        {liked.map((item) => <Card item={item} key={item.id} />)}
                    </div>
                )}
            </div>

        </div>
    )
}