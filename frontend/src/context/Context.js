import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
// import Loadingg from "../Loading/Loading";

export const Context = createContext()

export const ContextBody = ({ children }) => {
    const [category, setCategory] = useState([])
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);


    const getCategory = () => {
        axios
        .get(`http://localhost:8000/api/category`)
        .then(res => {
          setCategory(res.data.response);
        })
        .catch(err => console.log(err));
    }

    const getItems = () => {
        axios
        .get(`http://localhost:8000/api/item`)
        .then(res => {
            // console.log(res.data);
          setItems(res.data);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getItems();
        getCategory();
    }, [loading]);

    return (
        <Context.Provider
            value={{
                setCategory,
                setItems,
                setLoading,
                category,
                items,
                loading

            }}
        >
            {children}
        </Context.Provider>
    )
}