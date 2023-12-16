export default function First() {
  return (
    <section id='intro'>
      <div className='flex flex-col justify-center xl:justify-center items-center h-screen rounded-br-full bg-gradient-to-tl from-canvas1-light via-canvas1-medium to-canvas1-dark'>
        <div>
          <div className='text-gray-400 text-2xl  ml-6  xl:text-4xl bg-clip-text text-transparent bg-gradient-to-b  from-primary1-light via-primary1-medium to-primary1-dark'>
            Hi, I am{' '}
            <span className='text-secondary1-light animate-pulse font-extrabold text-4xl xl:text-6xl'>
             Rahul 
            </span>
            {/* <span className='text-gray-500'>from </span>
            <span className='bg-clip-text text-transparent bg-gradient-to-t from-green-500 via-white to-red-500'>
              India
            </span> */}
          </div>
          <div className='text-gray-400 font-thin  ml-6 text-2xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-t from-primary1-light via-primary1-medium to-primary1-dark'>
            A Passionate Full Stack Web developer
          </div>
        </div>
        {/* <img src='/triangle1.svg' className='bg-triangle1 h-3/4 w-screen'></img> */}
      </div>
    </section>
  )
}
