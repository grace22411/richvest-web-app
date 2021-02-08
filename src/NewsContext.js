import React, {useContext, createContext, useState, useEffect} from 'react'
import axios from "axios"


export const NewsContext = createContext()
export const NewContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = "b0cf3ff7278b4859a01f204189ba6253";
    

    useEffect(() => {
        axios.get(`http://newsapi.org/v2/everything?q=tesla&from=2021-02-06&sortBy=publishedAt&apiKey=${apiKey}`
        ).then((response => setData(response.data))).catch((error) => console.log(error))

    },[data])
    return(
        <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>
    )
}

