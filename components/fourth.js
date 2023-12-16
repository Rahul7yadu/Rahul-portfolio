import React from 'react'
import Image from 'next/image'

export default function Third() {
  const skillArray = [
    {
      role: 'Frontend Engineer - ReactJs',
      title: 'Senior Consultant',
      company: 'Virtusa',
      companyIcon: '/javascript.svg',
      duration: 'Jan-2021 to Present',
      location: 'Pune, India',
      project: 'HSBC - eCare',
      description: [
        `eCare is an internal web application of HSBC, Which is used by HSBC call
        center staff to fulfill customer requests.`,
        `Features included - Fraud
        reporting, Force log-off, password Reset and many more customer
        related tasks.`,
        `Role - Software Developer
        Tasks included -
        UI Development with ReactJs
        API integration with UI,
        Deployment using Jenkins Pipeline,
        Source code Management using GIT and GITHUB,
        Implementing business logic,
        Testing,
        Fixing bugs,
        Linting and SONAR Fixes`,
      ],
    },
    {
      role: 'Web Automation QA - RPA UiPath',
      title: 'Associate Consultant',
      company: 'Capgemini',
      companyIcon: '/javascript.svg',
      duration: 'August-2019 to Dec-2020',
      location: 'Pune, India',
      project: 'Clorox (US market)',
      description: [
        'Here my job was to convert manual test cases into Automation test cases using Robotic Process Automation tool UiPath',
        'I Created Automation framework to handle test case failure and to generates test result into word and PDF documents.',
        'As a experienced UiPath developer i guided team of 8-10 member to implement automation logic and helped them in troubleshooting critical issues',
        'Additional to regular task, i developed many utilities to automate manual task and helped in saving project costs.',
        'Got recognition for innovation.',
      ],
    },
    {
      role: 'Quality Analyst',
      title: 'Analyst, Senior Analyst',
      company: 'Capgemini',
      companyIcon: '/javascript.svg',
      duration: 'March-2016 to July-2019',
      location: 'Pune, India',
      project: "McDonald's (US market)",
      description: [
        'Worked as Quality Analyst',
        'Involved in activities of understanding business requirements and converting it into test cases',
        'Daily activities included testing, reportig bugs and following up with relevent team members',
        'Coordinated with team members located in diffrent region on daily calls',
      ],
    },
  ]
  return (
    <>
      <section id='experience'>
        <div className='flex flex-col sm:flex-row justify-center min-h-screen rounded-tl-full bg-gradient-to-bl from-canvas1-light via-canvas1-medium to-canvas1-dark'>
          <div className='w-full text-2xl md:text-3xl  flex  justify-center gap-4 text-secondary1-light font-extrabold text'>
            <div>Experience</div>
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

          <div className='grid grid-cols-1 gap-4 lg:gap-10 p-8 w-full'>
            {skillArray.map((skill) => (
              <div
                className='shadow-xl flex flex-col bg1-gradient-to-tl from-secondary1-light via-secondary1-medium to-secondary1-dark rounded-md p-1 w-full'
                key={skill.title}
              >
                <div className='text-secondary1-light font-bold text-2xl'>
                  {skill.role}
                </div>
                {/* <Image src={skill.companyIcon} width='40' height='40' /> */}
                <div className='flex gap-2 text-gray-600'>
                  <div className=''>{skill.title}</div>
                  <div className=''>{'at'}</div>
                  <div className=''>{skill.company}</div>
                </div>
                <div className='flex gap-2 text-gray-600'>
                  <p className=''>{skill.duration}</p>
                  <p className=''>.</p>
                  <p className=''>{skill.location}</p>
                </div>
                <div className='text-gray-600'>
                  Project:{' '}
                  <span className='text-secondary1-light'>{skill.project}</span>
                </div>
                <div className='text-primary1-light '>
                  {skill.description?.map((desc) => (
                    <p>{'• ' + desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
