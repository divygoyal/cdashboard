import React from 'react'
import messimg from "../src/messimg.png"
import "./messages.css"
const Messages = () => {
    const helper = ()=>{
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        console.log("hello");
          navigation.classList.toggle("active");
          main.classList.toggle("active");
      }
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

            <div className="query">
                <div className="ico" >
                    <img src={messimg} alt="" />
                    <h1>Messages</h1>
                </div>

                <div className="messcontent">
                    <div className="messcard">
                        <div className="messcardimg">
                        <img src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000" alt="" />
                        </div>

                        <div className="messcardcontent">
                            <h3 style={{fontWeight:"600"}}>Divy Goyal</h3>
                            <div style={{height:"10px"}}></div>
                            <h5 style={{fontWeight:"400"  , wordSpacing:"1.4" , letterSpacing:"1.5"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi totam asperiores corporis voluptas ab.</h5>
                        </div>
                        
                        
                    </div>
                    <div className="messcard">
                        <div className="messcardimg">
                        <img src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50588.jpg?w=2000" alt="" />
                        </div>

                        <div className="messcardcontent">
                            <h3 style={{fontWeight:"600"}}>Tarun mehta</h3>
                            <div style={{height:"10px"}}></div>
                            <h5 style={{fontWeight:"400"  , wordSpacing:"1.4" , letterSpacing:"1.5"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi totam asperiores corporis voluptas ab.</h5>
                        </div>
                        
                        
                    </div>
                    <div className="messcard">
                        <div className="messcardimg">
                        <img src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000" alt="" />
                        </div>

                        <div className="messcardcontent">
                            <h3 style={{fontWeight:"600"}}>Devanshu</h3>
                            <div style={{height:"10px"}}></div>
                            <h5 style={{fontWeight:"400"  , wordSpacing:"1.4" , letterSpacing:"1.5"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi totam asperiores corporis voluptas ab.</h5>
                        </div>
                        
                        
                    </div>
                    <div className="messcard">
                        <div className="messcardimg">
                        <img src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000" alt="" />
                        </div>

                        <div className="messcardcontent">
                            <h3 style={{fontWeight:"600"}}>Mohit</h3>
                            <div style={{height:"10px"}}></div>
                            <h5 style={{fontWeight:"400"  , wordSpacing:"1.4" , letterSpacing:"1.5"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi totam asperiores corporis voluptas ab.</h5>
                        </div>
                        
                        
                    </div>
                    <div className="messcard">
                        <div className="messcardimg">
                        <img src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000" alt="" />
                        </div>

                        <div className="messcardcontent">
                            <h3 style={{fontWeight:"600"}}>Taniya</h3>
                            <div style={{height:"10px"}}></div>
                            <h5 style={{fontWeight:"400"  , wordSpacing:"1.4" , letterSpacing:"1.5"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi totam asperiores corporis voluptas ab.</h5>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Messages
