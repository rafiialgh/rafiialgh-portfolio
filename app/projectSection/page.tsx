import Image from 'next/image';
import ProjectBox from '../components/ProjectBox';

export default function ProjectSection() {
  return (
    <>
      <section className='relative py-10 border-b border-solid border-gray-200'>
        <div className='inset-0 -z-[2] absolute bg-gradient-to-b from-white from-1% via-transparent'></div>
        <div className='bg-grid absolute inset-0 -z-[3]'></div>
        <div className='flex justify-center'>
          <div className='max-w-6xl mx-5 w-full'>
            <div className='mb-5'>
              <h1
                className='font-plusJakartaSans font-bold text-xl text-gray-900'
                id='contact-me'
              >
              Highlighted projects
              </h1>
            </div>
            <div className='grid grid-cols-1 gap-3 justify-items-center space-y-4'>
              <ProjectBox
                image='/project-1.png'
                title='StoreGG'
                desc='is your go-to destination for hassle-free and secure game top-ups. Elevate your gaming experience with instant, 24/7 credits for a wide range of games.'
                platform='Web'
                stack='Next.js'
                prod='store-gg-ten.vercel.app'
                prodLink='https://store-gg-ten.vercel.app/'
              />
              <ProjectBox
                image='/project-2.png'
                title='Creassed.co'
                desc='Discover the latest trends and elevate your style with our curated collection of fashion products. From clothing to stylish accessories.'
                platform='Web'
                stack='Next.js'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
