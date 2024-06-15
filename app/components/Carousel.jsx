import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex space-x-2 animate-carousel">
        <div className="flex-none w-1/3">
          <Image src="/images/laptop.jpeg" alt="Artist 1" width={300} height={300} objectFit="cover" />
        </div>
        <div className="flex-none w-1/3">
          <Image src="/images/guitar.jpeg" alt="Artist 2" width={300} height={300} objectFit="cover" />
        </div>
        <div className="flex-none w-1/3">
          <Image src="/images/cricket2.jpeg" alt="Artist 3" width={300} height={300} objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
