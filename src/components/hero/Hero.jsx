import Typed from 'react-typed'
import styles from '../../style'
import { hero } from '../../constants/index' 
import Button from '../button/Button'

const Hero = () => {
  return (
    <section>
      <div className={`${styles.hero}`}>
        <p className='text-lightGreen font-bold uppercase p-2 sm:mt-6 md:mt-12'>{hero.paragraph1}</p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>{hero.heading1}</h1>
        <div className='flex justify-center items-center'>
            <h2 className={`${styles.heroHeading2} py-4`}>{hero.heading2}</h2>
            <Typed 
                className={`${styles.heroHeading2} pl-2 md:pl-4`} 
                strings={[ 'BTB', 'BTC', 'SASS' ]}
                typeSpeed={120}
                backSpeed={140}
                loop
            />
        </div>
        <p className='text-xl md:text-2xl font-bold text-gray-500'>{hero.paragraph2}</p>
        <Button style={styles.heroButton} text='Get Started' />
      </div>
    </section>
  )
}

export default Hero
