

import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();
export const adddata = createContext("");
export const updatedata = createContext("");
export const deldata = createContext("");

const ContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [udata, setUdata] = useState("");
  const [updata, setUPdata] = useState("");
  const [dltdata, setDLTdata] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setAllUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ allUsers, setAllUsers }}>
      <adddata.Provider value={{ udata, setUdata }}>
        <updatedata.Provider value={{ updata, setUPdata }}>
          <deldata.Provider value={{ dltdata, setDLTdata }}>
            {children}
          </deldata.Provider>
        </updatedata.Provider>
      </adddata.Provider>
    </UserContext.Provider>
  );
};

export default ContextProvider;















// import React, { createContext, useState } from 'react'


// export const adddata = createContext("");
// export const updatedata = createContext("");
// export const deldata = createContext("");

// const ContextProvider = ({ children }) => {

//     const [udata, setUdata] = useState("");
//     const [updata, setUPdata] = useState("");
//     const [dltdata, setDLTdata] = useState("");


//     return (
//         <adddata.Provider value={{ udata, setUdata }}>
//             <updatedata.Provider value={{ updata, setUPdata }}>
//                 <deldata.Provider value={{dltdata, setDLTdata}}>
//                     {children}
//                 </deldata.Provider>

//             </updatedata.Provider>

//         </adddata.Provider>
//     )
// }

// export default ContextProvider;












