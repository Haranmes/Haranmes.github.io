import portrait from '../images/Ramez.jpg'

import React from "react";



function Home() {
   
   
    return(
        <div className="  bg-slate-700 Home">
            <div className="static grid gap-4 grid-cols-1 justify-items-center  ">
                <h1 className="relative top-10 text-center text-white"> I'm Ramez <span className="text-orange-600">Soliman</span></h1>
                <p className="  relative top-10 text-white">Currently a student and hobby webdeveloper</p>
                <button type="button" class="btn btn-primary relative top-10">Contact Me!</button>
                <img src={portrait}  className="rounded-3xl relative top-14 " width='20%' height='auto' alt="Ramez"></img>
                
                
            </div>
            
            <h1  className="text-white relative text-center top-72">My Professions in <span className="text-orange-600">Tech</span></h1>
            <div className="static">
                
            </div>
            
                <div className="static justify-items-center grid  grid-cols-1  ">
                
                <div class="bg-gray-800 h-14  relative py-1 w-6/13 h-100 rounded  border-b-4 border-red-400 top-80  justify-content-center">
                        <h1 class="text-lg w-10/13 text-white text-center">Programming Knowledge</h1>
                        <p className="text-white  text-sm w-10/13 text-center">I have started my porgramming journy in the year 2019 when I got my first personal computer. Since then I've learned many different technologies and faced various issues that I've learned to overcome
                        I've the most knowledge in in these languages:  </p>
                        <ul className="list-disc list-outside text-left text-white">
                            <li>HTML/CSS/JavaScript</li>
                            <li>React.js and Tailwind CSS</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                        <p className="text-white text-center text-sm w-10/13">Still, my true passion lies within <span className="text-orange-600">Web developement</span> and <span className="text-orange-600">machine learning.</span></p>
                        
                        
                    </div>  
                 
                        
                </div>
            
           
        </div>
        
    )
}




export default Home;