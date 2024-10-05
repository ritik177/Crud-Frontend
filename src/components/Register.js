import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { adddata } from './context/ContextProvider';

const Register = () => {
  const [inpval, setINP] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    companyName: ""
  });

  const { setUdata } = useContext(adddata);
  const history = useHistory();

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((prevVal) => ({
      ...prevVal,
      [name]: value
    }));
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, username, email, phone, website, companyName } = inpval;

    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        username,
        email,
        phone,
        website,
        company: {
          name: companyName
        }
      })
    });

    const data = await res.json();

    if (res.status === 201) {
      setUdata(data);
      history.push("/");
    } else {
      console.log("Error while adding user");
    }
  };

  return (
    <div className="container">
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" value={inpval.name} onChange={setdata} className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" name="username" value={inpval.username} onChange={setdata} className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" value={inpval.email} onChange={setdata} className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" name="phone" value={inpval.phone} onChange={setdata} className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="website" className="form-label">Website</label>
            <input type="text" name="website" value={inpval.website} onChange={setdata} className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input type="text" name="companyName" value={inpval.companyName} onChange={setdata} className="form-control" />
          </div>
          <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;



























// // import React, { useContext, useState } from 'react'
// // import { NavLink, useHistory } from 'react-router-dom'
// // import { adddata } from './context/ContextProvider';

// // const Register = () => {

// //     const { udata, setUdata } = useContext(adddata);

// //     const history = useHistory();

// //     const [inpval, setINP] = useState({
// //         name: "",
// //         email: "",
// //         age: "",
// //         mobile: "",
// //         work: "",
// //         add: "",
// //         desc: ""
// //     })

// //     const setdata = (e) => {
// //         console.log(e.target.value);
// //         const { name, value } = e.target;
// //         setINP((preval) => {
// //             return {
// //                 ...preval,
// //                 [name]: value
// //             }
// //         })
// //     }


// //     const addinpdata = async (e) => {
// //         e.preventDefault();

// //         const { name, email, work, add, mobile, desc, age } = inpval;

// //         const res = await fetch("https://crudappreactjs.herokuapp.com/register", {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json"
// //             },
// //             body: JSON.stringify({
// //                 name, email, work, add, mobile, desc, age
// //             })
// //         });

// //         const data = await res.json();
// //         console.log(data);

// //         if (res.status === 422 || !data) {
// //             console.log("error ");
// //             alert("error");

// //         } else {
// //             history.push("/")
// //             setUdata(data)
// //             console.log("data added");

// //         }
// //     }

// //     return (
// //         <div className="container">
// //             <NavLink to="/">home</NavLink>
// //             <form className="mt-4">
// //                 <div className="row">
// //                     <div class="mb-3 col-lg-6 col-md-6 col-12">
// //                         <label for="exampleInputEmail1" class="form-label">Name</label>
// //                         <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
// //                     </div>
// //                     <div class="mb-3 col-lg-6 col-md-6 col-12">
// //                         <label for="exampleInputPassword1" class="form-label">email</label>
// //                         <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
// //                     </div>
// //                     <div class="mb-3 col-lg-6 col-md-6 col-12">
// //                         <label for="exampleInputPassword1" class="form-label">age</label>
// //                         <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
// //                     </div>
// //                     <div class="mb-3 col-lg-6 col-md-6 col-12">
// //                         <label for="exampleInputPassword1" class="form-label">Mobile</label>
// //                         <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
// //                     </div>
// //                     <div class="mb-3 col-lg-6 col-md-6 col-12">
// //                         <label for="exampleInputPassword1" class="form-label">Work</label>
// //                         <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
// //                     </div>
// //                     <div class="mb-3 col-lg-6 col-md-6 col-12">
// //                         <label for="exampleInputPassword1" class="form-label">Address</label>
// //                         <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
// //                     </div>
// //                     <div class="mb-3 col-lg-12 col-md-12 col-12">
// //                         <label for="exampleInputPassword1" class="form-label">Description</label>
// //                         <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
// //                     </div>

// //                     <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
// //                 </div>
// //             </form>
// //         </div>
// //     )
// // }
// // export default Register;
