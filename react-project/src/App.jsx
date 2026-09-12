// function Hello(){
//   return(
//     <div>
//       <h1>Hello! React.js</h1>
//     </div>
//   );
// }
// function Laptop(){
//   const productName="Laptop";
//   const productPrice=80000;
//   const productCategory="electronics";
//   return(
//     <div>
//     <h1>{productName}</h1>
//     <p>Rs. {productPrice}</p>
//     <p>{productCategory}</p>
//     <input type="text" placeholder="enter your name"/>
//     <input type="password" placeholder="enter your password"/>
//     <button>Add to Card</button>
//     </div>
//   );
// }
// function Product({name,price,category}){
//   return(<div>
//     <h1>{name}</h1>
//     <p>{price}</p>
//     <p>{category}</p>
//   </div>)
// }
// function App(){
//   return (<Card>
//     <h1>Life is difficult but Allah is Always with me.</h1>
//     <Product name="Dell Laptop" price={900000} category="Electric"/>
//     <Product name="Hp Laptop" price={1200000} category="Electric"/>
//     <Laptop/>
//     <Hello/>
//   </Card>)
// }
// function Card({children}){
//   return(<div>
//     {children}
//   </div>)
// }
// export default App
// jni ab usestate ka project

// const { forwardRef } = require("react");

// jni next example of usestate and onclick button
// 
// 4444444 code 
// import { useState } from "react";
// function App(){
//   const [formData, setformdata]=useState({
//     name:"M UsamaBilal",
//     email:"usamabilal@137gmali.com",
//     password:"1234"
//   });
//   function handleChange(event){
//     const {name,value}=event.target;
//     setformdata(prevFormData=>({
//       ...prevFormData,
//       [name]:value
//     }));
//   }
//   return (
//     // fragrment
//     <>
//     <input
//      type="text"
//      name="name"
//      placeholder="enter your name"
//      value={formData.name}
//      onChange={handleChange}
//     />
//     <input
//      type="email"
//      name="email"
//      placeholder="enter your email"
//      value={formData.email}
//      onChange={handleChange}
//     />
//     <input
//      type="password"
//      name="password"
//      placeholder="enter your password"
//      value={formData.password}
//      onChange={handleChange}
//     />
//     <p>Name:{formData.name}</p>
//     <p>Email:{formData.email}</p>
//     <p>Password:{formData.password}</p>
//     </>
//   )
// }
// export default App
// useEffect ka code 55555
// import { useState } from "react";
// import { useEffect } from "react";
// function App(){
//     const [tab,setTab]=useState("posts")
//     useEffect(()=>{
//         console.log("useEffect Hook!")
//     },[tab])
//     return (
//         <div className="tab-container">
//             <div className="tab">
//                 <button onClick={()=>setTab('posts')}>Posts</button>
//                 <button onClick={()=>setTab('users')}>Users</button>
//                 <button onClick={()=>setTab('comments')}>Comments</button>
//             </div>
//             <h2>{tab}</h2>
//         </div>
//     )
// }
// export default App

// // jni useRef hooks
// import { useRef } from "react";
// function App(){
//     const name=useRef(null);
//     const email=useRef(null);
//     const password=useRef(null);
//     function handleFocus(inputRef){
//         inputRef.current.focus();
//     }
//     function handleClear(inputRef){
//         inputRef.current.value="";
//         inputRef.current.focus();
//     }
//     return (
//         <div>
//             <h1>useRef Hook</h1>
//             <input
//              ref={name}
//              type="text"
//              placeholder="enter your name:"
//             />
//             <br />
//             <button onClick={()=>handleFocus(name)}>Focus input</button>
//             <button onClick={()=>handleClear(name)}>Clear input</button>
//             <br />
//             <input
//              ref={email}
//              type="email"
//              placeholder="enter your email:"
//             />
//             <br />
//             <button onClick={()=>handleFocus(email)}>Focus input</button>
//             <button onClick={()=>handleClear(email)}>Clear input</button>
//             <br />
//             <input
//              type="password"
//              ref={password}
//              placeholder="enter your password:"
//             />
//             <br />
//             <button onClick={()=>handleFocus(password)}>Focus input Button</button>
//             <button onClick={()=>handleClear(password)}>Clear input Button</button>
//         </div>
//     );
// }
// export  default App
// ab 3 hooks ak sath useState useEffect useRef
// import { useState, useEffect, useRef } from "react";
// function App(){
//     const [count , setCount]=useState(0);
//     const inputRef=useRef(null);
//     const previousCount=useRef(0);
//     useEffect(
//         ()=>{
//             console.log("count change:",count);
//             previousCount.current=count;
//         },[count]
//     );
//     function handleFocus(){
//         inputRef.current.focus();
//     }
//     function handleClear(){
//         inputRef.current.value="";
//         inputRef.current.focus();
//     }
//     return(
//         <div>
//             <input type="text" placeholder="enter your name" ref={inputRef}/>
//             <br />
//             <button onClick={handleFocus}>Focus input</button>
//             <button onClick={handleClear}>Clear input</button>
//             <h2>current count:{count}</h2>
//             <h2>previousCount{previousCount.current}</h2>
//             <button onClick={()=>setCount(pre=>pre+1)}>Increase</button>
//         </div>
//     )
// }
// export default App
// // Mini Timer Project
// import { useState, useEffect,useRef } from "react";
// function App(){
//     const [second , setSecont]=useState(0);
//     const intervalRef=useRef(null);
//     useEffect(
//         ()=>{
//             intervalRef.current=setInterval(()=>{setSecont(prevSecond=>prevSecond+1)},1000);
//             return()=>{clearInterval(intervalRef.current);};
//         },[]
//     );
//     return (
//         <div>
//             <h1>Study Time</h1>
//             <h2>Seconds:{second}</h2>
//         </div>
//     );
// }
// export default App



// // usecontext hook 
//////////////////////////////////////////////////////
///////////////////////////////
// ---------------/////////////////------------------

// 666666666666666666666666666666666
// useReducer hooks





// reducer hook ke use se login page




// useid hook


// import { useId } from "react";
// function App(){
//     const nameId=useId();
//     const emailId=useId();
//     return(
//         <div>
//             <>
//             <label htmlFor="nameId">Name:</label>
//             <input
//              type="text"
//              id="nameId"
//              placeholder="enter your name:"

//             />
//             </>
//             <>
//             <label htmlFor="emailId">Email:</label>
//             <input
//               type="email"
//               id="emailId"
//               placeholder="enter your email:"
//             />
//             </>
//         </div>
//     )
// }
// export default App



// forwardRef ka use 

// import { forwardRef,useRef, useImperativeHandle } from "react";
// // child component
// const InputBox=forwardRef(function InputBox(props,ref){
//     // child ka reference
//     const inputRef=useRef();
//     // Child ka reference method
//     useImperativeHandle(ref,()=>({
//         focusInput(){
//             inputRef.current.focus();
//         },
//         clearInput(){
//             inputRef.current.value="";
//         }
//     }));
//     return(
//         <div>
//             <input
//              type="text"
//              ref={inputRef}
//              placeholder="enter your name:"
//             />
//         </div>
//     )
// })
// // parent component there

// function App(){
//     const inputBoxRef=useRef();
//     function handleFocusInput(){
//         inputBoxRef.current.focusInput();
//     }
//     function handleClearInput(){
//         inputBoxRef.current.clearInput();
//     }
//     return(
//         <div>
//             <InputBox ref={inputBoxRef}/>
//             <br/>
//             <br/>
//             <button onClick={handleFocusInput}>Focus button</button>
//             <button onClick={handleClearInput}>Clear Input</button>
//         </div>
//     )
// }
// export default App
// 77777777777777777777

// import { useState , useTransition} from "react";
// function App(){
//     const [count,setCount]=useState(0);
//     const [isPadding,startTransition]=useTransition();
//     function handleClick(){
//         startTransition(()=>{
//             setCount(count+1);
//         });
//     }
//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={handleClick}>Increase</button>
//             {isPadding && <p>Updating</p>}
//         </div>
//     )
// }
// export default App


// useTransition ka code 


// import { useState,useTransition } from "react";
// function App(){
//     const [search,setSearch]=useState("");
//     const [isPending,startTransition]=useTransition();
//     const [list,setList]=useState([]);
//     function handleSearch(event){
//         const value=event.target.value;
//         setSearch(value);
//         startTransition(()=>{
//             const newlist=[];
//             for(let i=0; i<10000;i++){
//                 newlist.push(value +" "+ i);
//             }
//             setList(newlist);
//         });
//     }
//     return(
//         <div>
//             <input type="text" value={search} onChange={handleSearch}
//              placeholder="enter search items"/>
//              <h2>Search:{search}</h2>
//              <h3>items:{list.length}</h3>
//             {isPending && <p>Loading... list is pending!</p>}
//             {list.map((item,index)=>(
//                 <p key={index}>{item}</p>
//             ))}
//         </div>
//     )
// }
// export default App


// import { useState,useDeferredValue } from "react";
// function App(){
//     const [search,setSearch]=useState("");
//     const deferVal=useDeferredValue(search);
//     const list=[];
//     for(let i=0;i<10000;i++){
//         list.push(deferVal+ " " +i);
//     }
//     return(
//         <div>
//             <input type="text" onChange={(event)=>setSearch(event.target.value)}
//              placeholder="search value"
//             />
//             <h1>Search:{search}</h1>
//             <h2>DeferVal:{deferVal}</h2>
//             {list.map((items,index)=>{
//                 <p key={index}>{items}</p>
//             })};
//         </div>
//     )
// }
// export default App


// import { useSyncExternalStore } from "react";
// let count=0;
// const listeners=new Set();
// function subscribe(listener){
//     listeners.add(listener);
//     return ()=>{
//         listeners.delete(listener);
//     };
// }
// function getSnapshot(){
//     return count;
// }
// function incrementCount(){
//     count++
//     listeners.forEach((listener)=>{
//         listener();
//     });
// }
// function App(){
//     const currentCount=useSyncExternalStore(
//         subscribe,getSnapshot
//     )
//     return (
//         <>
//         <h1>{currentCount}</h1>
//         <button onClick={incrementCount}>Increase</button>
//         </>
//     )
// }
// // export default App
// import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
// import "./App.css";
// function Home(){
//     return <h1>Home Page</h1>;
// }
// function About(){
//     return <h1>About Page</h1>;
// }
// function Contact(){
//     return <h1>Contact Page</h1>;
// }
// function App(){
//     return (
//         <BrowserRouter>
//         <nav>
//             <NavLink to="/" className={({isActive})=>{isActive? "active":""}}>Home</NavLink>
//             <NavLink to="/about" className={({isActive})=>{isActive ? "active":""}}>About</NavLink>
//             <NavLink to="/contact" className={({isActive})=>{isActive ?"active":""}}>Contact</NavLink>
//         </nav>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         </Routes>
//         </BrowserRouter>
//     )
// }
// export default App


// navigates with buttons



// import { useNavigate,BrowserRouter,Routes,Route,Outlet,useParams,useLocation } from "react-router-dom";
// import "./App.css";
// function Home(){
//     const navigate=useNavigate();
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <button onClick={()=>navigate("/about")}>Go to About</button>
//             <button onClick={()=>navigate("/contact")}>Go to Contact</button>
//         </div>
//     )
// }
// function About(){
//     const navigate=useNavigate();
//     return (
//         <div>
//             <h1>About Page</h1>
//             <button onClick={()=>navigate('/')}>Go to Home</button>
//             <button onClick={()=>navigate('/contact')}>Go to Contact</button>
//         </div>
//     )
// }
// function Contact(){
//     const navigate=useNavigate();
//     return (
//         <div>
//             <h1>Contact Page</h1>
//             <button onClick={()=>navigate('/')}>Go to Home</button>
//             <button onClick={()=>navigate("/about")}>Go to About</button>
//         </div>
//     )
// }
// function DashBoard(){
//     return(
//         <div>
//             <h1>DashBoard</h1>
//             <Outlet/>
//         </div>
//     )
// }
// function Profile(){
//     const {id}=useParams();
//     return (
//         <h1>Profile Page ID:{id}</h1>
//     )
// }
// function Settings(){
//     return(
//         <h1>Settings Page</h1>
//     )
// }
// function NotFound(){
//     return (
//         <h1>404 Page not Found!</h1>
//     )
// }
// function PagePath(){
//     const location=useLocation();
//     return(
//       <h2>CurrentPath: {location.pathname}</h2>
//     )
// }
// function App(){
//     return(
//     <BrowserRouter>
//     <PagePath/>
//     <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/dashboard" element={<DashBoard/>}>
//             <Route path="profile/:id" element={<Profile/>}/>
//             <Route path="settings" element={<Settings/>}/>
//         </Route>
//         <Route path="*" element={<NotFound/>}/>
//     </Routes>
//     </BrowserRouter>)
// }
// export default App




// jni API learning start there 



// import { useState,useEffect } from "react";
// function App(){
//     const [users,setUser]=useState([]);
//     const [isLoading,setLoading]=useState(true);
//     const [error,setError]=useState(null);
//     useEffect(
//         ()=>{
//             fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response=>{
//                 if(!response.ok){
//                     throw new Error ("API request Fail");
//                 }
//                 return response.json()
//             })
//             .then(data=>{
//                 setUser(data);
//                 setLoading(false)
//             })
//             .catch(error=>{
//                 setError(error.message);
//                 setLoading(false);
//             })
//         },[]
//     )
//     return (
//         <div>
//             <h1>Users</h1>
//             {isLoading ?(<h2>... isLoading</h2>):
//             error ?(<h2>Error {error}</h2>)
//             :(users.map(user=>(<div key={user.id}>
//                 <h2>UserName: {user.name}</h2>
//                 <p>UserMail: {user.email}</p>
//             </div>))
//             )
//             }
//         </div>
//     )
// }
// export default App


// try catch finally ka use in API

// import { useState,useEffect } from "react";
// function App(){
//     const [users,setUser]=useState([]);
//     const [isLoading,setLoading]=useState(true);
//     const [error,setError]=useState(null);
//     useEffect(
//         ()=>{
//             async function getUsers() {
//                 try{
//                     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//                     if(!response.ok){
//                         throw new Error("API request fail!");
//                     }
//                     const data= await response.json();
//                     setUser(data);
//                 }catch (error){
//                     setError(error.message);
//                 }finally{
//                     setLoading(false);
//                 }
//             }
//             getUsers();
//         },[]
//     )
//     if(isLoading){
//         return <h2>... is Loading</h2>
//     }
//     if(error){
//         return <h2>Error:{error}</h2>
//     }
//     return (
//         <div>
//             <h1>Users</h1>
//             {users.map(user=>(
//                 <div key={user.id}>
//                     <h2>UserName: {user.name}</h2>
//                    <p>UserMail: {user.email}</p>
//                 </div>
//         ))}
//         </div>
//     )
// }
// export default App




// import { useState } from "react";
// function App(){
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [error,setError]=useState(null);
//     const [isLoading,setLoading]=useState(false);
//     const [isSuccess,setSuccess]=useState(false);
//     const [createdUser,setCreatedUsers]=useState(null);
//     async function handleSubmit(event){
//         event.preventDefault();
//         setLoading(true);
//         setError(null);
//         setSuccess(false);
//         setCreatedUsers(null);
//         try{
//             const response= await fetch("https://jsonplaceholder.typicode.com/users",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type":"application/json"
//                     },
//                     body:JSON.stringify({name,email})
//                 }
//             );
//             if(!response.ok){
//                 throw new Error("API request fail!");
//             }
//             const data= await response.json();
//             console.log(data);
//             setCreatedUsers(data);
//             setSuccess(true);
//             setName("");
//             setEmail("");
//         }catch(error){
//             setError(error.message);
//         }finally{
//             setLoading(false);
//         }
//     }
//    return(
//    <form onSubmit={handleSubmit}>
//         <input type="text" value={name} placeholder="enter your name"
//           onChange={(event)=>setName(event.target.value)}
//         />
//         <input type="email" value={email} placeholder="enter your email"
//           onChange={(event)=>setEmail(event.target.value)}
//         />
//         <button type="submit" disabled={isLoading}>
//             {isLoading? "Create...":"Add User"}
//         </button>
//         {error && <p>{error}</p>}
//         {isSuccess && <p>Successfully Creating data!</p>}
//         {createdUser &&(<div>
//             <h1>Created Users</h1>
//             <p>ID: {createdUser.id}</p>
//             <p>Name: {createdUser.name}</p>
//             <p>Email: {createdUser.email}</p>
//         </div>)
//         }
//     </form>)
// }
// export default App



// import { useState } from "react";
// function App(){
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [isLoading,setLoading]=useState(false);
//     const [error,setError]=useState(null);
//     const [updateUsers,setUpdateUsers]=useState(null);
//     async function handleSubmit(event){
//         event.preventDefault();
//         setLoading(true);
//         setError(null);
//         try{
//             const response= await fetch("https://jsonplaceholder.typicode.com/users/3",
//                 {
//                     method:"PUT",
//                     headers:{
//                         "Content-Type":"application/json"
//                     },
//                     body:JSON.stringify({
//                         name,email
//                     })
//                 }
//             )
//             if(!response.ok){
//                 throw new Error("Update data fail!");
//             }
//             const data= await response.json();
//             console.log(data);
//             setUpdateUsers(data)
//         }catch(error){
//             setError(error.message);
//         }finally{
//             setLoading(false);
//         }
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//              type="text" value={name} placeholder="Update your name:"
//               onChange={(event)=>setName(event.target.value)}
//             />
//             <input
//               type="email" value={email} placeholder="update your email:"
//               onChange={(event)=>setEmail(event.target.value)}
//             />
//             <button type="submit" disabled={isLoading}>
//                 {isLoading ?"updating Users":"Add updating Users"}
//             </button>
//             {error && <p>{error}</p>}
//             {updateUsers &&(
//                 <div>
//                     <h1>Update User's</h1>
//                     <p>ID: {updateUsers.id}</p>
//                     <p>Update Name: {updateUsers.name}</p>
//                     <p>Update Email: {updateUsers.email}</p>
//                 </div>
//             )}
//         </form>
//     )
// }
// export default App


// deleted fuction 

// import { useState } from "react";
// function App(){
//     const [isLoading,setLoading]=useState(false);
//     const [error,setError]=useState(null);
//     const [delData,setForDelete]=useState(false);
//     async function handleDelte(){
//         setLoading(true);
//         setForDelete(false);
//         setError(null);
//         try{
//             const response=await fetch("https://jsonplaceholder.typicode.com/users/3",{
//                 method:"DELETE"
//             });
//             if(!response.ok){
//                 throw new Error("API request fail for del data!");
//             }
//             const data= await response.json();
//             console.log("Successfully Deleting data!");
//             setForDelete(true);
//         }
//         catch(error){
//             setError(error.message);
//         }finally{
//             setLoading(false);
//         }
//     }
//     return(
//         <div>
//             <button onClick={handleDelte} disabled={isLoading}>
//                 {isLoading ? "Deleting...":"User deleted!"}
//             </button>
//             {error &&<P>{error}</P>}
//             {delData && <p>User Deleted Successfully!</p>}
//         </div>
//     )
// }
// export default App


// CRUD functions 
import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// ================== API FUNCTIONS ==================

async function getUsers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("API request failed!");
    }

    return await response.json();
}


// ================== CREATE ==================

async function createdUser(user) {
    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to create new user!");
    }

    return await response.json();
}


// ================== UPDATE ==================

async function updateUser(id, user) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to update user!");
    }

    return await response.json();
}


// ================== DELETE ==================

async function deletedUser(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete user!");
    }

    return true;
}


// ================== APP ==================

function App() {

    // ================== STATES ==================

    const [users, setUsers] = useState([]);

    const [isLoading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    // ADD USER STATES

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [isAdding, setIsAdding] = useState(false);


    // UPDATE USER STATES

    const [editId, setEditId] = useState(null);

    const [editName, setEditName] = useState("");

    const [editEmail, setEditEmail] = useState("");

    const [isUpdating, setIsUpdating] = useState(false);


    // ================== GET USERS ==================

    useEffect(() => {

        async function loadedUsers() {

            try {

                const data = await getUsers();

                setUsers(data);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }
        }

        loadedUsers();

    }, []);


    // ================== POST ==================

    async function handleAddUser(event) {

        event.preventDefault();

        setError(null);
        setIsAdding(true);

        try {

            const data = await createdUser({
                name,
                email
            });

            console.log("Created:", data);

            setUsers((prevUsers) => [
                ...prevUsers,
                data
            ]);

            setName("");
            setEmail("");

        } catch (error) {

            setError(error.message);

        } finally {

            setIsAdding(false);

        }
    }


    // ================== EDIT ==================

    function handleEdit(user) {

        setEditId(user.id);

        setEditName(user.name);

        setEditEmail(user.email);

    }


    // ================== PUT ==================

    async function handleUpdate(event) {

        event.preventDefault();

        setError(null);
        setIsUpdating(true);

        try {

            const data = await updateUser(editId, {
                name: editName,
                email: editEmail
            });

            console.log("Updated:", data);

            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === editId
                        ? data
                        : user
                )
            );

            setEditId(null);

            setEditName("");

            setEditEmail("");

        } catch (error) {

            setError(error.message);

        } finally {

            setIsUpdating(false);

        }
    }


    // ================== DELETE ==================

    async function handleDelete(id) {

        setError(null);

        try {

            await deletedUser(id);

            setUsers((prevUsers) =>
                prevUsers.filter(
                    (user) => user.id !== id
                )
            );

        } catch (error) {

            setError(error.message);

        }
    }


    // ================== LOADING ==================

    if (isLoading) {

        return (
            <h2>
                Loading users...
            </h2>
        );

    }


    // ================== UI ==================

    return (

        <div>

            <h1>Users CRUD App</h1>


            {/* ERROR */}

            {error && (
                <p>
                    Error: {error}
                </p>
            )}


            {/* ================== ADD USER ================== */}

            <h2>Add User</h2>

            <form onSubmit={handleAddUser}>

                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                />

                <button
                    type="submit"
                    disabled={isAdding}
                >
                    {isAdding
                        ? "Adding..."
                        : "Add User"}
                </button>

            </form>


            {/* ================== UPDATE FORM ================== */}

            {editId && (

                <div>

                    <h2>
                        Update User
                    </h2>

                    <form onSubmit={handleUpdate}>

                        <input
                            type="text"
                            value={editName}
                            onChange={(event) =>
                                setEditName(
                                    event.target.value
                                )
                            }
                        />

                        <input
                            type="email"
                            value={editEmail}
                            onChange={(event) =>
                                setEditEmail(
                                    event.target.value
                                )
                            }
                        />

                        <button
                            type="submit"
                            disabled={isUpdating}
                        >
                            {isUpdating
                                ? "Updating..."
                                : "Update User"}
                        </button>


                        <button
                            type="button"
                            onClick={() => {

                                setEditId(null);

                                setEditName("");

                                setEditEmail("");

                            }}
                        >
                            Cancel
                        </button>

                    </form>

                </div>

            )}


            {/* ================== USERS LIST ================== */}

            <h2>
                Users
            </h2>

            {users.map((user) => (

                <div key={user.id}>

                    <h3>
                        {user.name}
                    </h3>

                    <p>
                        {user.email}
                    </p>


                    {/* EDIT */}

                    <button
                        onClick={() =>
                            handleEdit(user)
                        }
                    >
                        Edit
                    </button>


                    {/* DELETE */}

                    <button
                        onClick={() =>
                            handleDelete(user.id)
                        }
                    >
                        Delete
                    </button>

                    <hr />

                </div>

            ))}

        </div>

    );
}

export default App;