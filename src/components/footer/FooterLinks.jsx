import { footerLinks } from "../../constants/index"

const FooterLinks = () => {
  const formattedLinks = footerLinks.map(({ title, links }) => {
    return (
        <div key={title}>
            <h6 className='font-medium text-gray-400'>{title}</h6>
            <ul>
                {links.map(( value ) => <li key={value} className='py-2 text-sm'>{value}</li> )}
            </ul>
        </div>
      )
    }
  )

  return (
    <>
      {formattedLinks}
    </>
  )
}

export default FooterLinks
