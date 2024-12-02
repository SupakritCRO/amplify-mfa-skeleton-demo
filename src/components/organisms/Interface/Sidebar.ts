import { SidebarSchema } from '@/client/rmi'
import { Dispatch, SetStateAction } from 'react'

type NewRiskItem = {
    id: number
  }
export interface SideBarProps {
  setState?: (n: number) => void 
  questions?:  SidebarSchema[] 
  currentQuestion?: number 
  dialog: boolean 
  setDialog: Dispatch<SetStateAction<boolean>> 
  companyId?: number 
  isLoading?: boolean  
  setNewRiskItem?: Dispatch<SetStateAction<NewRiskItem>> 
  origin?: string 
  assessmentStatus?: string
}
