import { analytics, images } from '../../constants/index'
import Button from '../button/Button'
import styles from '../../style'

const Analytics = () => {
  return (
    <section className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
            <img className='w-[500px] mx-auto my-4' src={images.laptop} alt='/' />
            <div className='flex flex-col'>
                <p className='text-lightGreen font-bold uppercase'>{analytics.paragraph1}</p>
                <h1 className='text-2xl sm:text-3xl md:text-4xl py-2 font-bold'>{analytics.heading1}</h1>
                <p>{analytics.paragraph2}</p>
                <Button style={styles.analyticsButton} text='Get Started' />
            </div>
        </div>
    </section>
  )
}

export default Analytics
