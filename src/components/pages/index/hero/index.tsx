import styles from './index.module.css'

const Hero = () => {
  return (
    <>
      <section className={styles.landing}>
        <div className="inline-block relative h-screen w-full items-center">
          <p className="absolute bottom-16 font-brand2 text-2xl text-accent-1 bg-accent-3 bg-opacity-90 p-5 w-full text-center md:text-4xl">
            Traditional English Tea Rooms
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
