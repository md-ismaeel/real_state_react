import { useContext, useState } from 'react'
import { UserContext } from '../../Context/Context';
import dataPriceAndHouse from "../HouseAndPriceOPtion.json"
import "../Header/Header.css"

export const Header = () => {

    const { data, setData } = useContext(UserContext);
    const [input, setInput] = useState('');
    const [city, setCity] = useState('All');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [house, setHouse] = useState('All');

    const handleChange = (e) => {
        let inputText = e.target.value;
        setInput(inputText.trim())

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input === '') {
            alert('please enter valid city')

        } else {
            const filteredData = data.filter((item) => item.city === input.toUpperCase())
            setData(filteredData)
        }
    }

    const handleFilterChange = (setterFunc) => (e) => {
        setterFunc(e.target.value);
    };


    const handleFilterSubmit = (e) => {
        e.preventDefault();

        let filteredData = data;
        if (city && city !== 'All') {
            filteredData = filteredData.filter((item) => item.city.toUpperCase() === city.toUpperCase());
        }
        if (date) {
            const inputDate = new Date(date);
            const inputDay = inputDate.getDate();
            filteredData = filteredData.filter((item) => {
                const [startDay, endDay] = item.info.date;
                return inputDay >= startDay && inputDay <= endDay;
            });
        }
        // console.log(filteredData);
        if (price) {
            filteredData = filteredData.filter((item) => item.price === (price));
            console.log(filteredData);
        }
        if (house !== 'All') {
            filteredData = filteredData.filter((item) => item.type === house);
        }

        setData(filteredData);
        // setData(data)
    };


    return (
        <div className='container w-full min-h-[200px] flex flex-col justify-center items-center'>

            <form onSubmit={(e) => handleSubmit(e)} className='sec-form flex justify-center items-center gap-10 mt-20'>
                <input type='text' placeholder='Search city' value={input} onChange={(e) => handleChange(e)} className='input-search border h-[40px] w-[400px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-300 px-6' />

                <button type='submit' className='bg-blue-500 px-6 py-2 rounded-md text-white font-semibold active:bg-blue-400 hover:bg-blue-600'>Search</button>
            </form>

            {/* for filtering house based on choice like rent city date */}
            <form className='house-details min-h-[100px] w-[90%] flex justify-between items-center border px-10 mb-10 mt-6 bg-slate-100 rounded-md' onSubmit={handleFilterSubmit}>
                <div className='flex flex-col justify-center items-start'>
                    <label className='mb-2'>Enter city</label>
                    <input type='text' value={city} onChange={handleFilterChange(setCity)} placeholder='Enter city' className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300' />
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Date</label>
                    <input type='date' required value={date} onChange={handleFilterChange(setDate)} placeholder='Enter Date' className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300' />
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Price</label>
                    <select value={price} onChange={handleFilterChange(setPrice)} className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300'
                    >
                        {dataPriceAndHouse.optionDataPrice.map((item, index) => (
                            <option value={item.price} key={index}>
                                {item.price}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Property Type</label>
                    <select value={house} onChange={handleFilterChange(setHouse)} className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300'
                    >
                        {dataPriceAndHouse.optionDataHouseTYpe.map((item, index) => (
                            <option value={item.type} key={index}>
                                {item.type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='border-l-2 rounded-md px-2'>
                    <button type='submit' className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-md'>
                        Submit
                    </button>
                </div>
            </form>

            {/* <form
                className='h-[100px] w-[90%] flex justify-between items-center border px-10 mb-10 mt-6 bg-slate-100 rounded-md'
                onSubmit={handleFilterSubmit}
            >
                <div className='flex flex-col justify-center items-start'>
                    <label className='mb-2'>Enter city</label>
                    <input
                        type='text'
                        value={city}
                        onChange={handleFilterChange(setCity)}
                        placeholder='Enter city'
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300'
                    />
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Date</label>
                    <input
                        type='date'
                        value={date}
                        onChange={handleFilterChange(setDate)}
                        placeholder='Enter Date'
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300'
                    />
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Price</label>
                    <select
                        value={price}
                        onChange={handleFilterChange(setPrice)}
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300'
                    >
                        <option value=''>Select price</option>
                        {dataPriceAndHouse.optionDataPrice.map((item, index) => (
                            <option value={item.price} key={index}>
                                {item.price}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Property Type</label>
                    <select
                        value={house}
                        onChange={handleFilterChange(setHouse)}
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2 duration-300'
                    >
                        <option value='All'>All</option>
                        {dataPriceAndHouse.optionDataHouseType.map((item, index) => (
                            <option value={item.type} key={index}>
                                {item.type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='border-l-2 rounded-md px-2'>
                    <button
                        type='submit'
                        className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-md'>
                        Submit
                    </button>
                </div>
            </form> */}

        </div>
    )
}

