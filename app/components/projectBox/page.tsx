import Image from 'next/image';

interface ProjectBoxProps {
  image: string;
  title: string;
  desc: string;
  platform: string;
  stack: string;
  prod?: string;
  prodLink?: string;
}

export default function ProjectBox(props: ProjectBoxProps) {
  const { image, title, desc, platform, stack, prod, prodLink } = props;
  return (
    <>
      <div className='relative border border-solid border-gray-200 max-w-full overflow-hidden rounded-xl group cursor-pointer shadow-sm'>
        <Image
          src={image}
          width={2876}
          height={1602}
          alt='project-1'
          className='object-cover'
        />
        <div className='w-full h-[calc(100%+68px)] absolute top-0 group-hover:-translate-y-[62px] md:group-hover:-translate-y-[65px] transition duration-300 ease-in-out opacity-100 bg-gradient-to-t from-white from-35% md:from-10%'>
          <div className='absolute bottom-0'>
            <div className='px-4 py-4'>
              <h1 className='font-commissioner text-gray-900 font-semibold md:text-2xl'>
                {title}
              </h1>
              <p className='font-commissioner text-gray-900 text-xs md:text-lg'>
                {desc}
              </p>
            </div>
            <div className='px-4 h-[68px] flex flex-row items-start gap-2'>
              <div className='w-fit h-12 md:h-fit border border-solid border-gray-200 rounded-md p-2 leading-tight'>
                <p className='font-commissioner text-xs text-gray-900 font-semibold'>
                  {platform}
                </p>
                <p className='font-commissioner text-[10px] sm:text-xs text-gray-400'>
                  Platform based
                </p>
              </div>
              <div className='w-fit h-12 md:h-fit border border-solid border-gray-200 rounded-md p-2 leading-none'>
                <p className='font-commissioner text-xs text-gray-900 font-semibold'>
                  {stack}
                </p>
                <p className='font-commissioner text-[10px] sm:text-xs text-gray-400'>
                  Tech stack
                </p>
              </div>
              {prod && (
                <div className='relative flex flex-col h-12 md:h-auto w-fit border border-solid border-gray-200 rounded-md p-2 leading-none'>
                  <div className='inline-flex items-center'>
                    <div className='relative'>
                      <div className='absolute animate-ping h-3 w-3 rounded-full bg-sky-400 opacity-75'></div>
                      <div className='relative rounded-full h-3 w-3 bg-sky-500'></div>
                    </div>
                    <p className='font-commissioner text-xs text-gray-900 font-semibold ml-2'>
                      Live in production
                    </p>
                  </div>

                  <a
                    href={prodLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-commissioner text-xs text-gray-400 underline hover:text-gray-600 transition-all inline-flex items-baseline'
                  >
                    {prod}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
