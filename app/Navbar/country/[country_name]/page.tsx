
import Image from "next/image";
import page from "/not.jpg";
import info from "/info.jpg";
export default function Country({params}:any) {
  let Country_info:{
    name: string;
    population: string;
    capital:string;
    continent: string;
    currency: string;
  }[]=[
    {
      name: 'China',
      population: '1.4 billion',
      capital: 'Beijing',
      continent: 'Asia',
      currency: 'Renminbi (Yuan)',
    },
    {
      name: 'Russia',
      population: '146 million',
      capital: 'Moscow',
      continent: 'Europe/Asia',
      currency: 'Russian Ruble',
    },
    {
      name: 'Japan',
      population: '125 million',
      capital: 'Tokyo',
      continent: 'Asia',
      currency: 'Japanese Yen',
    },
    {
      name: 'Germany',
      population: '83 million',
      capital: 'Berlin',
      continent: 'Europe',
      currency: 'Euro',
    },
    {
      name: 'USA',
      population: '331 million',
      capital: 'Washington, D.C.',
      continent: 'North America',
      currency: 'US Dollar',
    }
  ]
  
  function findCount(country_url:string){
      
           return Country_info.find(country=>country.name.toLowerCase()==country_url.toLocaleLowerCase())
  }

  let answer= findCount(params.country_name)
    
  

  return(
    <div>
        
        {
          answer?(
            <div className="flex flex-col  bg-gray-100">
              <h1 className="grid justify-items-center 
          text-purple-800	text-2xl, text-transform: uppercase text-xl font-semibold	"><u>COUNTRY INFO</u></h1>
              <div className=" p-6 rounded-lg shadow-lg text-center font-semibold	text-xl	 ">
              <Image src={info}  alt="map" className="info"/>
                <ul className="uppercase text-sky-600		 ">
                  <li >country name: {answer.name}</li>
                  <li> population: {answer.population} </li>
                  <li>capital: {answer.capital}</li>
                  <li>continent: {answer.continent}</li>
                  <li>currency: {answer.currency}</li>
                </ul>
              </div>
             
            </div>
          )
          :( 
            <>
            <div className="flex flex-col  bg-gray-100" >
              
              <h1 className="grid justify-items-center 
          text-red-600	text-2xl, text-transform: uppercase text-xl font-semibold">{params.country_name}: country not found 404 error</h1>
          
         
            </div>
            <Image src={page} alt="error" className="mx-auto"
            width={500} // Image width
            height={300} />
           </>
          )
        }

    </div>
  )
}