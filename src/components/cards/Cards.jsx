import { images } from '../../constants/index'
import styles from '../../style'
import Button from '../button/Button'

const Cards = () => {
  return (
    <section className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto px-4 grid md:grid-cols-3 gap-8'>
        <div className='w-full flex flex-col my-4 p-4 shadow-xl rounded-md text-center hover:scale-105 duration-300'>
            <img className='w-20 mt-[-3rem] mx-auto bg-transparent' src={images.single} alt='/' />
            <h2 className='text-2xl font-bold py-8'>Single User</h2>
            <p className='text-4xl font-bold'>$149</p>
            <div className='font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Garanted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <Button style={styles.lightButton} text='Start Trial' />
        </div>
        <div className='w-full flex flex-col bg-gray-100 my-4 md:my-0 p-4 shadow-xl rounded-md text-center hover:scale-105 duration-300'>
            <img className='w-20 mt-[-3rem] mx-auto bg-transparent' src={images.double} alt='/' />
            <h2 className='text-2xl font-bold py-8'>Partnership</h2>
            <p className='text-4xl font-bold'>$199</p>
            <div className='font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8'>3 User Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
            </div>
            <Button style={styles.darkButton} text='Start Trial' />
        </div>
        <div className='w-full flex flex-col my-4 p-4 shadow-xl rounded-md text-center hover:scale-105 duration-300'>
            <img className='w-20 mt-[-3rem] mx-auto bg-transparent' src={images.triple} alt='/' />
            <h2 className='text-2xl font-bold py-8'>Group Account</h2>
            <p className='text-4xl font-bold'>$299</p>
            <div className='font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                <p className='py-2 border-b mx-8'>10 User Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
            </div>
            <Button style={styles.lightButton} text='Start Trial' />
        </div>
      </div>
    </section>
  )
}

export default Cards
