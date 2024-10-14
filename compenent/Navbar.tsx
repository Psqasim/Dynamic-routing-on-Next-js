import Link from "next/link";
import Image from 'next/image';
import ejpg from "/log.jpg";

export default function Nav() {
  return (
    <>
      <div className="bod">
        <nav className="nav">
          {/* Image logo on the left */}
          <Image 
            src={ejpg} 
            
            alt="Picture of the author" 
            className="bat"
          />
          {/* Navigation links on the right */}
          <ul>
            <li><Link href="/Navbar/home">HOME</Link></li>
            <li><Link href="/Navbar/about">ABOUT</Link></li>
            <li><Link href="/Navbar/country">COUNTRY</Link></li>
          </ul>
        </nav>
       
      </div>

     
    </>
  );
}
