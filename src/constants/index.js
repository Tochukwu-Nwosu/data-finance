import double from '../assets/double.png'
import laptop from '../assets/laptop.jpg'
import single from '../assets/single.png'
import triple from '../assets/triple.png'
import styles from '../style'

export const navLinks = [
    {
        id: 'Home',
        value: 'Home'
    },
    {
        id: 'Company',
        value: 'Company'
    },
    {
        id: 'Resources',
        value: 'Resources'
    },
    {
        id: 'About',
        value: 'About'
    },
    {
        id: 'Contact',
        value: 'Contact'
    }
]

export const hero = {
    heading1: 'Grow with data',
    heading2: 'Fast, flexible financing for',
    paragraph1: 'Grow with data analytics',
    paragraph2: 'Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms'
}

export const images = {
    laptop
}

export const analytics = {
    heading1: 'Manage Data Analytics Centrally',
    paragraph1: 'Data analytics dashboard',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis accusantium dolores corrupti quibusdam recusandae eveniet reiciendis quo odio unde. Quidem distinctio esse tempora eaque natus assumenda ipsum, facere provident!'
}

export const newsletter = {
    heading1: 'Want tips & tricks to optimize your flow?',
    paragraph1: 'Sign up to our newsletter and stay up to date',
    paragraph2: 'We care about the protection of your data. Read our ',
    span: 'Privacy Policy.'
}

export const cards = {
    card1: {
        image: single,
        heading2: 'Single User',
        paragraph1: '$149',
        paragraph2: '500 GB Storage',
        paragraph3: '1 Garanted User',
        paragraph4: 'Send up to 2 GB',
        cardStyle: 'w-full flex flex-col my-4 p-4 shadow-xl rounded-md text-center hover:scale-105 duration-300',
        buttonStyle: styles.lightButton
    },
    card2: {
        image: double,
        heading2: 'Partnership',
        paragraph1: '$199',
        paragraph2: '1 TB Storage',
        paragraph3: '3 User Allowed',
        paragraph4: 'Send up to 10 GB',
        cardStyle: 'w-full flex flex-col bg-gray-100 my-4 md:my-0 p-4 shadow-xl rounded-md text-center hover:scale-105 duration-300',
        buttonStyle: styles.darkButton
    },
    card3: {
        image: triple,
        heading2: 'Group Account',
        paragraph1: '$299',
        paragraph2: '5 TB Storage',
        paragraph3: '10 User Allowed',
        paragraph4: 'Send up to 20 GB',
        cardStyle: 'w-full flex flex-col my-4 p-4 shadow-xl rounded-md text-center hover:scale-105 duration-300',
        buttonStyle: styles.lightButton
    }
}