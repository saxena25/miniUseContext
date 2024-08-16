// import React from 'react';
import { useState } from 'react';
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);//we can keep it [] as well and null also

    return(
        // Inside value we can pass anything but pass as object best practice.
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider