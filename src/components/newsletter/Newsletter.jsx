import styles from "../../style"
import { newsletter } from '../../constants/index'
import Button from "../button/Button"

const Newsletter = () => {
  return (
    <section className="bg-black w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 lg:gap-2">
        <div className="lg:col-span-2 my-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">{newsletter.heading1}</h1>
            <p>{newsletter.paragraph1}</p>
        </div>
        <div className="my-4">
            <div className="w-full flex flex-col sm:flex-row items-center">
                <input 
                    className="w-full rounded-md text-black p-3" 
                    type="email" 
                    placeholder="Enter email"
                />
                <Button style={styles.newsletterButton} text='Notify me' />
            </div>
            <p>{newsletter.paragraph2}
                <span 
                    className="text-lightGreen underline cursor-pointer hover:no-underline"
                >{newsletter.span}</span>
            </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
