import { useState } from "react";
import { UserContext } from "./Context";
import jsonData from "../data.json"

export const UserProvider = (props) => {

    const [data, setData] = useState(jsonData.realStateData)
    const [liked, setLiked] = useState([])

    return (
        <UserContext.Provider value={{ data, setData, liked, setLiked }}>
            {props.children}
        </UserContext.Provider>
    );
}