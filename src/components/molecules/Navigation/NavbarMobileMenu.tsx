import { Fragment } from 'react'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import SideBarItemIcon from '@/components/atoms/Icon/SideBarItemIcon'
import { NavbarMobileItemsProps } from './Interfaces/Navigation'

const NavbarMobileMenu: React.FC<NavbarMobileItemsProps> = ({
  navItems,
  isOpen,
  user,
  setOpenMenu,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={setOpenMenu} className='relative z-40 lg:hidden'>
        <TransitionChild
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 z-40 flex'>
          <TransitionChild
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <DialogPanel className='relative flex flex-col w-full pb-12 max-w-xs bg-white shadow-xl'>
              <div className='flex px-4 pb-2 pt-5'>
                <button
                  className='bg-transparent border-none focus:outline-none p-0'
                  onClick={() => setOpenMenu(false)}
                >
                  <HiOutlineX className='w-8 h-8 text-slate-400' />
                </button>
              </div>
              <div className='space-y-6 px-4 py-6'>
                {navItems.map((item, index) => {
                  if (!item.group?.includes(user!)) {
                    return null
                  }
                  return (
                    <div className='flow-root text-xl pl-2' key={index}>
                      <Link
                        to={item.href}
                        className='text-slate-600 hover:text-slate-400'
                      >
                        <div
                          className={`
                            ${
                              location.pathname === item.href
                                ? 'text-indigo-500'
                                : ''
                            } flex items-center gap-1.5`}
                        >
                          <SideBarItemIcon Icon={item.Icon} />
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}

export default NavbarMobileMenu
