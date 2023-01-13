//fetch data from user api

// import axios from "axios";
// import {useEffect,useState} from "react"

// function App() {
//   const [userdata,updateUserData]=useState([])
//   async function fetchData(){
//     const response=await axios.get("https://randomuser.me/api/?results=2")
//     //console.log("response",response.data.results)
//     updateUserData((userdata)=>[...response.data.results])
//   }
//   useEffect(()=>{
//     fetchData()
//   },[]);
//   console.log('response',userdata[0])
//   return (
//     <h1>Hello</h1>
//   );
// }

// export default App;
  


//build user card grid

// import {useEffect,useState} from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import Header from './components/Header';
// import UserCard from './components/UserCard';
// function App() {
//   const [userdata,updateUserData]=useState([])
//   async function fetchData(){
//     const response=await axios.get("https://randomuser.me/api/?results=5")
//     //console.log("response",response.data.results)
//     updateUserData((userdata)=>[...response.data.results])
//   }
//   useEffect(()=>{
//    fetchData()
//   },[]);
//   console.log('response',userdata[0])
//   return (
//     <>
//     <Header/>
//     <div className='container d-flex justify-content-center w-100'>
//       <div className='row'>
//       {userdata.map((userItem)=>{
//       return <UserCard userItem={userItem}/>
//       })
//       }
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;
  

//useeffect

// import { useState,useEffect } from "react";

// function App(){
//   const [currentAge,setCurrentAge]=useState(15)
//   const [currentUserType,setCurrentUserType]=useState('Teenager');
//   useEffect(()=>{
//     console.log("useeffect with empty dependency ")
//   },[])
//   useEffect(()=>{
//     //used to respond to state variable changes
//     console.log("state variable dependency ")
//     if(currentAge>=18){
//       setCurrentUserType("Adult")
//     }
//   },[currentAge])
//   return(
//     <>
//     <h1>Current Age is :{currentAge}</h1>
//     <h1>Currently user is a:{currentUserType}</h1>
//     <button onClick={()=>setCurrentAge(currentAge+1)}>click me</button>
//     </>
//   )
// }
// export default App;



//how to fetch data using API calls in reactjs

// import { useState,useEffect } from "react";
// import axios from "axios";
// function App(){
//   const [currentAge,setCurrentAge]=useState(15)
//   const [userDetails,setUserDetails]=useState(null)
//   const [currentUserType,setCurrentUserType]=useState('Teenager');
//   async function getUserDetails(){
//     try{
//       const response=await axios.get("https://randomuser.me/api/");
//       console.log('response',response)
//       setUserDetails(response.data.results[0])
//     }catch(error){
//       console.log('error in getting user details',error)
//     }
//   }
//   useEffect(()=>{
//     //console.log("useeffect with empty dependency ")
//     getUserDetails(response.data.results[0])
//   },[])
//   useEffect(()=>{
//     //used to respond to state variable changes
//     console.log("state variable dependency ")
//     if(currentAge>=18){
//       setCurrentUserType("Adult")
//     }
//   },[currentAge]);
//   if(userDetails){

//   return(
//     <>
//     <h1>Current Age of {userDetails.name.first} {userDetails.name.last} is:{" "} {currentAge</h1>
//     <h1>Currently {userDetails.name.first} is a:{currentUserType}</h1>
//     <div>
//     <button onClick={()=>setCurrentAge(currentAge+1)}>click me</button>
//    </div>
//     </>
//   )
// }else{
//   return(<div>loading data..</div>)
// }
// }
// export default App;