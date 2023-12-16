import React, { useState } from 'react'

function header() {
  const [activePage, setActivePage] = useState(null)
  const [showMenu, setShowMenu] = useState(false)
  const pages = ['Intro', 'Projects', 'Skills', 'Contact'] // write the page names in uppercase
  // const pages = ['Intro', 'Projects', 'Skills', 'Experience', 'Contact'] // write the page names in uppercase
  let sections
  let observer
  let servicePage
  let servicePageObserver
  const options = {
    threshold: 0.7, //control threshold of experience page from here
  }

  const myfun = function (ele) {
    if (typeof window === 'object') {
      let offsetTop = document.getElementById(ele).offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const navCheck = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActivePage(entry.target.id)
      }
    })
  }

  const servicePageCheck = (entry) => {
    if (entry[0].isIntersecting) {
      setActivePage(entry[0].target.id)
    }
  }

  if (typeof window === 'object') {
    sections = document.querySelectorAll('section')
    servicePage = document.getElementById('projects')
    observer = new IntersectionObserver(navCheck, options)
    servicePageObserver = new IntersectionObserver(servicePageCheck, {
      threshold: window.screen.width < 769 ? 0.2 : 0.7, //control threshold of page other than experience page from here
    })
  }

  sections?.forEach((section) => {
    observer.observe(section)
  })

  servicePageObserver?.observe(servicePage)

  return (
    <>
      <div id = "header" className='backdrop-filter backdrop-blur bg-opacity-50 firefox:bg-opacity-90 z-10 flex justify-between items-center bg-gray-800 w-full text-gray-400 text-xl top-0 h-16 sticky'>
        <div className='text-xl  text-secondary1-light font-mono'>{''}</div>
        {pages.map((item) =>
          activePage === item.toLocaleLowerCase() ? (
            <div
              className='text-2xl text-pink-600 font-extrabold sm:absolute sm:-left-full'
              key={item}
            >
              {item}
            </div>
          ) : null
        )}
        <div className='flex h-1/2 justify-between items-center gap-2 sm:gap-10 mr-2 sm:mr-8 fixed sm:static -left-full invisible sm:visible'>
          {pages.map((item, index) => (
            <button
              onClick={() => myfun(item.toLocaleLowerCase())}
              key={index}
              className={
                activePage === item.toLocaleLowerCase()
                  ? 'rounded-sm h-full font-extrabold text-2xl text-pink-600'
                  : null
              }
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className={`bg-gray-100 rounded-sm h-7 w-9 group mr-4 top-5 z-10 sm:invisible sm:left-0 sm:absolute`}
        >
          <div onClick={() => setShowMenu(!showMenu)}>
            <div
              className={`border-2 rounded-sm w-7 duration-1000 m-1 border-gray-800 bg-gray-800  origin-top-left transform 
            ${showMenu && 'rotate-33 scale-110'}`}
            ></div>
            <div
              className={`border-2 rounded-sm w-7 duration-100 m-1 border-gray-800 bg-gray-800 
            ${showMenu && 'invisible'}`}
            ></div>
            <div
              className={`border-2 rounded-sm w-7 duration-1000 m-1 border-gray-800 bg-gray-800 origin-bottom-left transform 
            ${showMenu && '-rotate-33 scale-110'}`}
            ></div>
          </div>
          <div
            className={`absolute left-0 mt-4 w-full  h-40  backdrop-filter backdrop-blur
            ${showMenu ? 'visible' : 'invisible'}`}
          >
            <div className=' bg-gray-300  absolute inset-y-0 w-full bg-opacity-90'>
              <div className='flex flex-col gap-1 items-center'>
                {pages.map((item, index) => (
                  <div
                    onClick={() => myfun(item.toLocaleLowerCase())}
                    key={index}
                    className={
                      activePage === item.toLocaleLowerCase()
                        ? 'bg-gray-800 text-gray-200 shadow-2xl w-full'
                        : 'w-full text-gray-900'
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  )
}

export default header
