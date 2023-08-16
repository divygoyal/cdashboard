import { set } from 'mongoose';
import React, { useEffect, useState } from 'react'
const Dashboard = () => {

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

    const helper = ()=>{
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        console.log("hello");
          navigation.classList.toggle("active");
          main.classList.toggle("active");
      }
      const[data , setdata] = useState([]);

      useEffect(()=>{
        const retrive = async()=>{
            try{
                const response = await fetch('https://apidashboard.onrender.com/buyerslist' , {
                    method:"GET"
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                const cardata = await response.json();
                setdata(cardata);
                console.log(cardata);
            }catch(error){
                console.error('Fetch error:', error);
            }
            
        }
        retrive();
      },[])
  return (
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

      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">1,504</div>
            <div className="cardName">Daily Views</div>
          </div>
          <div className="iconBx">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{data.length}</div>
            <div className="cardName">Sales</div>
          </div>
          <div className="iconBx">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">284</div>
            <div className="cardName">Comments</div>
          </div>
          <div className="iconBx">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{`$ ${9964}`}</div>
            <div className="cardName">Earning</div>
          </div>
          <div className="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" class="btn">View All</a>
                    </div>

                    <table style={{marginTop:"-160px"}}>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>

                        {
                            data.map((item,i)=>{
                                let prog ="Delivered";
                                if(i%3===0){
                                    prog="pending"
                                }
                                else{
                                    prog="delivered";
                                    
                                }
                             return (
                                <tr>
                                <td>{item.car}</td>
                                <td>{`$ ${12000+237*(i+1)}`}</td>
                                <td>Paid</td>
                                <td><span className= {`status ${prog}`}>{prog}</span></td>
                            </tr>
                             )   
                            })
                        }
                            
                        </tbody>
                    </table>
                </div>

                {/* <!-- ================= New Customers ================ --> */}
                <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>

                    <table>

                    {
                        data.map((item)=>{
                            return(
                                <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={carImages[item.car]} alt=""/></div>
                            </td>
                            <td>
                                <h4>{item.name} <br/> <span>{item.location}</span></h4>
                            </td>
                        </tr>
                            )
                        })
                    }
                        

                        
                    </table>
                </div>
            </div>
      
    </div>
  )
}

export default Dashboard

