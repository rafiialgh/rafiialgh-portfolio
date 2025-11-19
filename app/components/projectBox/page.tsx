import Image from 'next/image';
import Link from 'next/link';

interface ProjectBoxProps {
  image: string;
  title: string;
  desc: string;
  platform: string;
  stack: string;
  prod?: string;
  prodLink?: string;
}

export default function ProjectBox({
  image,
  title,
  desc,
  platform,
  stack,
  prod,
  prodLink,
}: ProjectBoxProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          quality={100}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className='w-full h-[calc(100%+68px)] absolute top-0 group-hover:-translate-y-[62px] md:group-hover:-translate-y-[65px] transition-all duration-300 ease-in-out opacity-100 bg-gradient-to-t from-white from-35% md:from-10%' />

      <div className="absolute backdrop-blur-sm bottom-0 left-0 right-0 flex flex-col justify-end p-4 transition-transform duration-300 translate-y-[40%] group-hover:translate-y-0">
        <div className="mb-3 p-2 ">
          <h1 className="font-plusJakartaSans text-xl font-bold text-gray-900 md:text-2xl">
            {title}
          </h1>
          <p className="font-plusJakartaSans mt-1 line-clamp-2 text-xs font-medium text-gray-700 md:text-sm">
            {desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <div className="flex flex-col rounded-md border border-gray-200 bg-white px-3 py-2">
            <span className="font-plusJakartaSans text-xs font-semibold text-gray-900">
              {platform}
            </span>
            <span className="font-plusJakartaSans text-[10px] text-gray-400">
              Platform
            </span>
          </div>

          <div className="flex flex-col rounded-md border border-gray-200 bg-white px-3 py-2">
            <span className="font-plusJakartaSans text-xs font-semibold text-gray-900">
              {stack}
            </span>
            <span className="font-plusJakartaSans text-[10px] text-gray-400">
              Stack
            </span>
          </div>

          {prod && prodLink && (
            <div className="flex flex-col rounded-md border border-gray-200 bg-white px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
                </span>
                <span className="font-plusJakartaSans text-xs font-semibold text-gray-900">
                  Live
                </span>
              </div>
              <Link
                href={prodLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-plusJakartaSans text-[10px] text-gray-500 underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-800 hover:decoration-gray-500"
              >
                {prod}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}