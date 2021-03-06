import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friends = () => {
    const [friend, setFriend] = useState([]);
    const [update, setUpdate] = useState(false);

    const getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res);
            setFriend(res.data)
        })
        .catch(err => {
            console.log(err);
        });
    } 

    useEffect(() => {
        getData()
        setUpdate(false)
    }, [update])

    const handleChange = e => {
        return e.target.value;
    }

    return (
        <div>
            <h1>Friends</h1>
            <div>
                {friend.map(item => {
                    return(
                        <div key={item.id}>
                            <h2>Id: {item.id}</h2>
                            <p>Name: {item.name}</p>
                            <p>Age: {item.age}</p>
                            <p>Email: {item.email}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Friends; 