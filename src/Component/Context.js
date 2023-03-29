import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [userData, setUserData] = useState({})



    useEffect(() => {

        const userdata1 = JSON.parse(localStorage.getItem("userInfo"));
        // console.log(userdata1);
        const userID = localStorage.getItem("userid");
        // console.log(userID);
        if (userID) {
            let x = userID
            setUser(x);
            setUserData(userdata1)
            console.log("usercintext", user);
            console.log("datacintext", userData);


        }
    }, []);

    const logout = () => {
        localStorage.clear()
        window.location = "/home"
    }
    return (
        <>
            <DataContext.Provider value={{
                user, setUser, logout, userData, setUserData
            }}>
                {children}
            </DataContext.Provider>
        </>
    );
};
export default DataProvider;