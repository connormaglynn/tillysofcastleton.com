import styles from './index.module.css'

const Hero = () => {
  return (
    <>
      <section className={styles.landing}>
        <div className='flex h-full w-full items-center'>
          <p className='font-brand text-6xl text-white bg-accent-1 bg-opacity-95 p-5'>
            Your Local Bakery 🧁
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
