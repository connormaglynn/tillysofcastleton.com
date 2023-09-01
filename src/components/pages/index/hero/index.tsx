import styles from './index.module.css'

const Hero = () => {
  return (
    <>
      <section className={styles.landing}>
        <div className="flex h-full w-full items-center">
          <p className="font-brand text-2xl text-accent-1 bg-accent-3 bg-opacity-90 p-5 mt-[550px] w-full text-center">
            Traditional English Tea Rooms
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
