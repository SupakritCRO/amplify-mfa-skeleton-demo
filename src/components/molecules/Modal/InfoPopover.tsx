import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FcInfo } from 'react-icons/fc'

interface InfoPopoverProps {
  children?: React.ReactNode
}

const InfoPopover = ({ children }: InfoPopoverProps) => {
  return (
    <Popover>
      <PopoverButton className='focus:outline-none p-0'>
        <FcInfo className='cursor-pointer' />
      </PopoverButton>
      <PopoverPanel
        transition
        className='absolute z-10 mt-1.5 bg-black/85 rounded-lg transition duration-200 ease-in-out [--anchor-gap:4px] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
      >
        <div className='p-3 max-w-sm'>{children}</div>

        <svg
          className='absolute text-black/80 h-3 -top-2.5 left-1 rotate-180'
          x='0px'
          y='0px'
          viewBox='0 0 255 255'
          xmlSpace='preserve'
        >
          <polygon className='fill-current' points='0,0 127.5,127.5 255,0' />
        </svg>
      </PopoverPanel>
    </Popover>
  )
}

export default InfoPopover
