"use client"
import Image from "next/image";
import { FaOutdent } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';



export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = () => {
      router.push('/secondpage'); // Replace '/another-page' with your target page path
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [router]);
  return (
    <div className="bg-amber-200 min-h-screen flex flex-col items-center justify-center py-10 px-5">
    <div className="absolute top-0 left-0 m-4 flex justify-content-center items-center gap-5 text-lg">
    <FaOutdent size='60px'/>
    <p className='text-lg'>Astrik</p>
      </div>
    <div className="text-center">
      <div className="text-5xl font-bold">
        <span>WE</span>
        <span className="inline-block relative mx-2">
          <Image src="/images/guitar.jpeg" alt="Decoration"  objectFit="cover" width={60} height={50}className="image-right" />
        </span>
        <span>ORGANIZE THE</span>
      </div>
      <div className="text-5xl font-bold">
        <span>CONNECTION</span>
        <span className="inline-block relative mx-2">
          <Image src="/images/laptop.jpeg" alt="Decoration"  objectFit="cover" width={60} height={50}className="image-right" />
        </span>
        <span>BETWEEN</span>
      </div>
      <div className="text-5xl font-bold">
        <span>ARTIST</span>
        <span className="inline-block relative mx-2">
          <Image src="/images/cricket.jpeg" alt="Decoration"  objectFit="cover"width={60} height={50}className="image-right"  />
        </span>
        <span>MUSIC</span>
      </div>
      <div className="text-5xl font-bold">
        <span>CULTURE</span>
        <span className="inline-block relative mx-2">
          <Image src="/images/cricket2.jpeg" alt="Decoration"  objectFit="cover"width={60} height={50}className="image-right"  />
        </span>
        <span>ART & COLLECTIONS</span>
      </div>
    </div>
  </div>
   
  );
}


