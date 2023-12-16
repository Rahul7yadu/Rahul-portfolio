export default function Card(props) {
  return (
    <>
      <div className='shadow-2xl rounded-md flex flex-col gap-2 items-center w-5/6 xl:w-4/6 mb-4 text-xl group  bg1-gradient-to-r from-secondary1-light via-secondary1-medium to-secondary1-dark'>
        <div className='flex m-2 justify-center items-center drop-shadow-2xl'>
          <img src={props.image} width='600' height='auto'></img>
        </div>
        <div className='flex flex-col'>
          <div className='font-bold font-mono text-center  text-secondary1-light group-hover:scale-110 group-hover:text-primary1-light transition duration-500 ease-in-out transform'>
            {props.title}
          </div>
          <div className='flex justify-evenly'>
            <div className='text-sm font-mono text-gray-600 w-5/6'>
              {props.price.map((item) => item + ' ')}
            </div>
            <div className='flex flex-col gap-2 justify-evenly mb-2'>
              <a
                className='text-primary1-light h-6 w-6'
                href={props.url}
                target='_blank'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='external-link-alt'
                  className='svg-inline--fa fa-external-link-alt fa-w-16'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
