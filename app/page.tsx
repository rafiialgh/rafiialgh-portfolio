import Image from "next/image";
import ProjectSection from "../app/projectSection/page";

export default function Dashboard() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="relative overflow-hidden hero-wrapper pt-16 md:pt-5 border-b-gray-200 border-b border-solid flex justify-center">
        {/*<div className='bg-ournaments absolute inset-0'></div>*/}
        <div className="h-[26rem] md:h-[23rem] mt-3 md:mt-10 bg-opacity-20 flex flex-col md:flex-row mx-5 md:mx-10 w-full gap-5 md:gap-0 max-w-6xl">
          <div className="flex flex-col justify-center md:w-1/2 lg:w-full">
            <p className="text-gray-900 text-2xl md:text-4xl font-bold font-plusJakartaSans mb-2 z-20">
              a happy computer science student
            </p>
            <p className="text-gray-900 text-2xl md:text-4xl font-medium font-plusJakartaSans leading-none z-20">
              who is passionate about building technology that empowers people
            </p>
          </div>

          <div className="relative w-full h-full flex justify-center mt-5 md:mt-0">
            <div className="relative w-full h-full max-w-md md:max-w-xl font-plusJakartaSans">
              {/* Next.js */}
              <div className="absolute bottom-8 left-5 z-10 px-3 md:px-4 py-1 bg-black rounded-full shadow-md text-xs md:text-sm md:bottom-24 md:left-9">
                Next.Js
              </div>

              {/* Rest API */}
              <div className="absolute bottom-10 right-5 z-10 px-3 md:px-4 py-1 bg-teal-800 rounded-full shadow-md text-xs md:text-sm md:bottom-16">
                Docker
              </div>

              {/* Laravel */}
              <div className="absolute top-8 right-20 z-10 px-3 md:px-4 py-1 bg-[#FF2C1F] rounded-full shadow-md text-xs md:text-sm md:top-20 md:right-12">
                Rest API
              </div>

              {/* React.js */}
              <div className="absolute top-24 left-9 z-10 px-3 md:px-4 py-1 bg-[#00C8FF] rounded-full shadow-md text-xs md:text-sm md:top-40 md:left-20">
                React.Js
              </div>

              {/* SQL */}
              <div className="absolute top-10 left-28 z-10 px-3 md:px-4 py-1 bg-[#DA2877] rounded-full shadow-md text-xs md:text-sm md:top-16">
                SQL
              </div>

              {/* React Native */}
              <div className="absolute bottom-24 right-7 z-10 px-3 md:px-4 py-1 bg-[#0367D7] rounded-full shadow-md text-xs md:text-sm md:bottom-56 md:right-36">
                React Native
              </div>
            </div>

            <div className="absolute -bottom-5 md:-bottom-4 flex justify-center items-center w-full max-w-md">
              <video
                // src="/Emoji.webm"
                className="w-40 md:w-60"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src="/Emoji.MOV" type='video/mp4; codecs="hvc1"' />
                <source src="/Emoji.webm" type="video/webm" />
              </video>
            </div>
            <div className="absolute top-[20px] w-full max-w-md md:w-[80rem] md:bottom-[-10px] absolute-x-center">
              <div className="absolute absolute-y-center absolute-x-center w-full md:w-auto -bottom-34 md:bottom-auto">
                <img
                  src="/circle.svg"
                  className="animate-spin-slow rounded-full md:max-w-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectSection />

      <div className="bg-slate-50 py-10 px-6 flex justify-center items-center ">
        <div className="max-w-6xl flex-row md:flex w-full gap-10">
          <div className="flex-1 mb-8">
            <h1 className="font-plusJakartaSans text-lg text-gray-900 font-semibold">
              I'd love to hear from you!
            </h1>
            <p className="font-plusJakartaSans text-gray-700 font-medium text-sm">
              Whether you have a question about projects, collaborations, or
              just want to say hi, feel free to get in touch.
            </p>
          </div>

          <div className="flex-1 mb-8">
            <h1 className="text-lg font-semibold font-plusJakartaSans text-gray-900">
              Stay Connected
            </h1>
            <div>
              <ul>
                <li>
                  <a
                    href="mailto:rafii.alghafari@gmail.com"
                    className="font-medium text-sm text-gray-700 hover:font-semibold transition-all ease-in"
                  >
                    Email
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/rafiialgh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-gray-700 hover:font-semibold transition-all ease-in"
                  >
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/rafiialgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-gray-700 hover:font-semibold transition-all ease-in"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 mb-8 border-t border-gray-200 flex flex-col md:items-center justify-center gap-1 text-xs text-gray-500 font-plusJakartaSans">
            <p className="mt-2 md:mt-0">
              &copy; {currentYear} Muhammad Rafii Alghaffary. All Rights
              Reserved.
            </p>

            <p className="">
              Built with{" "}
              <span className="font-semibold text-gray-700">Next.Js</span> &{" "}
              <span className="font-semibold text-gray-700">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>

      {/*<div className='keep-in-touch-section py-10 px-6 bg-gray-50 flex justify-center items-center'>
        <div className='max-w-4xl mx-auto text-center items-center justify-center flex-col'>
          <h2 className='text-3xl font-bold font-plusJakartaSans mb-4 text-gray-900'>
            Keep in Touch
          </h2>
          <p className='text-gray-700 text-lg mb-8 font-plusJakartaSans'>
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
      </div>*/}
    </>
  );
}
