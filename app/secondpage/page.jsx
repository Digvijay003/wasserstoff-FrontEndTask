"use client"
import Image from 'next/image';
import Carousel from '../components/Carousel';
import { FaOutdent } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';



export default function page() {
    const router=useRouter()

    const handleClick=()=>{
        router.push('/')

    }
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="p-4 flex items-center">
        <FaOutdent size='60px'/>
      
        <h1 className="text-4xl font-bold ml-3 text-yellow-500">Astrix.</h1>
      </header>
      
      <main className="flex">
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">
          <div className="relative">
            <Image src="/images/guitar.jpeg" alt="Event 1" layout="fill" objectFit="cover"  className="big-images"/>
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-center p-2">Event Name</div>
          </div>
          <div className="relative">
            <Image src="/images/laptop.jpeg" alt="Event 2" layout="fill" objectFit="cover" className="big-images"/>
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-center p-2">Event Name</div>
          </div>
        </div>

        <div className="w-1/12 bg-purple-400 text-center p-4 overflow-hidden relative text-2xl font-bold text-black">
            <div className="absolute w-full h-full animate-scroll">
            <p className="transform -rotate-90 whitespace-nowrap">Collection Live: Me tour, JLN Stadium, Delhi</p>

            </div>
          
        </div>

        <div className="w-1/4 p-4">
          <h2 className="text-2xl font-bold mb-4">Explore Your First Event</h2>
          <h3 className="text-xl font-bold mb-2">Event Name</h3>
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Venue</span>
            <span className="mx-2">•</span>
            <span>04/03/2024 @19:00</span>
          </div>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</p>
          <h4 className="text-lg font-bold mb-2">Artist Lineup</h4>
         <Carousel/>
        </div>
      </main>
      <div onClick={handleClick} className='flex justify-center my-10 cursor-pointer'>
        <FaRegArrowAltCircleLeft size='80px'/>

      </div>
    </div>
  );
}
