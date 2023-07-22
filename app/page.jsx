import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col' >
        <h1 className='head_text text-center' >
          Discover & Share
          <br/>
          <span className='text-center orange_gradient'>AI Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus cumque quisquam adipisci. Incidunt beatae atque voluptas, recusandae.
        </p>

        <Feed />
        
    </section>
  )
}

export default Home