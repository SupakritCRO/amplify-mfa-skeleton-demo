import { Link, useLocation } from 'react-router-dom'
import { NavbarItemsProps } from './Interfaces/Navigation'

const NavbarItems: React.FC<NavbarItemsProps> = ({ navItems, user }) => {
  const location = useLocation()
  return navItems.map((item, index) => {
    if (!item.group?.includes(user!)) {
      return null
    }
    return (
      <div
        className='flex justify-center items-center text-lg font-medium px-3'
        key={index}
      >
        <Link
          key={index}
          to={item.href}
          className='text-[#1B2559] hover:text-slate-500'
        >
          <div
            className={location.pathname === item.href ? 'text-indigo-700' : ''}
          >
            {item.name}
          </div>
        </Link>
      </div>
    )
  })
}

export default NavbarItems
