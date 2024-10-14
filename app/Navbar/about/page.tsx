import Image from "next/image"
import about from "/about.jpg"
export default function ABOUT(){
    return(
        <div>
          <h1 className="grid justify-items-center ...,
          text-indigo-800	color: rgb(55 48 163) text-2xl font-semibold"><b><u>ABOUT PAGE</u></b></h1>
          
          <div className="flex flex-col  bg-gray-100">
      <div className="flex flex-col  bg-white p-6 rounded-lg shadow-lg">
        <Image
              src={about} alt={"about pic"} 
              className="about"        
        
        />
       
        <div className="text-center ">
        <div className= "bg-teal-500	">
          <p className=" m-8 ...">
       * Our instructor gave us an assignment to create dynamic routes in a Next.js project. 
        We were asked to display a list of five countries using objects and pass them as props to different components. 
      </p>
      <p className="m-8 ...">
        *The task involved using dynamic routing to display each country’s details on a separate page. 
        Additionally, if a user tries to access a non-existent country, a custom 404 error message should be displayed.
        </p>
        </div>
          <div/>
          </div>
          </div>
          </div>
         
        </div>
    )
}