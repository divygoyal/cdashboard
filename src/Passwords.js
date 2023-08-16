import React from 'react'
import { useState,useEffect } from 'react';
import "../src/passtable.css"
const Passwords = () => {

    const helper = ()=>{
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        console.log("hello");
          navigation.classList.toggle("active");
          main.classList.toggle("active");
      }

    const [latestUsers, setLatestUsers] = useState([]);

  useEffect(() => {
    async function fetchLatestUsers() {
        try {
          const response = await fetch('https://apidashboard.onrender.com/buyerslist');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
          setLatestUsers(data);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    fetchLatestUsers();
  }, []);
  return (
    <div className='main'>
    <div className="topbar">
                <div className="toggle" onClick={helper}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here"/>
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>

                <div className="user">
                    <img src="assets/imgs/customer01.jpg" alt=""/>
                </div>
            </div>

            <div className="passtable">
            <table style={{margin:"auto" , alignItems:"center"}}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Passwords</td>
            </tr>
        </thead>
        <tbody>
           {
            latestUsers.map( (item) => {
                
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                    </tr>
                )
            })
           } 
        </tbody>
      </table>
            </div>
      
    </div>
  )
}

export default Passwords
