import React, { Dispatch, SetStateAction } from 'react'

export interface SideBarItemProps {
  name: string
  href: string
  Icon: React.ElementType<{
    className?: string
  }>
  dropdownMenus?: SideBarDropdownItemProps[]
  group?: string[]
}

export interface SideBarItemsProps {
  label: string
  navItems: SideBarItemProps[]
  isCollapsed: boolean
  user: any | undefined //TODO replace any when implemented
}

export interface SideBarItemGroupProps {
  navItem: SideBarItemProps
  isCollapsed: boolean
  // userGroup: string | null;
}

export interface TitleItemProps {
  label: string
  isCollapsed?: boolean
  Icon: React.ElementType<{
    className?: string
  }>
}

export interface NavbarItemsProps {
  navItems: SideBarItemProps[]
  user: any | undefined //TODO replace any when implemented
}

export interface NavbarMobileItemsProps {
  navItems: SideBarItemProps[]
  user: any | undefined //TODO replace any when implemented
  isOpen: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export interface SideBarDropdownItemProps {
  name: string
  href: string
  group?: string
}