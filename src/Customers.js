import React from 'react'
import { useState, useEffect } from 'react';
import "../src/customers.css"


// import '../styles/buyers.css'
  

const Customers = () => {

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

  const carImages = {
    'Alto': 'https://images.hindustantimes.com/auto/auto-images/Maruti/Alto%20800/exterior_marutisuzuki-alto_front-right-side_630x420.jpg',
    'Brezza': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Brezza/8679/1675859019982/front-left-side-47.jpg',
    'Swift': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift-Dzire/7664/1675859508504/front-left-side-47.jpg',
    'Ertiga': 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/8711/1675861057213/front-left-side-47.jpg',
    'Baleno': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/8674/1675858584706/front-left-side-47.jpg',
    'Dzire': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift-Dzire/7664/1675859508504/front-left-side-47.jpg',
    'Wagonr': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Wagon-R/8835/1675922419979/front-left-side-47.jpg',
    'Eeco': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkD7aNYxJlphJFiKG5EBxYb9Q2SgpRJHQWUCyHOCIKEIJMUKsUoWdupy3jvHyEFxDQ8WNPbJLP05E&usqp=CAU&ec=48665701',
    'S-Presso': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/S-Presso/9218/1675862009313/front-left-side-47.jpg',
    'XL6': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/XL6/8955/1675923460600/front-left-side-47.jpg',
    'Ignis': 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ignis/7584/1583132645318/front-left-side-47.jpg',
    'Ciaz': 'https://nexaprod1.azureedge.net/-/media/feature/nexaworldarticle/atvsmt_thumbnail.webp?modified=20220119091504',
    'Grand Vitara': 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Grand-Vitara/4082/1664252008581/front-left-side-47.jpg',
    'Jimny': 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Jimny/6182/1673507280721/front-left-side-47.jpg?tr=w-456',
    'Fronx': 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1673943130006/front-left-side-47.jpg?tr=w-456',
  };


return (
  <>
  <div className="main">
    
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

  <div className="headd">
  <span className="icon">
    <ion-icon name="people-outline"></ion-icon>
  </span>
    <h1>Customers</h1>
  </div>
    
    <div className="grid-container">
      {latestUsers.map(user => {
        const date_string = user.date;
        const date_obj = new Date(date_string);
        const datelo = date_obj.toISOString().split('T')[0];
        return (
        <div className="grid-item">
              <img src={carImages[user.car]} alt={user.car} />
          <div>
              <div className="carname">
                  <h6>{user.car}</h6>
              </div>
              <span></span>
              <div className="info">
                <div className="names" >Buyer Name: {user.name}</div>
                <div className="names" >Location: {user.location}</div>
              </div>
              
          </div>
        </div> 
          
        );
      })}
    </div>

  </div>
  
    
  </>
);
}

export default Customers
