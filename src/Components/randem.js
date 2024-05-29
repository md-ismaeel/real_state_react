import { useContext, useState } from 'react';
import { UserContext } from '../../Context/Context';
import dataPriceAndHouse from "../HouseAndPriceOPtion.json";

export const Header = () => {
    const { data, setData } = useContext(UserContext);
    const [input, setInput] = useState('');
    const [city, setCity] = useState('All');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [house, setHouse] = useState('');

    const handleChange = (e) => {
        let inputText = e.target.value.trim().toUpperCase();
        setInput(inputText);
    };

    const handleFilterChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter a valid city');
        } else {
            const filteredData = data.filter(item => item.city.toUpperCase() === input);
            setData(filteredData);
        }
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        let filteredData = data;

        if (city !== 'All') {
            filteredData = filteredData.filter(item => item.city.toUpperCase() === city.toUpperCase());
        }
        if (date) {
            filteredData = filteredData.filter(item => new Date(item.date) >= new Date(date));
        }
        if (price) {
            filteredData = filteredData.filter(item => item.price === price);
        }
        if (house) {
            filteredData = filteredData.filter(item => item.type === house);
        }

        setData(filteredData);
    };

    return (
        <div className='w-full min-h-[200px] flex flex-col justify-center items-center'>
            <form className='flex justify-center items-center gap-10 mt-20' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search city'
                    value={input}
                    onChange={handleChange}
                    className='border h-[40px] w-[400px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-300 px-6'
                />
                <button
                    type='submit'
                    className='bg-blue-500 px-6 py-2 rounded-md text-white font-semibold active:bg-blue-400 hover:bg-blue-600'
                >
                    Search
                </button>
            </form>

            <form className='h-[100px] w-[85%] flex justify-between items-center border px-10 mb-10 mt-6 bg-slate-100 rounded-md'>
                <div className='flex flex-col justify-center items-start'>
                    <label className='mb-2'>Enter city</label>
                    <input
                        type='text'
                        value={city}
                        onChange={handleFilterChange(setCity)}
                        placeholder='Enter city'
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2'
                    />
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Date</label>
                    <input
                        type='date'
                        value={date}
                        onChange={handleFilterChange(setDate)}
                        placeholder='Enter Date'
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2'
                    />
                </div>

                <div className='flex flex-col justify-center items-start border-l-2 rounded-md px-2'>
                    <label className='mb-2'>Enter Price</label>
                    <select
                        value={price}
                        onChange={handleFilterChange(setPrice)}
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2'
                    >
                        <option value=''>Select Price</option>
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
                        className='h-[35px] w-[200px] rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 border px-2'
                    >
                        <option value=''>Select Property Type</option>
                        {dataPriceAndHouse.optionDataHouseTYpe.map((item, index) => (
                            <option value={item.type} key={index}>
                                {item.type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='border-l-2 rounded-md px-2'>
                    <button
                        type='submit'
                        onSubmit={handleFilterSubmit}
                        className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-md'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
