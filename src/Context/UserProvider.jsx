import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import jsonData from "../data.json"

export const UserProvider = (props) => {

    const [data, setData] = useState(jsonData.realStateData);
    // const [liked, setLiked] = useState(() => {
    //     const savedItems = localStorage.getItem('items')
    //     return savedItems !== null ? JSON.parse(savedItems) : [];
    // })

    // const [count, setCount] = useState(() => {
    //     const savedCount = localStorage.getItem('item');
    //     return savedCount !== null ? JSON.parse(savedCount) : Number(0);
    // })

    const [liked, setLiked] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() => {

        const savedItems = localStorage.getItem('items')
        if (savedItems !== null && savedItems !== "undefined") {
            setLiked(JSON.parse(savedItems))
        }

        const savedCount = localStorage.getItem('item');
        if (savedCount !== null && savedCount !== "undefined") {
            setCount(JSON.parse(savedCount))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(count))
        localStorage.setItem('items', JSON.stringify(liked))
    }, [count, liked])

    return (
        <UserContext.Provider value={{ data, setData, liked, setLiked, count, setCount }}>
            {props.children}
        </UserContext.Provider>
    );
}