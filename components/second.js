import Card from '../components/card'

export default function Second() {
  const cardData = [
    {
      title: 'Moviestan',
      price: ['Typescript', 'ReactJs', 'Nextjs', 'TailwindCSS', 'TmdbAPI'],
      image: '/moviestan-dark.png',
      url: 'https://moviestan.vercel.app/',
    },
    {
      title: 'Astronomy - Nasa Photo of the Day',
      price: ['JavaScript', 'ReactJs', 'Material UI'],
      image: '/nasa-potd.png',
      url: 'https://nasa-potd-nine.vercel.app/',
    },
    {
      title: 'Devconnect',
      price: ['JavaScript', 'ReactJs', 'Redux', 'Nodejs','Expressjs','mongoDB'],
      image: '/devconnect.png',
      url: 'https://devconnector-rahul.cyclic.app/',
    },
    {
      title: 'Reactionary(React Dictionary)',
      price: ['JavaScript', 'ReactJs', 'Material-UI',],
      image: '/react-dictionary.png',
      url:"https://react-dictionary-302df.web.app/"
    },

    {
      title: 'Taskio',
      price: ['Typescript', 'ReactJs', 'TailwindCSS','Firebase'],
      image: '/taskio.png',
      url:"https://todos-aa10d.web.app/"
    }
  ]

  return (
    <section id='projects' className='border border-transparent'>
      <div className='text-center text-secondary1-light text-3xl font-extrabold'>
        Some Personal Projects
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center place-content-center gap-5  lg:min-h-screen my-16 lg:my-8'>
        {cardData.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            image={card.image}
            url={card.url}
            key={card.title}
          />
        ))}
      </div>
    </section>
  )
}
