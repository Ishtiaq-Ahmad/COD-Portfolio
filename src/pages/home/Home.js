import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import TopNavbar from '../../components/navbar/TopNavbar';
import './Home.css';
import Typed from "react-typed";
import Particles from 'react-particles-js';

function Home() {
    return (
        <div>
        <Particles
            params={{
                particles:{
                    number:{
                        value:30,
                        density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape:{
                        // type: "square",
                        stroke: {
                            width: 6,
                            color:"#0057ED"
                        }
                    }
                }
            }}
        />
        <TopNavbar/>
         <Navbar/>
         <div className="container wrapper">
         <div className="row">
         <div className="col-lg-6 col-sm-12">
         <div className="content">
             <div className="text">
             <p className="typed-text p-typed-text">
             HIRE US FOR
             </p>
             <Typed 
                 className="typed-text"
                 strings={["Web Design", "web development", "android development", "IT consultancy"]}
                 typeSpeed={40}
                 backSpeed={60}   
                 loop/>
             
             

             {/* <h2>Where innovation meet excellence</h2> */}
             <button type="button" class="btn get-started"> Get Started </button>
             </div>
             
         </div>
            
         </div>
         <div className="col-lg-6 col-sm-12">
         <div className="img">
             <div className="social-images">
             {/* <img className="circle-image" src="../images/bootstrap.png" alt="bootstrap"/>
             <img className="circle-image" src="../images/laravel.png" alt="laravel"/>
             <img className="circle-image" src="../images/php.png" alt="php"/>
             <img className="circle-image" src="../images/react.png" alt="react"/>
             <img className="circle-image" src="../images/vue.png" alt="vue"/>
             <img className="circle-image" src="../images/node.png" alt="node"/>
             <img className="circle-image" src="../images/wordpress.png" alt="wordpress"/>
             <img className="circle-image" src="../images/python.png" alt="python"/> */}
             </div>
             <img className="main-image" src="../images/coder1.png" alt="coder"/>
         </div>
         </div>

         </div>

         </div>
           
        </div>
    )
}

export default Home
