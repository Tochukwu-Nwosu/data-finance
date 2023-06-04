import { navLinks } from '../../constants/index'

export const HorizontalNavLinks = () => {
    const horizontalNavLinks = navLinks.map( ({ id, value }) => (
        <li key={id} className="p-4 cursor-pointer hover:text-gray-400">{value}</li>
    ) )
    return <>{ horizontalNavLinks }</>
}

export const VerticalNavLinks = () => {
    const verticalNavLinks = navLinks.map( ({ id, value }, index) => (
        index == navLinks.length - 1 ?
            <li key={id} className="p-4 cursor-pointer hover:text-gray-400 uppercase">{value}</li> :
            <li key={id} className="p-4 cursor-pointer border-b border-gray-600 hover:text-gray-400 uppercase">{value}</li>
    ) )
    return <>{ verticalNavLinks }</>
}