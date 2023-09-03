import styles from './index.module.css'

const Hero = () => {
  return (
    <>
      <section className={styles.landing}>
        <div className="inline-block relative h-screen w-full items-center">
          <p className="absolute bottom-12 font-brand text-2xl text-accent-1 bg-accent-3 bg-opacity-90 p-5 w-full text-center">
            Traditional English Tea Rooms
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
