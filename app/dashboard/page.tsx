import Image from 'next/image';
import ProjectSection from '../projectSection/page';

export default function Dashboard() {
  return (
    <>
      <div className='relative overflow-hidden hero-wrapper pt-16 border-b-gray-200 border-b border-solid flex justify-center shadow-sm'>
        <div className='bg-ournaments absolute inset-0'></div>
        <div className='h-[26rem] sm:h-[23rem] mt-12 md:mt-0 bg-opacity-20 flex flex-col md:flex-row mx-10 max-w-6xl self-center'>
          <div className='flex flex-col justify-center md:w-1/2 w-full'>
            <p className='text-gray-900 text-[2.5rem] font-bold font-commissioner mb-2 z-10'>
              a happy full-stack developer
            </p>
            <p className='text-gray-900 text-[2.5rem] font-normal font-commissioner leading-none z-10'>
              who is passionate about building technology that empowers people
            </p>
          </div>
          <div className='relative md:w-1/2 font-commissioner -translate-x-14 z-10 hidden md:block'>
            <div className='z-10 absolute px-4 py-1 bg-black rounded-full bottom-24 left-5 shadow-md text-sm'>
              Next.Js
            </div>
            <div className='z-10 absolute px-4 py-1 bg-teal-800 rounded-full bottom-20 right-2 shadow-md text-sm'>
              Rest API
            </div>
            <div className='z-10 absolute px-4 py-1 bg-[#FF2C1F] rounded-full top-14 left-44 shadow-md text-sm'>
              Laravel
            </div>
            <div className='z-10 absolute px-4 py-1 bg-[#00C8FF] rounded-full bottom-48 -right-6 shadow-md text-sm'>
              React.Js
            </div>
            <div className='z-10 absolute px-4 py-1 bg-[#DA2877] rounded-full top-36 right-32 shadow-md text-sm'>
              GraphQL
            </div>
            <div className='z-10 absolute px-4 py-1 bg-[#0367D7] rounded-full top-48 left-20 shadow-md text-sm'>
              Flutter
            </div>
            <div className='absolute w-48 md:w-60 mx-auto left-0 right-10 -bottom-80 md:-bottom-3 translate-x-4 hidden md:block'>
              <video
                src='/Emoji.MOV'
                className='w-full'
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className='absolute w-[60rem] md:w-[80rem] pb-96 top-[20px] md:bottom-[-10px] absolute-x-center hidden md:block'>
              <div className='absolute absolute-y-center absolute-x-center'>
                <img
                  src='/circle.svg'
                  className='animate-spin-slow rounded-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectSection />
      
    </>
  );
}
