import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'
import Card from '../../Components/Card';

export const Home = () => {
    const { data } = useContext(UserContext);
    return (
        <div className='w-[100vw]'>
            <div className='w-[100%] min-h-screen'>
                {data && data.map((item) => (<Card key={item.id} item={item} />))}
            </div>
        </div>
    )
}
