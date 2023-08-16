import React from 'react'
import Dashboard from "./Dashboard";
import Passwords from "./Passwords";
import Customers from "./Customers";
import Messages from './Messages';
import { useEffect,useState } from 'react'
const Navigation = () => {
    const [sidepage , setsidepage] = useState("dashboard");
     const[src , setsrc] =useState("https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/global/maruti-logo.png?h=39&w=194&la=en&hash=56FFFB8CCB01A14FC2CCBDE9E132ADD1") 

  const hovereffect=()=>{
    let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("click", activeLink));
  }
  useEffect(()=>{
    hovereffect();
  },[])
  return (
    <div className="container">
      <div className="navigation">
            <ul>
            
                <li style={{margin:"auto" , width:"fitcontent" , borderRadius:"20px" , marginBottom :"20px" , marginTop:"10px"}}>
                    <a style={{alignItems:"center"}} href="#" >
                        
                            <img 
                            style={{backgroundColor:"white" ,borderRadius:"20px" ,maxHeight:"35px"}} src={src} alt=""/>
                            

                        
                    </a>
                </li>

                <li>
                    <a href="#" onClick={()=>{console.log("hello");setsidepage("dashboard")}}>
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#" onClick={()=>{setsidepage("customers")}}>
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>

                <li>
                    <a href="#" onClick={()=>{setsidepage("messages")}} >
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li>
                    <a href="#" onClick={()=>{setsidepage("passwords")}}>
                        <span className="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span className="title">Password</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>

        {
            sidepage === "dashboard" ? <Dashboard /> :
                sidepage === "customers" ? <Customers /> :
                sidepage === "passwords" ? <Passwords /> :
                sidepage === "messages" ? <Messages/> :
                null
        }
        

            
            
            
                
    </div>
  )
}

export default Navigation

