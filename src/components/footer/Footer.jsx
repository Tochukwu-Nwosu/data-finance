import styles from '../../style'
import FooterLinks from './FooterLinks'
import { footer } from '../../constants/index'
import {

    FaDribbbleSquare,
    FaGithubSquare,
    FaInstagram,
    FaFacebookSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 lg:gap-24 py-16 px-4 text-gray-300">
        <div>
            <h1 className={styles.navHeading}>React.</h1>
            <p className='py-4'>{footer.paragraph}</p>
            <div className='md:w-[75%] flex justify-between my-6'>
                <FaFacebookSquare size={30} className='hover:text-[#4267b2] cursor-pointer' />
                <FaInstagram size={30} className='hover:text-[#d62976] cursor-pointer'/>
                <FaTwitterSquare size={30} className='hover:text-[#1da1f2] cursor-pointer' />
                <FaGithubSquare size={30} className='hover:text-[#171515] cursor-pointer' />
                <FaDribbbleSquare size={30} className='hover:text-[#ea4c89] cursor-pointer' />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between lg:mt-6'>
            <FooterLinks />
        </div>
    </footer>
    )
}

export default Footer 