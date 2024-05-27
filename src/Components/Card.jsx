import React from 'react'

const Card = ({ item }) => {
    const { id, name, image, price, address, city, type } = item;
    const { bed, bathroom, area, date } = item.info;

    return (
        <>
            <div className='w-[300px] h-[250px] border-2'>
                <img src={image} alt={name} />
            </div>
        </>
    )
}

export default Card
