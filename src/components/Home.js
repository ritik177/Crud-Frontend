
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
// import { deldata } from './ContextProvider';
// import { updatedata } from './ContextProvider';
// import { adddata } from './ContextProvider';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'

const Home = () => {
  const [users, setUsers] = useState([]);
  const { dltdata, setDLTdata } = useContext(deldata);
  const { updata, setUPdata } = useContext(updatedata);
  const { udata, setUdata } = useContext(adddata);

  // Fetch users from the API
  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      setDLTdata({ success: true });
      fetchUsers(); // Refresh the user list after deletion
    } else {
      setDLTdata({ success: false });
    }
  };

  return (
    <div className="mt-5">
      {udata ? <div className="alert alert-success" role="alert">User {udata.name} added successfully!</div> : ''}
      {updata ? <div className="alert alert-success" role="alert">User {updata.name} updated successfully!</div> : ''}
      {dltdata ? <div className={`alert ${dltdata.success ? 'alert-success' : 'alert-danger'}`} role="alert">User {dltdata.success ? 'deleted' : 'delete failed'} successfully!</div> : ''}

      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">Add User</NavLink>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td className="d-flex justify-content-between">
                  <NavLink to={`view/${user.id}`}><button className="btn btn-success">View</button></NavLink>
                  <NavLink to={`edit/${user.id}`}><button className="btn btn-primary">Edit</button></NavLink>
                  <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;







































// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { NavLink } from 'react-router-dom';
// import { adddata, deldata } from './context/ContextProvider';
// import { updatedata } from './context/ContextProvider'




// const Home = () => {

//     const [getuserdata, setUserdata] = useState([]);
//     console.log(getuserdata);

//     const { udata, setUdata } = useContext(adddata);

//     const {updata, setUPdata} = useContext(updatedata);

//     const {dltdata, setDLTdata} = useContext(deldata);

//     const getdata = async () => {

//         const res = await fetch("https://crudappreactjs.herokuapp.com/getdata", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");

//         } else {
//             setUserdata(data)
//             console.log("get data");

//         }
//     }

//     useEffect(() => {
//         getdata();
//     }, [])

//     const deleteuser = async (id) => {

//         const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const deletedata = await res2.json();
//         console.log(deletedata);

//         if (res2.status === 422 || !deletedata) {
//             console.log("error");
//         } else {
//             console.log("user deleted");
//             setDLTdata(deletedata)
//             getdata();
//         }

//     }


//     return (

//         <>
//             {
//                 udata ?
//                     <>
//                         <div class="alert alert-success alert-dismissible fade show" role="alert">
//                             <strong>{udata.name}</strong>  added succesfully!
//                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                         </div>
//                     </> : ""
//             }
//             {
//                 updata ?
//                     <>
//                         <div class="alert alert-success alert-dismissible fade show" role="alert">
//                             <strong>{updata.name}</strong>  updated succesfully!
//                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                         </div>
//                     </> : ""
//             }

//             {
//                 dltdata ?
//                     <>
//                         <div class="alert alert-danger alert-dismissible fade show" role="alert">
//                             <strong>{dltdata.name}</strong>  deleted succesfully!
//                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                         </div>
//                     </> : ""
//             }


//             <div className="mt-5">
//                 <div className="container">
//                     <div className="add_btn mt-2 mb-2">
//                         <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
//                     </div>

//                     <table class="table">
//                         <thead>
//                             <tr className="table-dark">
//                                 <th scope="col">id</th>
//                                 <th scope="col">Username</th>
//                                 <th scope="col">email</th>
//                                 <th scope="col">Job</th>
//                                 <th scope="col">Number</th>
//                                 <th scope="col"></th>
//                             </tr>
//                         </thead>
//                         <tbody>

//                             {
//                                 getuserdata.map((element, id) => {
//                                     return (
//                                         <>
//                                             <tr>
//                                                 <th scope="row">{id + 1}</th>
//                                                 <td>{element.name}</td>
//                                                 <td>{element.email}</td>
//                                                 <td>{element.work}</td>
//                                                 <td>{element.mobile}</td>
//                                                 <td className="d-flex justify-content-between">
//                                                     <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
//                                                     <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
//                                                     <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
//                                                 </td>
//                                             </tr>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </table>


//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home

















