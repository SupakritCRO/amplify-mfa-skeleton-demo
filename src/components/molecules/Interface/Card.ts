import { CompanySchema } from '@/client/rmi'
import { SetStateAction } from 'react'
import { Option } from '@/Interfaces/Options'

export interface CompanyCardProps {
  title?: string
  selectedCompany: CompanySchema | undefined
  setSelectedCompany?: React.Dispatch<SetStateAction<CompanySchema | undefined>>
  companies?: CompanySchema[],
  selectedCompanyIndex?: number;
  userGroup: string
  companyList?: Option[]
  companyData?: CompanySchema[]
}

export interface EstimatedCardItemProps {
  label: string
  textStyle: string
  borderStyle: string
  iconStyle: string
  Icon: React.ElementType<{
    className?: string
  }>
  currency: string
  amount: string
  selectedPeriod: Date
}

export interface StatusCardProps {
  label: string
  selectedCompany: CompanySchema | undefined
  status: string
  handleToggle: () => void
}