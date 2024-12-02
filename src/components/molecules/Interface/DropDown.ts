export interface ProfileDropdownProps {
  user: { userId: string; userName: string; userGroup: string[] } | undefined
  onSignout: () => void
}

export type DateRange = {
  start: Date | undefined
  end: Date | undefined
}

export interface FilterInterface {
  [key: string]: string[] | undefined | DateRange
  Status: string[]
  'Assigned Date': DateRange
  'Last modified': DateRange
  Assigner: string[]
  Asset: string[]
  BU?: string[]
}
export interface FilterInterfaceGroup {
  [key: string]: string[] | DateRange | undefined
  Status: string[]
  'Assigned Date': DateRange
  'Last modified': DateRange
  Assigner: string[]
  Asset: string[]
  BU?: string[]
}

export interface FilterDropdownInterface {
  onFilterChange: (key: string, data: string[] | DateRange) => void
  selectedFilter: { [key: string]: string[] | DateRange | undefined }
  filterGroup: { [key: string]: string[] | DateRange | undefined }
  userGroup: string[] | undefined
}

export interface SideBarDropdownItemProps {
  name: string
  href: string
  group?: string
}

export interface SideBarDropdownItemGroupProps {
  dropdownItem: SideBarDropdownItemProps
  // userGroup: string | null;
}

export interface SideBarDropdownItemsProps {
  label: string
  Icon: React.ElementType<{
    className?: string
  }>
  dropdownItems: SideBarDropdownItemProps[]
}

export interface SideBarDropdownLabelProps {
  label: string
  Icon: React.ElementType<{
    className?: string
  }>
  dropdownItems: SideBarDropdownItemProps[]
  isCollapsed: boolean
}
