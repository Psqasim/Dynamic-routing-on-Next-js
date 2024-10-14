
import Link from "next/link";
import Image from 'next/image';
import map from "/map.jpg"


export default function Coun(){
    return(
        <>
        <div className="flex flex-col  bg-gray-100">
        <Image src={map}  alt="map" className="map"/>
        <div className="flex flex-col  p-6 rounded-lg shadow-lg">
            <h1 className="grid justify-items-center 
          text-purple-800	text-2xl text-transform: uppercase text-xl font-semibold">LIST OF FIVE COUNTRIES INFO</h1>
      <ul className="text-center ">
        
        <li><u><Link href="/Navbar/country/china" >CHINA</Link></u></li>
        <li><u><Link href="/Navbar/country/russia">RUSSIA</Link></u></li>
        <li><u><Link href="/Navbar/country/japan">JAPAN</Link></u></li>
        <li><u><Link href="/Navbar/country/germany">GERMANY</Link></u></li> 
        <li><u><Link href="/Navbar/country/usa">USA</Link></u></li>
        </ul>
        </div>
        <div>
        <h2 className="">
            <b> NOTE! <br />
            *sreach any country name  in url you find not found EROR excepted uper five conntries names* <br />
            !Example: <u> localhost:3000/Navbar/country/pak </u>
            </b>
            </h2>
            </div>

        
      
    
        </div>
        </>
    )
}