import Head from "next/head";
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Template</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-blue-900 text-white px-12">
          
          <div className="  py-24 space-y-10 md:grid grid-cols-2 md:-mt-6 lg:grid-cols-4 ">
            
            <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
              
              <h1 className=" text-xl font-medium">Baselane</h1>
              
            </div>
            <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
              
              <h1 className=" text-xl font-bold ">
                
                Company
              </h1>
              <ul className="mt-2 ">
                
                <li>
                  
                 
                  <a>
                    
                    About Baselane
                  </a>
                </li>
                <li>
                   <a>
                   Careers
                  </a>
                </li>
               </ul>
            </div>
            <div className="leading-9 md:w-3/4 md:order-4">
               <h1 className=" text-xl font-bold">
                Resources
              </h1>
              <ul className="mt-2 ">
                  <li>
                  <a>
                    Pricing
                  </a>
                </li>
                <li>
                   <a>
                   Help Center
                  </a>
                </li>
                <li>
                   <a>
                     Terms & Conditions
                  </a>
                </li>
                <li>
                  <a>
                     Privacy Policy
                  </a>
                </li>
               </ul>
            </div>
            <div className="md:order-2 lg:order-last">
              <h1 className=" text-xl font-bold ">
                 Contact
              </h1>
              <p className=" w-3/5 leading-7 mb-5 mt-2 md:w-3/4">
                 280 Park Ave <br/> New York , NY 10017"
              </p>
              <p className=" w-3/5 leading-7 mb-5 md:w-3/4">
                 280 Park Ave 
              </p>
              <br />
              <p className=" w-3/5 leading-7 mb-5 md:w-3/4">
                 280 Park Ave <br/> New York , NY 10017"
              </p>
             </div>
            </div>
           <div  className=' text-gray-600'>
          <hr />
             <div className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                <p className="py-8">
                @ <strong>2020 , Baselane .</strong>All Rights Reserved
              </p>
              </div>
          </div>
         
        </section>
        
      </main>
    </>
  );
}
