import { CauseAnswerSchema, ProcessAnswerSchema, SidebarSchema } from "@/client/rmi"
import { NewRiskItem } from "@/Interfaces/Modal"
import { Dispatch, SetStateAction } from "react"

export interface questionSidebarTableProps {
    setState: (n: number) => void
    questions?: SidebarSchema[]
    current?: number
    filterByParams?: boolean
    isLoading?: boolean
    setNewRiskItem?: Dispatch<SetStateAction<NewRiskItem>>
    backQuestion?: () => void
    causeData: CauseAnswerSchema[]
    processData: ProcessAnswerSchema[]
  }
  
export interface RiskLevelCustomUpdateWithId  {
    id?: number
  }