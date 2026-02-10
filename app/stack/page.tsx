export default function Stack() {

  const STACKS = [
    {
      name: "JavaScript",
      url: "https://www.javascript.com/",
      icon: "javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: "typescript/typescript-original.svg",
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      icon: "python/python-original.svg",
    },
    {
      name: "Go",
      url: "https://golang.org/",
      icon: "go/go-original.svg",
    },
    {
      name: "React",
      url: "https://react.dev/",
      icon: "react/react-original.svg",
    },
    {
      name: "React Native",
      url: "https://reactnative.dev/",
      icon: "reactnative/reactnative-original-wordmark.svg",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
      icon: "nextjs/nextjs-original.svg",
    },
    {
      name: "Astro",
      url: "https://astro.build/",
      icon: "astro/astro-original.svg",
    },
    {
      name: "Node.js",
      url: "https://nodejs.org/",
      icon: "nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      url: "https://expressjs.com/",
      icon: "express/express-original.svg",
    },
    {
      name: "Redux",
      url: "https://redux.js.org/",
      icon: "redux/redux-original.svg",
    },
    {
      name: "TanStack Query",
      url: "https://tanstack.com/query/latest",
      icon: "/icon/tanstack.png",
    },
    {
      name: "Supabase",
      url: "https://supabase.com/",
      icon: "supabase/supabase-original.svg",
    },
    {
      name: "Better Auth",
      url: "https://betterauth.dev/",
      icon: "/icon/betterauth.svg",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      icon: "mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      icon: "mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      url: "https://www.postgresql.org/",
      icon: "postgresql/postgresql-original.svg",
    },
    {
      name: "Prisma",
      url: "https://www.prisma.io/",
      icon: "prisma/prisma-original.svg",
    },
    {
      name: "Drizzle",
      url: "https://drizzle.orm.com/",
      icon: "/icon/Drizzle.svg",
    },
    {
      name: "Socket.IO",
      url: "https://socket.io/",
      icon: "socketio/socketio-original.svg",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      icon: "tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      icon: "git/git-original.svg",
    },
    {
      name: "Docker",
      url: "https://www.docker.com/",
      icon: "docker/docker-original.svg",
    },
    {
      name: "Azure",
      url: "https://azure.microsoft.com/",
      icon: "azure/azure-original.svg",
    },
    {
      name: "Cloudflare",
      url: "https://www.cloudflare.com/",
      icon: "cloudflare/cloudflare-original.svg",
    },
    {
      name: "Linux",
      url: "https://www.linux.org/",
      icon: "linux/linux-original.svg",
    },
    {
      name: "n8n",
      url: "https://n8n.io/",
      icon: "/icon/n8n-color.svg",
    },
    {
      name: "Solidity",
      url: "https://soliditylang.org/",
      icon: "solidity/solidity-original.svg",
    },
    {
      name: "Hardhat",
      url: "https://hardhat.org/",
      icon: "hardhat/hardhat-original.svg",
    }
  ];


  return (
    <>
      <section className='relative py-10 border-b border-solid border-gray-200'>
        <div className='inset-0 -z-[2] absolute bg-gradient-to-b from-white from-1% via-transparent md:hidden'></div>
        <div className='bg-grid absolute inset-0 -z-[3]'></div>
        <div className='flex justify-center'>
          <div className='max-w-6xl mx-5 w-full'>
            <div className='mb-5'>
              <h1
                className='font-plusJakartaSans font-bold text-xl text-gray-900'
                id='contact-me'
              >
                Stack
              </h1>
            </div>
            <div className='flex'>
              <ul className="flex flex-wrap justify-center gap-7">
                {STACKS.map((stack) => {
                  const isLocalIcon = stack.icon.startsWith("/");

                  const iconSrc = isLocalIcon
                    ? stack.icon
                    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${stack.icon}`;

                  return (
                    <li key={stack.name} className="relative group flex">
                      <a href={stack.url} target="_blank" rel="noopener noreferrer">
                        <img
                          height={35}
                          width={35}
                          alt={stack.name}
                          src={iconSrc}
                          loading='lazy'
                        />
                      </a>

                      <span
                        className="
                        absolute -top-10 left-1/2 -translate-x-1/2
                        scale-0 group-hover:scale-100
                        transition-all duration-200
                        bg-gray-900 text-white text-xs px-2 py-1 rounded-md
                        shadow-lg whitespace-nowrap
                      "
                      >
                        {stack.name}
                      </span>
                    </li>
                  )

                })}
              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}