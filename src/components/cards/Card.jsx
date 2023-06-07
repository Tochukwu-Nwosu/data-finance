import Button from "../button/Button"

const Card = ({ 
    image,
    heading2,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    cardStyle,
    buttonStyle
 }) => {
  
  return (
    <div className={cardStyle}>
        <img className='w-20 mt-[-3rem] mx-auto bg-transparent' src={image} alt='/' />
        <h2 className='text-2xl font-bold py-8'>{heading2}</h2>
        <p className='text-4xl font-bold'>{paragraph1}</p>
        <div className='font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{paragraph2}</p>
            <p className='py-2 border-b mx-8'>{paragraph3}</p>
            <p className='py-2 border-b mx-8'>{paragraph4}</p>
        </div>
        <Button style={buttonStyle} text='Start Trial' />
    </div>
  )
}

export default Card
