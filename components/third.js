import React from 'react'
import Image from 'next/image'

export default function Third() {
  const skillArray = [
    {
      title: 'JavaScript',
      expertise: '7.5',
      icon: '/javascript.svg',
    },
    {
      title: 'ReactJs',
      expertise: '7.5',
      icon: '/react.svg',
    },
    {
      title: 'NextJs',
      expertise: '7.5',
      icon: '/nextjs.svg',
    },
    {
      title: 'React Query',
      expertise: '7.5',
      icon: '/react-query.svg',
    },
    {
      title: 'Redux',
      expertise: '7.5',
      icon: '/redux.svg',
    },
    {
      title: 'React Router',
      expertise: '7.5',
      icon: '/react-router.svg',
    },
    {
      title: 'MaterialUI',
      expertise: '7.5',
      icon: '/material-ui.svg',
    },
    {
      title: 'TailwindCSS',
      expertise: '7.5',
      icon: '/tailwindcss.svg',
    },
    {
      title: 'CSS-3',
      expertise: '7.5',
      icon: '/css-3.svg',
    },
    {
      title: 'HTML-5',
      expertise: '7.5',
      icon: '/html-5.svg',
    },
    {
      title: 'NodeJs',
      expertise: '7.5',
      icon: '/nodejs.svg',
    },
    {
      title: 'Express',
      expertise: '7.5',
      icon: '/express.svg',
    },
    {
      title: 'MongoDB',
      expertise: '7.5',
      icon: '/mongodb.svg',
    },
    {
      title: 'Git',
      expertise: '7.5',
      icon: '/git.svg',
    },
    {
      title:'Typescript',
      expertise:'7',
      icon:'/typescript-2048.png'
    },
    {
      title:'Sql',
      expertise:'7',
      icon:'/sql.jpg'
    },
    // {
    //   title: 'Jest',
    //   expertise: '7.5',
    //   icon: '/jest.svg',
    // },
    {
      title: 'Postman',
      expertise: '7.5',
      icon: '/postman.svg',
    },
    // {
    //   title: 'Jira',
    //   expertise: '7.5',
    //   icon: '/jira.svg',
    // },
    // {
    //   title: 'UiPath',
    //   expertise: '7.5',
    //   icon: '/uipath.svg',
    // },
  ]
  return (
    <>
      <section id='skills'>
        <div className='flex flex-col sm:flex-row justify-center min-h-screen rounded-tl-full bg-gradient-to-bl from-canvas1-light via-canvas1-medium to-canvas1-dark'>
          <div className='w-full text-2xl md:text-3xl  flex items-center justify-center gap-4 text-secondary1-light font-extrabold text'>
            <div>Skills</div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                className='animate-pulse'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center gap-4 lg:gap-10 p-8  text-primary1-light w-full'>
            {skillArray.map((skill) => (
              <div
                className='shadow-2xl flex flex-col bg1-gradient-to-tl from-secondary1-light via-secondary1-medium to-secondary1-dark rounded-md p-1 items-center w-full'
                key={skill.title}
              >
                <Image src={skill.icon} width='40' height='40' />
                <div className=''>{skill.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
