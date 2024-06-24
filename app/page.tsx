import Image from 'next/image';
import ProjectSection from '../app/projectSection/page';

export default function Dashboard() {
  return (
    <>
      <div className='relative overflow-hidden hero-wrapper pt-16 border-b-gray-200 border-b border-solid flex justify-center shadow-sm'>
        <div className='bg-ournaments absolute inset-0'></div>
        <div className='h-[30rem] md:h-[26rem] mt-12 md:mt-0 bg-opacity-20 flex flex-col md:flex-row mx-10 max-w-6xl self-center'>
          <div className='flex flex-col justify-center md:w-1/2 w-full'>
            <p className='text-gray-900 text-[2.5rem] font-bold font-commissioner mb-2 z-20'>
              a happy computer science student
            </p>
            <p className='text-gray-900 text-[2.5rem] font-normal font-commissioner leading-none z-20'>
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
              SQL
            </div>
            <div className='z-10 absolute px-4 py-1 bg-[#0367D7] rounded-full top-48 left-20 shadow-md text-sm'>
              React Native
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
      <div className='keep-in-touch-section py-12 px-6 bg-gray-100 flex justify-center items-center'>
        <div className='max-w-4xl mx-auto text-center items-center justify-center flex-col'>
          <h2 className='text-3xl font-bold font-commissioner mb-4 text-gray-900'>
            Keep in Touch
          </h2>
          <p className='text-gray-700 text-lg mb-8'>
            I'd love to hear from you! Whether you have a question about
            projects, collaborations, or just want to say hi, feel free to get
            in touch.
          </p>
          <div className='flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 w-full mx-auto items-center'>
            <a
              href='mailto:rafii.alghafari@gmail.com'
              className='px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition'
            >
              Email Me
            </a>
            <a
              href='https://www.linkedin.com/in/rafiialgh/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/rafiialgh'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
