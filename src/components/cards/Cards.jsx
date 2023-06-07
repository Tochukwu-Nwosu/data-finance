import { cards } from '../../constants/index'
import Card from './Card'

const { card1, card2, card3 } = cards

const Cards = () => {
  return (
    <section className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto px-4 grid md:grid-cols-3 gap-8'>
        <Card
            image={card1.image}
            heading2={card1.heading2}
            paragraph1={card1.paragraph1}
            paragraph2={card1.paragraph2}
            paragraph3={card1.paragraph3}
            paragraph4={card1.paragraph4}
            cardStyle={card1.cardStyle}
            buttonStyle={card1.buttonStyle}
        />
        <Card
            image={card2.image}
            heading2={card2.heading2}
            paragraph1={card2.paragraph1}
            paragraph2={card2.paragraph2}
            paragraph3={card2.paragraph3}
            paragraph4={card2.paragraph4}
            cardStyle={card2.cardStyle}
            buttonStyle={card2.buttonStyle}        
        />
        <Card
            image={card3.image}
            heading2={card3.heading2}
            paragraph1={card3.paragraph1}
            paragraph2={card3.paragraph2}
            paragraph3={card3.paragraph3}
            paragraph4={card3.paragraph4}
            cardStyle={card3.cardStyle}
            buttonStyle={card3.buttonStyle}        
        />
      </div>
    </section>
  )
}

export default Cards
