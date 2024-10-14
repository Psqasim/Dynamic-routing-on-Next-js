import React from "react";
import Image from 'next/image';
import world from "/wo1.jpg"

export default function Main() {

return(

  <div >
   
    <h1 className="grid justify-items-center ...,
          text-purple-800	,text-2xl, text-transform: uppercase text-xl font-semibold	"><b><u>Welcome to  Country Information website!</u></b></h1>
           
        
           {/* flex */}
    <div className="flex flex-col  bg-gray-100">
      <div className="flex flex-col  bg-white p-6 rounded-lg shadow-lg">
       
        <div className="text-center ">
          <p className="text-xl font-semibold">Explore the world of possibilities!</p>
          <p className="text-gray-600">Your journey to discovery starts here.</p>
          <Image  src={world} 
                  
                  alt="Picture of the world" 
                  className="world "/>
          <div className="bg-teal-500"	>
          <p className="text-balance, my-16	">
          &quot;In this project, I created a navigation bar that allows users to easily navigate between the <a className="underline decoration-slate-60">Home and About pages.</a>
        The About page explains the assignment I received, which involved implementing <a className="underline decoration-slate-60">dynamic routing</a> to display details of five different countries. 
        <br />
      
        If <a className="underline decoration-slate-60"> users attempt </a>to access a country that doesn&quot;t exist, they will see a custom <a className="underline decoration-slate-60"> 404 error message indicating that the page was not found</a>&quot;.
      </p>
      
      </div>
        </div>
      </div>
      </div>
        
        </div>
)
}

